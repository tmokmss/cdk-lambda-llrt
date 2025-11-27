import { ExpectedResult, IntegTest } from '@aws-cdk/integ-tests-alpha';
import { Stack, StackProps, App } from 'aws-cdk-lib';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Architecture } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { LlrtBinaryType, LlrtFunction } from '../src/llrt-function';

const app = new App({
  context: {
    '@aws-cdk/aws-lambda:useCdkManagedLogGroup': false,
  },
});

class TestStack extends Stack {
  public handlers: LlrtFunction[] = [];

  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    {
      const handler = new LlrtFunction(this, 'Handler', {
        entry: '../example/lambda/s3.ts',
        llrtVersion: 'v0.2.2-beta',
        bundling: {
          commandHooks: {
            beforeBundling: (_i, _o) => {
              return ['echo beforeBundling'];
            },
            afterBundling: (_i, _o) => {
              return ['echo afterBundling'];
            },
            beforeInstall: (_i, _o) => {
              return ['echo beforeInstall'];
            },
          },
        },
      });
      handler.addToRolePolicy(
        new PolicyStatement({
          actions: ['s3:ListAllMyBuckets'],
          resources: ['*'],
        }),
      );
      this.handlers.push(handler);
    }

    {
      const handler = new LlrtFunction(this, 'ArmHandler', {
        entry: '../example/lambda/s3.ts',
        architecture: Architecture.ARM_64,
        llrtVersion: 'v0.2.2-beta',
      });
      handler.addToRolePolicy(
        new PolicyStatement({
          actions: ['s3:ListAllMyBuckets'],
          resources: ['*'],
        }),
      );
      this.handlers.push(handler);
    }

    {
      const handler = new LlrtFunction(this, 'FullBinaryHandler', {
        entry: '../example/lambda/s3.ts',
        llrtBinaryType: LlrtBinaryType.FULL_SDK,
        llrtVersion: 'v0.2.2-beta',
      });
      handler.addToRolePolicy(
        new PolicyStatement({
          actions: ['s3:ListAllMyBuckets'],
          resources: ['*'],
        }),
      );
      this.handlers.push(handler);
    }

    {
      const handler = new LlrtFunction(this, 'NoSdkBinaryHandler', {
        entry: '../example/lambda/s3.ts',
        llrtBinaryType: LlrtBinaryType.NO_SDK,
        llrtVersion: 'v0.2.2-beta',
      });
      handler.addToRolePolicy(
        new PolicyStatement({
          actions: ['s3:ListAllMyBuckets'],
          resources: ['*'],
        }),
      );
      this.handlers.push(handler);
    }

    {
      const handler = new LlrtFunction(this, 'CustomBinaryHandler', {
        entry: '../example/lambda/s3.ts',
        llrtBinaryType: LlrtBinaryType.NO_SDK,
        llrtBinaryPath: '.llrt/llrt-x64-no-sdk-bootstrap',
        depsLockFilePath: '../example/lambda/package-lock.json',
      });
      handler.addToRolePolicy(
        new PolicyStatement({
          actions: ['s3:ListAllMyBuckets'],
          resources: ['*'],
        }),
      );
      this.handlers.push(handler);
    }

    {
      const handler = new LlrtFunction(this, 'LayerHandler', {
        entry: '../example/lambda/s3.ts',
        llrtLayer: true,
        depsLockFilePath: '../example/lambda/package-lock.json',
      });
      handler.addToRolePolicy(
        new PolicyStatement({
          actions: ['s3:ListAllMyBuckets'],
          resources: ['*'],
        }),
      );
      this.handlers.push(handler);
    }
  }
}

const stack = new TestStack(app, 'LlrtFunctionIntegTestTarget');

const integ = new IntegTest(app, 'LlrtFunctionIntegTest', {
  testCases: [stack],
  diffAssets: true,
});

stack.handlers.forEach((handler) => {
  const assertion = integ.assertions.invokeFunction({
    functionName: handler.functionName,
  });
  // https://docs.aws.amazon.com/lambda/latest/api/API_Invoke.html#API_Invoke_ResponseElements
  assertion.expect(ExpectedResult.objectLike({ StatusCode: 200 }));
});
