import { Stack, StackProps, App } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LlrtBinaryType, LlrtFunction } from '../src/';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';

class LlrtFunctionTestStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    {
      const handler = new LlrtFunction(this, 'Handler', {
        entry: '../example/lambda/s3.ts',
      });
      handler.addToRolePolicy(
        new PolicyStatement({
          actions: ['s3:ListAllMyBuckets'],
          resources: ['*'],
        })
      );
    }

    {
      const handler = new LlrtFunction(this, 'EcsHandler', {
        entry: '../example/lambda/ecs.ts',
        bundling: {
          // bundle for browser platform when using aws sdk not bundled in LLRT.
          esbuildArgs: { '--platform': 'browser' },
        },
      });
      handler.addToRolePolicy(
        new PolicyStatement({
          actions: ['ecs:ListClusters'],
          resources: ['*'],
        })
      );
    }

    {
      const handler = new LlrtFunction(this, 'EcsHandlerFullSdk', {
        entry: '../example/lambda/ecs.ts',
        llrtBinaryType: LlrtBinaryType.FULL_SDK,
      });
      handler.addToRolePolicy(
        new PolicyStatement({
          actions: ['ecs:ListClusters'],
          resources: ['*'],
        })
      );
    }

    {
      const handler = new LlrtFunction(this, 'CustomBinary', {
        entry: 'lambda/s3.ts',
        llrtBinaryType: LlrtBinaryType.NO_SDK,
        llrtBinaryPath: '.llrt/llrt-x64-no-sdk-bootstrap',
        depsLockFilePath: 'lambda/package-lock.json',
      });
      handler.addToRolePolicy(
        new PolicyStatement({
          actions: ['s3:ListAllMyBuckets'],
          resources: ['*'],
        })
      );
    }

    const api = new RestApi(this, 'Api');

    {
      const handler = new LlrtFunction(this, 'Hono', {
        entry: '../example/lambda/hono.ts',
        llrtBinaryType: LlrtBinaryType.NO_SDK,
      });

      api.root.addMethod('GET', new LambdaIntegration(handler));
      const resource = api.root.addResource('hono');
      resource.addMethod('GET', new LambdaIntegration(handler));
    }

    {
      const handler = new LlrtFunction(this, 'Ssr', {
        entry: '../example/lambda/ssr.tsx',
      });

      const resource = api.root.addResource('ssr');
      resource.addMethod('GET', new LambdaIntegration(handler));
    }
  }
}

class TestApp extends App {
  constructor() {
    super();

    new LlrtFunctionTestStack(this, 'LlrtFunctionTestStack');
  }
}

new TestApp().synth();
