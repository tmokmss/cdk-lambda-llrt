import { posix } from 'path';
import { CfnResource } from 'aws-cdk-lib';
import { Architecture, Runtime, RuntimeFamily } from 'aws-cdk-lib/aws-lambda';
import { ICommandHooks, NodejsFunction, NodejsFunctionProps, OutputFormat } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

/**
 * The type of LLRT binary to use.
 */
export enum LlrtBinaryType {
  /**
   * The LLRT bundle including full AWS SDK.
   */
  FULL_SDK = 'full-sdk',

  /**
   * The LLRT bundle without AWS SDK.
   */
  NO_SDK = 'no-sdk',

  /**
   * The standard LLRT bundle, including only major services of AWS SDK.
   */
  STANDARD = 'standard',
}

export interface LlrtFunctionProps extends NodejsFunctionProps {
  /**
   * The version of LLRT. See https://github.com/awslabs/llrt/releases
   *
   * @default "latest"
   */
  readonly llrtVersion?: string;

  /**
   * The type of LLRT bundle to use.
   *
   * @default LlrtBinaryType.STANDARD
   */
  readonly llrtBinaryType?: LlrtBinaryType;

  /**
   * A custom relative path to use as a local LLRT bootstrap binary.
   * This path must be specified relative to the function's `projectRoot` directory.
   *
   * @default - If this option is not provided, the LLRT binary is downloaded from GitHub and cached in the .tmp directory.
   */
  readonly llrtBinaryPath?: string;
}

export class LlrtFunction extends NodejsFunction {
  constructor(scope: Construct, id: string, props: LlrtFunctionProps) {
    const version = props.llrtVersion ?? 'latest';
    const arch = props.architecture == Architecture.ARM_64 ? 'arm64' : 'x64';
    const binaryType = props.llrtBinaryType ?? LlrtBinaryType.STANDARD;

    let binaryName: string;
    switch (binaryType) {
      case LlrtBinaryType.FULL_SDK:
        binaryName = `llrt-lambda-${arch}-full-sdk`;
        break;
      case LlrtBinaryType.NO_SDK:
        binaryName = `llrt-lambda-${arch}-no-sdk`;
        break;
      default:
        binaryName = `llrt-lambda-${arch}`;
    }

    // From LLRT v0.2.0-beta, ES2023 is supported:
    // https://github.com/awslabs/llrt/releases/tag/v0.2.0-beta
    // For esbuild, there is no difference between es2022 and es2023. But target==es2023 is
    // only recently supported and throws an error with older esbuild versions.
    // That is why we are using es2022 here instead.
    // https://github.com/evanw/esbuild/releases/tag/v0.21.2
    const target = version >= 'v0.2.0-beta' || version == 'latest' ? 'es2022' : 'es2020';

    // we don't have to bundle these modules, depending on LLRT binary type.
    // https://github.com/awslabs/llrt?tab=readme-ov-file#using-aws-sdk-v3-with-llrt
    const externalModules = [];
    if (binaryType == LlrtBinaryType.FULL_SDK) {
      externalModules.push('@aws-sdk', '@aws-crypto', '@smithy');
    } else if (binaryType == LlrtBinaryType.STANDARD) {
      externalModules.push(
        '@aws-sdk/client-cloudwatch-events',
        '@aws-sdk/client-cloudwatch-logs',
        '@aws-sdk/client-cognito-identity',
        '@aws-sdk/client-cognito-identity-provider',
        '@aws-sdk/client-dynamodb',
        '@aws-sdk/client-eventbridge',
        '@aws-sdk/client-kms',
        '@aws-sdk/client-lambda',
        '@aws-sdk/client-s3',
        '@aws-sdk/client-secrets-manager',
        '@aws-sdk/client-ses',
        '@aws-sdk/client-sfn',
        '@aws-sdk/client-sns',
        '@aws-sdk/client-sqs',
        '@aws-sdk/client-ssm',
        '@aws-sdk/client-sts',
        '@aws-sdk/client-xray',
        '@aws-sdk/credential-providers',
        '@aws-sdk/lib-dynamodb',
        '@aws-sdk/lib-storage',
        '@aws-sdk/s3-presigned-post',
        '@aws-sdk/s3-request-presigner',
        '@aws-sdk/util-dynamodb',
        '@aws-sdk/util-user-agent-browser',
        '@aws-crypto',
        '@smithy',
      );
    }

    const binaryUrl =
      version == 'latest'
        ? `https://github.com/awslabs/llrt/releases/latest/download/${binaryName}.zip`
        : `https://github.com/awslabs/llrt/releases/download/${version}/${binaryName}.zip`;
    const cacheDir = `.tmp/llrt/${version}/${arch}/${binaryType}`;

    const { commandHooks: originalCommandHooks, ...otherBundlingProps } = props.bundling ?? {};
    const afterBundlingCommandHook: ICommandHooks['afterBundling'] = (i, o) => !props.llrtBinaryPath ? [
      // Download llrt binary from GitHub release and cache it
      `if [ ! -e ${posix.join(i, cacheDir, 'bootstrap')} ]; then
        mkdir -p ${posix.join(i, cacheDir)}
        cd ${posix.join(i, cacheDir)}
        curl -L -o llrt_temp.zip ${binaryUrl}
        unzip llrt_temp.zip
        rm -rf llrt_temp.zip
        cd -
       fi`,
      `cp ${posix.join(i, cacheDir, 'bootstrap')} ${o}`,
    ] : [`cp ${posix.join(i, props.llrtBinaryPath)} ${posix.join(o, 'bootstrap')}`];

    super(scope, id, {
      // set this to remove an unnecessary environment variable.
      awsSdkConnectionReuse: false,
      // set this to remove a warning about runtime. we use al2023 runtime anyway.
      runtime: new Runtime('nodejs20.x', RuntimeFamily.NODEJS),
      ...props,
      bundling: {
        target,
        format: OutputFormat.ESM,
        minify: true,
        commandHooks: {
          beforeBundling: (i, o) => [...(originalCommandHooks?.beforeBundling(i, o) ?? [])],
          afterBundling: (i, o) => [...afterBundlingCommandHook(i, o), ...(originalCommandHooks?.afterBundling(i, o) ?? [])],
          beforeInstall: (i, o) => [...(originalCommandHooks?.beforeInstall(i, o) ?? [])],
        },
        // set this because local bundling will not work on Windows
        forceDockerBundling: process.platform == 'win32' ? true : undefined,
        // Dependencies bundled in the runtime
        // https://github.com/awslabs/llrt?tab=readme-ov-file#using-aws-sdk-v3-with-llrt
        externalModules,
        ...otherBundlingProps,
      },
    });

    (this.node.defaultChild as CfnResource).addPropertyOverride('Runtime', 'provided.al2023');
  }
}
