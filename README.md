# AWS CDK LLRT Function construct

This is a CDK construct library that aims to accelerate your experiment on [LLRT](https://github.com/awslabs/llrt), a lightweight JavaScript runtime for AWS Lambda.

## Usage
Install it via npm:

```sh
npm install cdk-lambda-llrt
```

Then you can use `LlrtFunction` construct. Just set an entry point for the function.

```ts
import { LlrtFunction } from 'cdk-lambda-llrt';

const handler = new LlrtFunction(this, 'Handler', {
    entry: 'lambda/index.ts',
});
```

If you are already using `NodejsFunction` construct, you should be able to just replace it to `LlrtFunction`.

> [!WARNING]
> LLRT is currently experimental and not fully compatible with Node.js. You should expect some trial and errors to use LLRT with your existing code.

If you want to upgrade the LLRT version, remove the `.tmp` directory, which contains the cache of LLRT binary fetched from GitHub (only applicable when you set `llrtVersion` to `latest` (default)).

### Setting platform=browser

In some cases, your code may run successfully on LLRT by setting bundle target platform to `browser` (e.g. when using AWS SDK packages that are not bundled in LLRT or packages that can run using Web APIs.) You can configure it by the following code:

```ts
import { LlrtFunction } from 'cdk-lambda-llrt';

const handler = new LlrtFunction(this, 'Handler', {
    entry: 'lambda/index.ts',
    bundling: {
        esbuildArgs: { '--platform': 'browser' },
    }
});
```

### Docker bundling
In some environments, LlrtFunction's bundling steps will fail because the underlying `NodejsFunction` [sometimes runs the commands](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda_nodejs-readme.html#local-bundling) on your host machine, and your environment does not support these commands or syntax. To avoid this error, you can force docker bundling for these commands not to depend on your execution environment.

```ts
new LlrtFunction(this, 'Handler', {
    entry: 'handler.ts',
    bundling: {
        forceDockerBundling: true,  // Add this!
    },
});
```

Note that we enable this flag automatically on Windows platform.

## Examples
See [example](./example/README.md) for examples to use `LlrtFunction` construct.
