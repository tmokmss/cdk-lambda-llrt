import { CfnResource } from 'aws-cdk-lib';
import { Architecture } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction, NodejsFunctionProps, OutputFormat } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

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
      awsSdkConnectionReuse: false,
      ...props,
      bundling: {
        target: 'es2020',
        format: OutputFormat.ESM,
        minify: true,
        commandHooks: {
          beforeBundling: (_i, _o) => [],
          afterBundling: (i, o) => [
            // Download llrt binary from GitHub release and cache it
            `if [ ! -e ${i}/${cacheDir}/bootstrap ]; then
              mkdir -p ${i}/${cacheDir}
              cd ${i}/${cacheDir}
              curl -L -o llrt_temp.zip ${binaryUrl}
              unzip llrt_temp.zip
              rm -rf llrt_temp.zip
             fi`,
            `cp ${i}/${cacheDir}/bootstrap ${o}/`,
          ],
          beforeInstall: (_i, _o) => [],
        },
        // Dependencies bundled in the runtime
        // https://github.com/awslabs/llrt?tab=readme-ov-file#using-aws-sdk-v3-with-llrt
        externalModules: [
          '@aws-sdk/client-dynamodb',
          '@aws-sdk/lib-dynamodb',
          '@aws-sdk/client-kms',
          '@aws-sdk/client-lambda',
          '@aws-sdk/client-s3',
          '@aws-sdk/client-secrets-manager',
          '@aws-sdk/client-ses',
          '@aws-sdk/client-sns',
          '@aws-sdk/client-sqs',
          '@aws-sdk/client-sts',
          '@aws-sdk/client-ssm',
          '@aws-sdk/client-cloudwatch-logs',
          '@aws-sdk/client-cloudwatch-events',
          '@aws-sdk/client-eventbridge',
          '@aws-sdk/client-sfn',
          '@aws-sdk/client-xray',
          '@aws-sdk/client-cognito-identity',
          '@aws-sdk/util-dynamodb',
          '@aws-sdk/credential-providers',
          '@smithy/signature-v4',
        ],
        ...props.bundling,
      },
    });

    (this.node.defaultChild as CfnResource).addPropertyOverride('Runtime', 'provided.al2023');
  }
}
