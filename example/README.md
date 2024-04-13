# Example LLRT applications

This sample project includes:

* [Hono](https://hono.dev/)
* Hono SSR with JSX
* AWS SDK v3 (client-s3)
* AWS SDK v3 (client-ecs, not bundled in LLRT)

## Usage
To deploy the sample, run the following commands:

```sh
cd lambda
npm ci
cd ../

npx cdk deploy
```
