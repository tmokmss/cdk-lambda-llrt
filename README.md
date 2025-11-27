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

In some cases, your code may run successfully on LLRT by setting bundle target platform to `browser`. You can configure it by the following code:

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

### LLRT Binary Types

LLRT [publishes](https://github.com/awslabs/llrt/releases) several types of binaries with different sets of bundled SDKs:

- `LlrtBinaryType.FULL_SDK`: Includes all AWS SDKs
- `LlrtBinaryType.NO_SDK`: No AWS SDKs included
- `LlrtBinaryType.STANDARD`: Standard bundle (default)

You can specify the binary type when creating a new `LlrtFunction`:

```ts
const handler = new LlrtFunction(this, 'Handler', {
    entry: 'lambda/index.ts',
    llrtBinaryType: LlrtBinaryType.FULL_SDK,
});
```

### LLRT Binary Path

By default, CDK Lambda LLRT downloads the LLRT bootstrap binary from LLRT's GitHub releases and caches this in the `.tmp` directory.
If you have your own bootstrap binary you want to use, you can specify the relative path from the function's `projectRoot` directory with the `llrtBinaryPath` property.

```ts
const handler = new LlrtFunction(this, 'Handler', {
    entry: 'lambda/index.ts',
    llrtBinaryPath: '.llrt/bootstrap'
});
```

### LLRT Layer

By default, CDK Lambda LLRT bundles the LLRT bootstrap binary directly in your lambda function.
If you want to package the binary in a separate layer that can be shared amongst functions then set `llrtLayer` to `true`.

```ts
const handler = new LlrtFunction(this, 'Handler', {
    entry: 'lambda/index.ts',
    llrtLayer: true
});
```

## Examples
See [example](./example/README.md) for examples to use `LlrtFunction` construct.
