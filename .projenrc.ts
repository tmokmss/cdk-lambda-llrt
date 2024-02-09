import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'tmokmss',
  authorAddress: 'tomookam@live.jp',
  cdkVersion: '2.38.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.3.0',
  name: 'cdk-lambda-llrt',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/mtomooka/cdk-llrt-function.git',

  eslintOptions: {
    dirs: [],
    ignorePatterns: ['example/**/*', 'test/assets/**/*', 'test/*.snapshot/**/*', '*.d.ts'],
  },
  gitignore: ['*.js', '*.d.ts', '!test/.*.snapshot/**/*', '.tmp'],
  keywords: ['aws', 'cdk', 'lambda', 'aws-cdk'],
  tsconfigDev: {
    compilerOptions: {},
    exclude: ['example', 'test/.*.snapshot'],
  },
  devDeps: ['@aws-cdk/integ-runner@2.38.0', '@aws-cdk/integ-tests-alpha@2.38.0-alpha.0'],
});

project.addPackageIgnore('.tmp');
project.projectBuild.testTask.exec('yarn tsc -p tsconfig.dev.json && yarn integ-runner');

project.synth();
