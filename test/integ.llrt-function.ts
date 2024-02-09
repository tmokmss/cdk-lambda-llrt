import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { Stack, StackProps, App } from 'aws-cdk-lib';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { LlrtFunction } from '../src/llrt-function';

const app = new App();

class TestStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const handler = new LlrtFunction(this, 'Handler', {
      entry: '../example/lambda/index.ts',
    });
    handler.addToRolePolicy(
      new PolicyStatement({
        actions: ['s3:ListAllMyBuckets'],
        resources: ['*'],
      }),
    );
  }
}

const stack = new TestStack(app, 'LlrtFunctionIntegTest');

new IntegTest(app, 'Test', {
  testCases: [stack],
  diffAssets: true,
});
