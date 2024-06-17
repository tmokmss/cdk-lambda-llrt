import { CfnResource } from 'aws-cdk-lib';
import { Architecture, Runtime, RuntimeFamily } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction, NodejsFunctionProps, OutputFormat } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { posix } from 'path';

export interface LlrtFunctionProps extends NodejsFunctionProps {
  /**
   * The verson of LLRT. See https://github.com/awslabs/llrt/releases
   *
   * @default "latest"
   */
  readonly llrtVersion?: string;
}

export class LlrtFunction extends NodejsFunction {
  constructor(scope: Construct, id: string, props: LlrtFunctionProps) {
    const version = props.llrtVersion ?? 'latest';
    const arch = props.architecture == Architecture.ARM_64 ? 'arm64' : 'x64';
    const binaryUrl =
      version == 'latest'
        ? `https://github.com/awslabs/llrt/releases/latest/download/llrt-lambda-${arch}.zip`
        : `https://github.com/awslabs/llrt/releases/download/${version}/llrt-lambda-${arch}.zip`;

    const cacheDir = `.tmp/llrt/${version}/${arch}`;
    super(scope, id, {
      // set this to remove an unnecessary environment variable.
      awsSdkConnectionReuse: false,
      // set this to remove a warning about runtime. we use al2023 runtime anyway.
      runtime: new Runtime('nodejs20.x', RuntimeFamily.NODEJS),
      ...props,
      bundling: {
        target: 'es2020',
        format: OutputFormat.ESM,
        minify: true,
        commandHooks: {
          beforeBundling: (_i, _o) => [],
          afterBundling: (i, o) => [
            // Download llrt binary from GitHub release and cache it
            `if [ ! -e ${posix.join(i, cacheDir, 'bootstrap')} ]; then
              mkdir -p ${posix.join(i, cacheDir)}
              cd ${posix.join(i, cacheDir)}
              curl -L -o llrt_temp.zip ${binaryUrl}
              unzip llrt_temp.zip
              rm -rf llrt_temp.zip
             fi`,
            `cp ${posix.join(i, cacheDir, 'bootstrap')} ${o}`,
          ],
          beforeInstall: (_i, _o) => [],
        },
        // set this because local bundling will not work on Windows
        forceDockerBundling: process.platform == 'win32' ? true : undefined,
        // Dependencies bundled in the runtime
        // https://github.com/awslabs/llrt?tab=readme-ov-file#using-aws-sdk-v3-with-llrt
        externalModules: [
          '@aws-sdk/client-cloudwatch-events',
          '@aws-sdk/client-cloudwatch-logs',
          '@aws-sdk/client-cognito-identity',
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
          '@aws-sdk/s3-request-presigner',
          '@aws-sdk/util-dynamodb',
          '@smithy',
          'uuid',
        ],
        ...props.bundling,
      },
    });

    (this.node.defaultChild as CfnResource).addPropertyOverride('Runtime', 'provided.al2023');
  }
}
