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

## Examples
See [example](./example/README.md) for examples to use `LlrtFunction` construct.
