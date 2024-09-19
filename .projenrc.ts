import { join } from 'path';
import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'tmokmss',
  authorAddress: 'tomookam@live.jp',
  // we don't strictly guarantee it works in older CDK (integ-runner runs on newer CDK), but hopefully it should.
  cdkVersion: '2.38.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'cdk-lambda-llrt',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/tmokmss/cdk-lambda-llrt.git',
  description: 'Deploy Lambda functions with LLRT (Low Latency Runtime)',
  eslintOptions: {
    dirs: [],
    ignorePatterns: ['example/**/*', 'test/assets/**/*', 'test/*.snapshot/**/*', '*.d.ts'],
  },
  npmIgnoreOptions: {
    ignorePatterns: ['/example/lambda/node_modules'],
  },
  gitignore: ['*.js', '*.d.ts', '!test/.*.snapshot/**/*', '.tmp'],
  keywords: ['aws', 'cdk', 'lambda', 'aws-cdk'],
  tsconfigDev: {
    compilerOptions: {},
    exclude: ['example', 'test/.*.snapshot'],
  },
  devDeps: [
    'aws-cdk-lib',
    'aws-cdk',
    'constructs',
    '@aws-cdk/integ-runner@^2.159.0-alpha.0',
    '@aws-cdk/integ-tests-alpha@^2.159.0-alpha.0',
    'esbuild',
  ],
  peerDependencyOptions: {
    pinnedDevDependency: false,
  },
});

project.addPackageIgnore('.tmp');
// required to run integ tests
project.projectBuild.testTask.exec('npm install', { cwd: join('example', 'lambda') });
project.projectBuild.testTask.exec('yarn tsc -p tsconfig.dev.json && yarn integ-runner');

project.synth();
