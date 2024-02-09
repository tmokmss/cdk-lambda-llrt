import { Stack, StackProps, App } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { LlrtFunction } from '../src/';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';

class LlrtFunctionTestStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const handler = new LlrtFunction(this, 'Handler', {
      entry: '../example/lambda/index.ts',
    });
    handler.addToRolePolicy(
      new PolicyStatement({
        actions: ['s3:ListAllMyBuckets'],
        resources: ['*'],
      })
    );
  }
}

class TestApp extends App {
  constructor() {
    super();

    new LlrtFunctionTestStack(this, 'LlrtFunctionTestStack');
  }
}

new TestApp().synth();
