# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LlrtFunction <a name="LlrtFunction" id="cdk-lambda-llrt.LlrtFunction"></a>

#### Initializers <a name="Initializers" id="cdk-lambda-llrt.LlrtFunction.Initializer"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

new LlrtFunction(scope: Construct, id: string, props: LlrtFunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-lambda-llrt.LlrtFunctionProps">LlrtFunctionProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-lambda-llrt.LlrtFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-llrt.LlrtFunction.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-lambda-llrt.LlrtFunction.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-lambda-llrt.LlrtFunctionProps">LlrtFunctionProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.addEventSource">addEventSource</a></code> | Adds an event source to this function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.addEventSourceMapping">addEventSourceMapping</a></code> | Adds an event source that maps to this AWS Lambda function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.addFunctionUrl">addFunctionUrl</a></code> | Adds a url to this lambda function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.addPermission">addPermission</a></code> | Adds a permission to the Lambda resource policy. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.addToRolePolicy">addToRolePolicy</a></code> | Adds a statement to the IAM role assumed by the instance. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.configureAsyncInvoke">configureAsyncInvoke</a></code> | Configures options for asynchronous invocation. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.considerWarningOnInvokeFunctionPermissions">considerWarningOnInvokeFunctionPermissions</a></code> | A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.grantInvoke">grantInvoke</a></code> | Grant the given identity permissions to invoke this Lambda. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.grantInvokeCompositePrincipal">grantInvokeCompositePrincipal</a></code> | Grant multiple principals the ability to invoke this Lambda via CompositePrincipal. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.grantInvokeLatestVersion">grantInvokeLatestVersion</a></code> | Grant the given identity permissions to invoke the $LATEST version or unqualified version of this Lambda. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.grantInvokeUrl">grantInvokeUrl</a></code> | Grant the given identity permissions to invoke this Lambda Function URL. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.grantInvokeVersion">grantInvokeVersion</a></code> | Grant the given identity permissions to invoke the given version of this Lambda. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.metric">metric</a></code> | Return the given named metric for this Function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.metricDuration">metricDuration</a></code> | How long execution of this Lambda takes. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.metricErrors">metricErrors</a></code> | How many invocations of this Lambda fail. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.metricInvocations">metricInvocations</a></code> | How often this Lambda is invoked. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.metricThrottles">metricThrottles</a></code> | How often this Lambda is throttled. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.addAlias">addAlias</a></code> | Defines an alias for this function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.addEnvironment">addEnvironment</a></code> | Adds an environment variable to this Lambda function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.addLayers">addLayers</a></code> | Adds one or more Lambda Layers to this Lambda function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.invalidateVersionBasedOn">invalidateVersionBasedOn</a></code> | Mix additional information into the hash of the Version object. |

---

##### `toString` <a name="toString" id="cdk-lambda-llrt.LlrtFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="cdk-lambda-llrt.LlrtFunction.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="cdk-lambda-llrt.LlrtFunction.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventSource` <a name="addEventSource" id="cdk-lambda-llrt.LlrtFunction.addEventSource"></a>

```typescript
public addEventSource(source: IEventSource): void
```

Adds an event source to this function.

Event sources are implemented in the aws-cdk-lib/aws-lambda-event-sources module.

The following example adds an SQS Queue as an event source:
```
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
myFunction.addEventSource(new SqsEventSource(myQueue));
```

###### `source`<sup>Required</sup> <a name="source" id="cdk-lambda-llrt.LlrtFunction.addEventSource.parameter.source"></a>

- *Type:* aws-cdk-lib.aws_lambda.IEventSource

---

##### `addEventSourceMapping` <a name="addEventSourceMapping" id="cdk-lambda-llrt.LlrtFunction.addEventSourceMapping"></a>

```typescript
public addEventSourceMapping(id: string, options: EventSourceMappingOptions): EventSourceMapping
```

Adds an event source that maps to this AWS Lambda function.

###### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-llrt.LlrtFunction.addEventSourceMapping.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Required</sup> <a name="options" id="cdk-lambda-llrt.LlrtFunction.addEventSourceMapping.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventSourceMappingOptions

---

##### `addFunctionUrl` <a name="addFunctionUrl" id="cdk-lambda-llrt.LlrtFunction.addFunctionUrl"></a>

```typescript
public addFunctionUrl(options?: FunctionUrlOptions): FunctionUrl
```

Adds a url to this lambda function.

###### `options`<sup>Optional</sup> <a name="options" id="cdk-lambda-llrt.LlrtFunction.addFunctionUrl.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionUrlOptions

---

##### `addPermission` <a name="addPermission" id="cdk-lambda-llrt.LlrtFunction.addPermission"></a>

```typescript
public addPermission(id: string, permission: Permission): void
```

Adds a permission to the Lambda resource policy.

> [Permission for details.](Permission for details.)

###### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-llrt.LlrtFunction.addPermission.parameter.id"></a>

- *Type:* string

The id for the permission construct.

---

###### `permission`<sup>Required</sup> <a name="permission" id="cdk-lambda-llrt.LlrtFunction.addPermission.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_lambda.Permission

The permission to grant to this Lambda function.

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="cdk-lambda-llrt.LlrtFunction.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Adds a statement to the IAM role assumed by the instance.

###### `statement`<sup>Required</sup> <a name="statement" id="cdk-lambda-llrt.LlrtFunction.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `configureAsyncInvoke` <a name="configureAsyncInvoke" id="cdk-lambda-llrt.LlrtFunction.configureAsyncInvoke"></a>

```typescript
public configureAsyncInvoke(options: EventInvokeConfigOptions): void
```

Configures options for asynchronous invocation.

###### `options`<sup>Required</sup> <a name="options" id="cdk-lambda-llrt.LlrtFunction.configureAsyncInvoke.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EventInvokeConfigOptions

---

##### `considerWarningOnInvokeFunctionPermissions` <a name="considerWarningOnInvokeFunctionPermissions" id="cdk-lambda-llrt.LlrtFunction.considerWarningOnInvokeFunctionPermissions"></a>

```typescript
public considerWarningOnInvokeFunctionPermissions(scope: Construct, action: string): void
```

A warning will be added to functions under the following conditions: - permissions that include `lambda:InvokeFunction` are added to the unqualified function.

function.currentVersion is invoked before or after the permission is created.

This applies only to permissions on Lambda functions, not versions or aliases.
This function is overridden as a noOp for QualifiedFunctionBase.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-lambda-llrt.LlrtFunction.considerWarningOnInvokeFunctionPermissions.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `action`<sup>Required</sup> <a name="action" id="cdk-lambda-llrt.LlrtFunction.considerWarningOnInvokeFunctionPermissions.parameter.action"></a>

- *Type:* string

---

##### `grantInvoke` <a name="grantInvoke" id="cdk-lambda-llrt.LlrtFunction.grantInvoke"></a>

```typescript
public grantInvoke(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-lambda-llrt.LlrtFunction.grantInvoke.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeCompositePrincipal` <a name="grantInvokeCompositePrincipal" id="cdk-lambda-llrt.LlrtFunction.grantInvokeCompositePrincipal"></a>

```typescript
public grantInvokeCompositePrincipal(compositePrincipal: CompositePrincipal): Grant[]
```

Grant multiple principals the ability to invoke this Lambda via CompositePrincipal.

###### `compositePrincipal`<sup>Required</sup> <a name="compositePrincipal" id="cdk-lambda-llrt.LlrtFunction.grantInvokeCompositePrincipal.parameter.compositePrincipal"></a>

- *Type:* aws-cdk-lib.aws_iam.CompositePrincipal

---

##### `grantInvokeLatestVersion` <a name="grantInvokeLatestVersion" id="cdk-lambda-llrt.LlrtFunction.grantInvokeLatestVersion"></a>

```typescript
public grantInvokeLatestVersion(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke the $LATEST version or unqualified version of this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-lambda-llrt.LlrtFunction.grantInvokeLatestVersion.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeUrl` <a name="grantInvokeUrl" id="cdk-lambda-llrt.LlrtFunction.grantInvokeUrl"></a>

```typescript
public grantInvokeUrl(grantee: IGrantable): Grant
```

Grant the given identity permissions to invoke this Lambda Function URL.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-lambda-llrt.LlrtFunction.grantInvokeUrl.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantInvokeVersion` <a name="grantInvokeVersion" id="cdk-lambda-llrt.LlrtFunction.grantInvokeVersion"></a>

```typescript
public grantInvokeVersion(grantee: IGrantable, version: IVersion): Grant
```

Grant the given identity permissions to invoke the given version of this Lambda.

###### `grantee`<sup>Required</sup> <a name="grantee" id="cdk-lambda-llrt.LlrtFunction.grantInvokeVersion.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `version`<sup>Required</sup> <a name="version" id="cdk-lambda-llrt.LlrtFunction.grantInvokeVersion.parameter.version"></a>

- *Type:* aws-cdk-lib.aws_lambda.IVersion

---

##### `metric` <a name="metric" id="cdk-lambda-llrt.LlrtFunction.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this Function.

###### `metricName`<sup>Required</sup> <a name="metricName" id="cdk-lambda-llrt.LlrtFunction.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-llrt.LlrtFunction.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricDuration` <a name="metricDuration" id="cdk-lambda-llrt.LlrtFunction.metricDuration"></a>

```typescript
public metricDuration(props?: MetricOptions): Metric
```

How long execution of this Lambda takes.

Average over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-llrt.LlrtFunction.metricDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricErrors` <a name="metricErrors" id="cdk-lambda-llrt.LlrtFunction.metricErrors"></a>

```typescript
public metricErrors(props?: MetricOptions): Metric
```

How many invocations of this Lambda fail.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-llrt.LlrtFunction.metricErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricInvocations` <a name="metricInvocations" id="cdk-lambda-llrt.LlrtFunction.metricInvocations"></a>

```typescript
public metricInvocations(props?: MetricOptions): Metric
```

How often this Lambda is invoked.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-llrt.LlrtFunction.metricInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottles` <a name="metricThrottles" id="cdk-lambda-llrt.LlrtFunction.metricThrottles"></a>

```typescript
public metricThrottles(props?: MetricOptions): Metric
```

How often this Lambda is throttled.

Sum over 5 minutes

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-llrt.LlrtFunction.metricThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `addAlias` <a name="addAlias" id="cdk-lambda-llrt.LlrtFunction.addAlias"></a>

```typescript
public addAlias(aliasName: string, options?: AliasOptions): Alias
```

Defines an alias for this function.

The alias will automatically be updated to point to the latest version of
the function as it is being updated during a deployment.

```ts
declare const fn: lambda.Function;

fn.addAlias('Live');

// Is equivalent to

new lambda.Alias(this, 'AliasLive', {
  aliasName: 'Live',
  version: fn.currentVersion,
});
```

###### `aliasName`<sup>Required</sup> <a name="aliasName" id="cdk-lambda-llrt.LlrtFunction.addAlias.parameter.aliasName"></a>

- *Type:* string

The name of the alias.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-lambda-llrt.LlrtFunction.addAlias.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.AliasOptions

Alias options.

---

##### `addEnvironment` <a name="addEnvironment" id="cdk-lambda-llrt.LlrtFunction.addEnvironment"></a>

```typescript
public addEnvironment(key: string, value: string, options?: EnvironmentOptions): Function
```

Adds an environment variable to this Lambda function.

If this is a ref to a Lambda function, this operation results in a no-op.

###### `key`<sup>Required</sup> <a name="key" id="cdk-lambda-llrt.LlrtFunction.addEnvironment.parameter.key"></a>

- *Type:* string

The environment variable key.

---

###### `value`<sup>Required</sup> <a name="value" id="cdk-lambda-llrt.LlrtFunction.addEnvironment.parameter.value"></a>

- *Type:* string

The environment variable's value.

---

###### `options`<sup>Optional</sup> <a name="options" id="cdk-lambda-llrt.LlrtFunction.addEnvironment.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_lambda.EnvironmentOptions

Environment variable options.

---

##### `addLayers` <a name="addLayers" id="cdk-lambda-llrt.LlrtFunction.addLayers"></a>

```typescript
public addLayers(layers: ...ILayerVersion[]): void
```

Adds one or more Lambda Layers to this Lambda function.

###### `layers`<sup>Required</sup> <a name="layers" id="cdk-lambda-llrt.LlrtFunction.addLayers.parameter.layers"></a>

- *Type:* ...aws-cdk-lib.aws_lambda.ILayerVersion[]

the layers to be added.

---

##### `invalidateVersionBasedOn` <a name="invalidateVersionBasedOn" id="cdk-lambda-llrt.LlrtFunction.invalidateVersionBasedOn"></a>

```typescript
public invalidateVersionBasedOn(x: string): void
```

Mix additional information into the hash of the Version object.

The Lambda Function construct does its best to automatically create a new
Version when anything about the Function changes (its code, its layers,
any of the other properties).

However, you can sometimes source information from places that the CDK cannot
look into, like the deploy-time values of SSM parameters. In those cases,
the CDK would not force the creation of a new Version object when it actually
should.

This method can be used to invalidate the current Version object. Pass in
any string into this method, and make sure the string changes when you know
a new Version needs to be created.

This method may be called more than once.

###### `x`<sup>Required</sup> <a name="x" id="cdk-lambda-llrt.LlrtFunction.invalidateVersionBasedOn.parameter.x"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.classifyVersionProperty">classifyVersionProperty</a></code> | Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.fromFunctionArn">fromFunctionArn</a></code> | Import a lambda function into the CDK using its ARN. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.fromFunctionAttributes">fromFunctionAttributes</a></code> | Creates a Lambda function object which represents a function not defined within this stack. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.fromFunctionName">fromFunctionName</a></code> | Import a lambda function into the CDK using its name. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.metricAll">metricAll</a></code> | Return the given named metric for this Lambda. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.metricAllConcurrentExecutions">metricAllConcurrentExecutions</a></code> | Metric for the number of concurrent executions across all Lambdas. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.metricAllDuration">metricAllDuration</a></code> | Metric for the Duration executing all Lambdas. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.metricAllErrors">metricAllErrors</a></code> | Metric for the number of Errors executing all Lambdas. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.metricAllInvocations">metricAllInvocations</a></code> | Metric for the number of invocations of all Lambdas. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.metricAllThrottles">metricAllThrottles</a></code> | Metric for the number of throttled invocations of all Lambdas. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.metricAllUnreservedConcurrentExecutions">metricAllUnreservedConcurrentExecutions</a></code> | Metric for the number of unreserved concurrent executions across all Lambdas. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-lambda-llrt.LlrtFunction.isConstruct"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-lambda-llrt.LlrtFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="cdk-lambda-llrt.LlrtFunction.isOwnedResource"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-lambda-llrt.LlrtFunction.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="cdk-lambda-llrt.LlrtFunction.isResource"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="cdk-lambda-llrt.LlrtFunction.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `classifyVersionProperty` <a name="classifyVersionProperty" id="cdk-lambda-llrt.LlrtFunction.classifyVersionProperty"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.classifyVersionProperty(propertyName: string, locked: boolean)
```

Record whether specific properties in the `AWS::Lambda::Function` resource should also be associated to the Version resource.

See 'currentVersion' section in the module README for more details.

###### `propertyName`<sup>Required</sup> <a name="propertyName" id="cdk-lambda-llrt.LlrtFunction.classifyVersionProperty.parameter.propertyName"></a>

- *Type:* string

The property to classify.

---

###### `locked`<sup>Required</sup> <a name="locked" id="cdk-lambda-llrt.LlrtFunction.classifyVersionProperty.parameter.locked"></a>

- *Type:* boolean

whether the property should be associated to the version or not.

---

##### `fromFunctionArn` <a name="fromFunctionArn" id="cdk-lambda-llrt.LlrtFunction.fromFunctionArn"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.fromFunctionArn(scope: Construct, id: string, functionArn: string)
```

Import a lambda function into the CDK using its ARN.

For `Function.addPermissions()` to work on this imported lambda, make sure that is
in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-lambda-llrt.LlrtFunction.fromFunctionArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-llrt.LlrtFunction.fromFunctionArn.parameter.id"></a>

- *Type:* string

---

###### `functionArn`<sup>Required</sup> <a name="functionArn" id="cdk-lambda-llrt.LlrtFunction.fromFunctionArn.parameter.functionArn"></a>

- *Type:* string

---

##### `fromFunctionAttributes` <a name="fromFunctionAttributes" id="cdk-lambda-llrt.LlrtFunction.fromFunctionAttributes"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.fromFunctionAttributes(scope: Construct, id: string, attrs: FunctionAttributes)
```

Creates a Lambda function object which represents a function not defined within this stack.

For `Function.addPermissions()` to work on this imported lambda, set the sameEnvironment property to true
if this imported lambda is in the same account and region as the stack you are importing it into.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-lambda-llrt.LlrtFunction.fromFunctionAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-llrt.LlrtFunction.fromFunctionAttributes.parameter.id"></a>

- *Type:* string

The name of the lambda construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="cdk-lambda-llrt.LlrtFunction.fromFunctionAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_lambda.FunctionAttributes

the attributes of the function to import.

---

##### `fromFunctionName` <a name="fromFunctionName" id="cdk-lambda-llrt.LlrtFunction.fromFunctionName"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.fromFunctionName(scope: Construct, id: string, functionName: string)
```

Import a lambda function into the CDK using its name.

###### `scope`<sup>Required</sup> <a name="scope" id="cdk-lambda-llrt.LlrtFunction.fromFunctionName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="cdk-lambda-llrt.LlrtFunction.fromFunctionName.parameter.id"></a>

- *Type:* string

---

###### `functionName`<sup>Required</sup> <a name="functionName" id="cdk-lambda-llrt.LlrtFunction.fromFunctionName.parameter.functionName"></a>

- *Type:* string

---

##### `metricAll` <a name="metricAll" id="cdk-lambda-llrt.LlrtFunction.metricAll"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.metricAll(metricName: string, props?: MetricOptions)
```

Return the given named metric for this Lambda.

###### `metricName`<sup>Required</sup> <a name="metricName" id="cdk-lambda-llrt.LlrtFunction.metricAll.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-llrt.LlrtFunction.metricAll.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllConcurrentExecutions` <a name="metricAllConcurrentExecutions" id="cdk-lambda-llrt.LlrtFunction.metricAllConcurrentExecutions"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.metricAllConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-llrt.LlrtFunction.metricAllConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllDuration` <a name="metricAllDuration" id="cdk-lambda-llrt.LlrtFunction.metricAllDuration"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.metricAllDuration(props?: MetricOptions)
```

Metric for the Duration executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-llrt.LlrtFunction.metricAllDuration.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllErrors` <a name="metricAllErrors" id="cdk-lambda-llrt.LlrtFunction.metricAllErrors"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.metricAllErrors(props?: MetricOptions)
```

Metric for the number of Errors executing all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-llrt.LlrtFunction.metricAllErrors.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllInvocations` <a name="metricAllInvocations" id="cdk-lambda-llrt.LlrtFunction.metricAllInvocations"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.metricAllInvocations(props?: MetricOptions)
```

Metric for the number of invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-llrt.LlrtFunction.metricAllInvocations.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllThrottles` <a name="metricAllThrottles" id="cdk-lambda-llrt.LlrtFunction.metricAllThrottles"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.metricAllThrottles(props?: MetricOptions)
```

Metric for the number of throttled invocations of all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-llrt.LlrtFunction.metricAllThrottles.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAllUnreservedConcurrentExecutions` <a name="metricAllUnreservedConcurrentExecutions" id="cdk-lambda-llrt.LlrtFunction.metricAllUnreservedConcurrentExecutions"></a>

```typescript
import { LlrtFunction } from 'cdk-lambda-llrt'

LlrtFunction.metricAllUnreservedConcurrentExecutions(props?: MetricOptions)
```

Metric for the number of unreserved concurrent executions across all Lambdas.

###### `props`<sup>Optional</sup> <a name="props" id="cdk-lambda-llrt.LlrtFunction.metricAllUnreservedConcurrentExecutions.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64). |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Access the Connections object. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.functionArn">functionArn</a></code> | <code>string</code> | ARN of this function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.functionName">functionName</a></code> | <code>string</code> | Name of this function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.functionRef">functionRef</a></code> | <code>aws-cdk-lib.aws_lambda.FunctionReference</code> | A reference to a Function resource. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this Lambda Function is running as. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.isBoundToVpc">isBoundToVpc</a></code> | <code>boolean</code> | Whether or not this Lambda function was bound to a VPC. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.latestVersion">latestVersion</a></code> | <code>aws-cdk-lib.aws_lambda.IVersion</code> | The `$LATEST` version of this function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.permissionsNode">permissionsNode</a></code> | <code>constructs.Node</code> | The construct node where permissions are attached. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.resourceArnsForGrantInvoke">resourceArnsForGrantInvoke</a></code> | <code>string[]</code> | The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke(). |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role associated with this function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.currentVersion">currentVersion</a></code> | <code>aws-cdk-lib.aws_lambda.Version</code> | Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The LogGroup where the Lambda function's logs are made available. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime configured for this lambda. |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The DLQ (as queue) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The DLQ (as topic) associated with this Lambda Function (this is an optional attribute). |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout configured for this lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-lambda-llrt.LlrtFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="cdk-lambda-llrt.LlrtFunction.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="cdk-lambda-llrt.LlrtFunction.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="cdk-lambda-llrt.LlrtFunction.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture

The architecture of this Lambda Function (this is an optional attribute and defaults to X86_64).

---

##### `connections`<sup>Required</sup> <a name="connections" id="cdk-lambda-llrt.LlrtFunction.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Access the Connections object.

Will fail if not a VPC-enabled Lambda Function

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="cdk-lambda-llrt.LlrtFunction.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

ARN of this function.

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="cdk-lambda-llrt.LlrtFunction.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Name of this function.

---

##### `functionRef`<sup>Required</sup> <a name="functionRef" id="cdk-lambda-llrt.LlrtFunction.property.functionRef"></a>

```typescript
public readonly functionRef: FunctionReference;
```

- *Type:* aws-cdk-lib.aws_lambda.FunctionReference

A reference to a Function resource.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="cdk-lambda-llrt.LlrtFunction.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this Lambda Function is running as.

---

##### `isBoundToVpc`<sup>Required</sup> <a name="isBoundToVpc" id="cdk-lambda-llrt.LlrtFunction.property.isBoundToVpc"></a>

```typescript
public readonly isBoundToVpc: boolean;
```

- *Type:* boolean

Whether or not this Lambda function was bound to a VPC.

If this is is `false`, trying to access the `connections` object will fail.

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="cdk-lambda-llrt.LlrtFunction.property.latestVersion"></a>

```typescript
public readonly latestVersion: IVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.IVersion

The `$LATEST` version of this function.

Note that this is reference to a non-specific AWS Lambda version, which
means the function this version refers to can return different results in
different invocations.

To obtain a reference to an explicit version which references the current
function configuration, use `lambdaFunction.currentVersion` instead.

---

##### `permissionsNode`<sup>Required</sup> <a name="permissionsNode" id="cdk-lambda-llrt.LlrtFunction.property.permissionsNode"></a>

```typescript
public readonly permissionsNode: Node;
```

- *Type:* constructs.Node

The construct node where permissions are attached.

---

##### `resourceArnsForGrantInvoke`<sup>Required</sup> <a name="resourceArnsForGrantInvoke" id="cdk-lambda-llrt.LlrtFunction.property.resourceArnsForGrantInvoke"></a>

```typescript
public readonly resourceArnsForGrantInvoke: string[];
```

- *Type:* string[]

The ARN(s) to put into the resource field of the generated IAM policy for grantInvoke().

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-lambda-llrt.LlrtFunction.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role associated with this function.

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="cdk-lambda-llrt.LlrtFunction.property.currentVersion"></a>

```typescript
public readonly currentVersion: Version;
```

- *Type:* aws-cdk-lib.aws_lambda.Version

Returns a `lambda.Version` which represents the current version of this Lambda function. A new version will be created every time the function's configuration changes.

You can specify options for this version using the `currentVersionOptions`
prop when initializing the `lambda.Function`.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="cdk-lambda-llrt.LlrtFunction.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The LogGroup where the Lambda function's logs are made available.

If either `logRetention` is set or this property is called, a CloudFormation custom resource is added to the stack that
pre-creates the log group as part of the stack deployment, if it already doesn't exist, and sets the correct log retention
period (never expire, by default).

Further, if the log group already exists and the `logRetention` is not set, the custom resource will reset the log retention
to never expire even if it was configured with a different value.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="cdk-lambda-llrt.LlrtFunction.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime

The runtime configured for this lambda.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="cdk-lambda-llrt.LlrtFunction.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The DLQ (as queue) associated with this Lambda Function (this is an optional attribute).

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="cdk-lambda-llrt.LlrtFunction.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic

The DLQ (as topic) associated with this Lambda Function (this is an optional attribute).

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-lambda-llrt.LlrtFunction.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration

The timeout configured for this lambda.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-lambda-llrt.LlrtFunction.property.PROPERTY_INJECTION_ID">PROPERTY_INJECTION_ID</a></code> | <code>string</code> | Uniquely identifies this class. |

---

##### `PROPERTY_INJECTION_ID`<sup>Required</sup> <a name="PROPERTY_INJECTION_ID" id="cdk-lambda-llrt.LlrtFunction.property.PROPERTY_INJECTION_ID"></a>

```typescript
public readonly PROPERTY_INJECTION_ID: string;
```

- *Type:* string

Uniquely identifies this class.

---

## Structs <a name="Structs" id="Structs"></a>

### LlrtFunctionProps <a name="LlrtFunctionProps" id="cdk-lambda-llrt.LlrtFunctionProps"></a>

#### Initializer <a name="Initializer" id="cdk-lambda-llrt.LlrtFunctionProps.Initializer"></a>

```typescript
import { LlrtFunctionProps } from 'cdk-lambda-llrt'

const llrtFunctionProps: LlrtFunctionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.maxEventAge">maxEventAge</a></code> | <code>aws-cdk-lib.Duration</code> | The maximum age of a request that Lambda sends to a function for processing. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.onFailure">onFailure</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for failed invocations. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.onSuccess">onSuccess</a></code> | <code>aws-cdk-lib.aws_lambda.IDestination</code> | The destination for successful invocations. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.retryAttempts">retryAttempts</a></code> | <code>number</code> | The maximum number of times to retry when the function returns an error. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.adotInstrumentation">adotInstrumentation</a></code> | <code>aws-cdk-lib.aws_lambda.AdotInstrumentationConfig</code> | Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.allowAllIpv6Outbound">allowAllIpv6Outbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all ipv6 network traffic. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.allowAllOutbound">allowAllOutbound</a></code> | <code>boolean</code> | Whether to allow the Lambda to send all network traffic (except ipv6). |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.allowPublicSubnet">allowPublicSubnet</a></code> | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.applicationLogLevel">applicationLogLevel</a></code> | <code>string</code> | Sets the application log level for the function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.applicationLogLevelV2">applicationLogLevelV2</a></code> | <code>aws-cdk-lib.aws_lambda.ApplicationLogLevel</code> | Sets the application log level for the function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.architecture">architecture</a></code> | <code>aws-cdk-lib.aws_lambda.Architecture</code> | The system architectures compatible with this lambda function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.codeSigningConfig">codeSigningConfig</a></code> | <code>aws-cdk-lib.aws_lambda.ICodeSigningConfigRef</code> | Code signing config associated with this function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.currentVersionOptions">currentVersionOptions</a></code> | <code>aws-cdk-lib.aws_lambda.VersionOptions</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue to use if DLQ is enabled. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.deadLetterQueueEnabled">deadLetterQueueEnabled</a></code> | <code>boolean</code> | Enabled DLQ. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.deadLetterTopic">deadLetterTopic</a></code> | <code>aws-cdk-lib.aws_sns.ITopic</code> | The SNS topic to use as a DLQ. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.description">description</a></code> | <code>string</code> | A description of the function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs that Lambda caches and makes available for your Lambda functions. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKeyRef</code> | The AWS KMS key that's used to encrypt your function's environment variables. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.ephemeralStorageSize">ephemeralStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The size of the function’s /tmp directory in MiB. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.events">events</a></code> | <code>aws-cdk-lib.aws_lambda.IEventSource[]</code> | Event sources for this function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.filesystem">filesystem</a></code> | <code>aws-cdk-lib.aws_lambda.FileSystem</code> | The filesystem configuration for the lambda function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.functionName">functionName</a></code> | <code>string</code> | A name for the function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.initialPolicy">initialPolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | Initial policy statements to add to the created Lambda Role. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.insightsVersion">insightsVersion</a></code> | <code>aws-cdk-lib.aws_lambda.LambdaInsightsVersion</code> | Specify the version of CloudWatch Lambda insights to use for monitoring. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.ipv6AllowedForDualStack">ipv6AllowedForDualStack</a></code> | <code>boolean</code> | Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion[]</code> | A list of layers to add to the function's execution environment. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.logFormat">logFormat</a></code> | <code>string</code> | Sets the logFormat for the function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.loggingFormat">loggingFormat</a></code> | <code>aws-cdk-lib.aws_lambda.LoggingFormat</code> | Sets the loggingFormat for the function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group the function sends logs to. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.logRemovalPolicy">logRemovalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Determine the removal policy of the log group that is auto-created by this construct. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days log events are kept in CloudWatch Logs. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.logRetentionRetryOptions">logRetentionRetryOptions</a></code> | <code>aws-cdk-lib.aws_lambda.LogRetentionRetryOptions</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.logRetentionRole">logRetentionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.memorySize">memorySize</a></code> | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.paramsAndSecrets">paramsAndSecrets</a></code> | <code>aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion</code> | Specify the configuration of Parameters and Secrets Extension. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.profiling">profiling</a></code> | <code>boolean</code> | Enable profiling. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.profilingGroup">profilingGroup</a></code> | <code>aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup</code> | Profiling Group. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.recursiveLoop">recursiveLoop</a></code> | <code>aws-cdk-lib.aws_lambda.RecursiveLoop</code> | Sets the Recursive Loop Protection for Lambda Function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.reservedConcurrentExecutions">reservedConcurrentExecutions</a></code> | <code>number</code> | The maximum of concurrent executions you want to reserve for the function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Lambda execution role. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.runtimeManagementMode">runtimeManagementMode</a></code> | <code>aws-cdk-lib.aws_lambda.RuntimeManagementMode</code> | Sets the runtime management configuration for a function's version. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to associate with the Lambda's network interfaces. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.snapStart">snapStart</a></code> | <code>aws-cdk-lib.aws_lambda.SnapStartConf</code> | Enable SnapStart for Lambda Function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.systemLogLevel">systemLogLevel</a></code> | <code>string</code> | Sets the system log level for the function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.systemLogLevelV2">systemLogLevelV2</a></code> | <code>aws-cdk-lib.aws_lambda.SystemLogLevel</code> | Sets the system log level for the function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | The function execution time (in seconds) after which Lambda terminates the function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.tracing">tracing</a></code> | <code>aws-cdk-lib.aws_lambda.Tracing</code> | Enable AWS X-Ray Tracing for Lambda Function. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC network to place Lambda network interfaces. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | Where to place the network interfaces within the VPC. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.awsSdkConnectionReuse">awsSdkConnectionReuse</a></code> | <code>boolean</code> | The `AWS_NODEJS_CONNECTION_REUSE_ENABLED` environment variable does not exist in the AWS SDK for JavaScript v3. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.bundling">bundling</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.BundlingOptions</code> | Bundling options. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.code">code</a></code> | <code>aws-cdk-lib.aws_lambda.Code</code> | The code that will be deployed to the Lambda Handler. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.depsLockFilePath">depsLockFilePath</a></code> | <code>string</code> | The path to the dependencies lock file (`yarn.lock`, `pnpm-lock.yaml`, `bun.lockb`, `bun.lock` or `package-lock.json`). |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.entry">entry</a></code> | <code>string</code> | Path to the entry file (JavaScript or TypeScript). |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.handler">handler</a></code> | <code>string</code> | The name of the exported handler in the entry file. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.projectRoot">projectRoot</a></code> | <code>string</code> | The path to the directory containing project config files (`package.json` or `tsconfig.json`). |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.runtime">runtime</a></code> | <code>aws-cdk-lib.aws_lambda.Runtime</code> | The runtime environment. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.llrtBinaryPath">llrtBinaryPath</a></code> | <code>string</code> | A custom relative path to use as a local LLRT bootstrap binary. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.llrtBinaryType">llrtBinaryType</a></code> | <code><a href="#cdk-lambda-llrt.LlrtBinaryType">LlrtBinaryType</a></code> | The type of LLRT bundle to use. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.llrtLayer">llrtLayer</a></code> | <code>boolean</code> | If `true` then the LLRT runtime will be built in a layer that can be shared amongst other `LLrtFunction`s that utilise the same `LlrtBinaryType`. |
| <code><a href="#cdk-lambda-llrt.LlrtFunctionProps.property.llrtVersion">llrtVersion</a></code> | <code>string</code> | The version of LLRT. |

---

##### `maxEventAge`<sup>Optional</sup> <a name="maxEventAge" id="cdk-lambda-llrt.LlrtFunctionProps.property.maxEventAge"></a>

```typescript
public readonly maxEventAge: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.hours(6)

The maximum age of a request that Lambda sends to a function for processing.

Minimum: 60 seconds
Maximum: 6 hours

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="cdk-lambda-llrt.LlrtFunctionProps.property.onFailure"></a>

```typescript
public readonly onFailure: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for failed invocations.

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="cdk-lambda-llrt.LlrtFunctionProps.property.onSuccess"></a>

```typescript
public readonly onSuccess: IDestination;
```

- *Type:* aws-cdk-lib.aws_lambda.IDestination
- *Default:* no destination

The destination for successful invocations.

---

##### `retryAttempts`<sup>Optional</sup> <a name="retryAttempts" id="cdk-lambda-llrt.LlrtFunctionProps.property.retryAttempts"></a>

```typescript
public readonly retryAttempts: number;
```

- *Type:* number
- *Default:* 2

The maximum number of times to retry when the function returns an error.

Minimum: 0
Maximum: 2

---

##### `adotInstrumentation`<sup>Optional</sup> <a name="adotInstrumentation" id="cdk-lambda-llrt.LlrtFunctionProps.property.adotInstrumentation"></a>

```typescript
public readonly adotInstrumentation: AdotInstrumentationConfig;
```

- *Type:* aws-cdk-lib.aws_lambda.AdotInstrumentationConfig
- *Default:* No ADOT instrumentation

Specify the configuration of AWS Distro for OpenTelemetry (ADOT) instrumentation.

> [https://aws-otel.github.io/docs/getting-started/lambda](https://aws-otel.github.io/docs/getting-started/lambda)

---

##### `allowAllIpv6Outbound`<sup>Optional</sup> <a name="allowAllIpv6Outbound" id="cdk-lambda-llrt.LlrtFunctionProps.property.allowAllIpv6Outbound"></a>

```typescript
public readonly allowAllIpv6Outbound: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to allow the Lambda to send all ipv6 network traffic.

If set to true, there will only be a single egress rule which allows all
outbound ipv6 traffic. If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets using ipv6.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllIpv6Outbound` directly on the security group.

---

##### `allowAllOutbound`<sup>Optional</sup> <a name="allowAllOutbound" id="cdk-lambda-llrt.LlrtFunctionProps.property.allowAllOutbound"></a>

```typescript
public readonly allowAllOutbound: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to allow the Lambda to send all network traffic (except ipv6).

If set to false, you must individually add traffic rules to allow the
Lambda to connect to network targets.

Do not specify this property if the `securityGroups` or `securityGroup` property is set.
Instead, configure `allowAllOutbound` directly on the security group.

---

##### `allowPublicSubnet`<sup>Optional</sup> <a name="allowPublicSubnet" id="cdk-lambda-llrt.LlrtFunctionProps.property.allowPublicSubnet"></a>

```typescript
public readonly allowPublicSubnet: boolean;
```

- *Type:* boolean
- *Default:* false

Lambda Functions in a public subnet can NOT access the internet.

Use this property to acknowledge this limitation and still place the function in a public subnet.

> [https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841](https://stackoverflow.com/questions/52992085/why-cant-an-aws-lambda-function-inside-a-public-subnet-in-a-vpc-connect-to-the/52994841#52994841)

---

##### ~~`applicationLogLevel`~~<sup>Optional</sup> <a name="applicationLogLevel" id="cdk-lambda-llrt.LlrtFunctionProps.property.applicationLogLevel"></a>

- *Deprecated:* Use `applicationLogLevelV2` as a property instead.

```typescript
public readonly applicationLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the application log level for the function.

---

##### `applicationLogLevelV2`<sup>Optional</sup> <a name="applicationLogLevelV2" id="cdk-lambda-llrt.LlrtFunctionProps.property.applicationLogLevelV2"></a>

```typescript
public readonly applicationLogLevelV2: ApplicationLogLevel;
```

- *Type:* aws-cdk-lib.aws_lambda.ApplicationLogLevel
- *Default:* ApplicationLogLevel.INFO

Sets the application log level for the function.

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="cdk-lambda-llrt.LlrtFunctionProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* aws-cdk-lib.aws_lambda.Architecture
- *Default:* Architecture.X86_64

The system architectures compatible with this lambda function.

---

##### `codeSigningConfig`<sup>Optional</sup> <a name="codeSigningConfig" id="cdk-lambda-llrt.LlrtFunctionProps.property.codeSigningConfig"></a>

```typescript
public readonly codeSigningConfig: ICodeSigningConfigRef;
```

- *Type:* aws-cdk-lib.aws_lambda.ICodeSigningConfigRef
- *Default:* Not Sign the Code

Code signing config associated with this function.

---

##### `currentVersionOptions`<sup>Optional</sup> <a name="currentVersionOptions" id="cdk-lambda-llrt.LlrtFunctionProps.property.currentVersionOptions"></a>

```typescript
public readonly currentVersionOptions: VersionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.VersionOptions
- *Default:* default options as described in `VersionOptions`

Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.

---

##### `deadLetterQueue`<sup>Optional</sup> <a name="deadLetterQueue" id="cdk-lambda-llrt.LlrtFunctionProps.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue
- *Default:* SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`

The SQS queue to use if DLQ is enabled.

If SNS topic is desired, specify `deadLetterTopic` property instead.

---

##### `deadLetterQueueEnabled`<sup>Optional</sup> <a name="deadLetterQueueEnabled" id="cdk-lambda-llrt.LlrtFunctionProps.property.deadLetterQueueEnabled"></a>

```typescript
public readonly deadLetterQueueEnabled: boolean;
```

- *Type:* boolean
- *Default:* false unless `deadLetterQueue` is set, which implies DLQ is enabled.

Enabled DLQ.

If `deadLetterQueue` is undefined,
an SQS queue with default options will be defined for your Function.

---

##### `deadLetterTopic`<sup>Optional</sup> <a name="deadLetterTopic" id="cdk-lambda-llrt.LlrtFunctionProps.property.deadLetterTopic"></a>

```typescript
public readonly deadLetterTopic: ITopic;
```

- *Type:* aws-cdk-lib.aws_sns.ITopic
- *Default:* no SNS topic

The SNS topic to use as a DLQ.

Note that if `deadLetterQueueEnabled` is set to `true`, an SQS queue will be created
rather than an SNS topic. Using an SNS topic as a DLQ requires this property to be set explicitly.

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-lambda-llrt.LlrtFunctionProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the function.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="cdk-lambda-llrt.LlrtFunctionProps.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables.

Key-value pairs that Lambda caches and makes available for your Lambda functions.

Use environment variables to apply configuration changes, such
as test and production environment configurations, without changing your
Lambda function source code.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="cdk-lambda-llrt.LlrtFunctionProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKeyRef;
```

- *Type:* aws-cdk-lib.aws_kms.IKeyRef
- *Default:* AWS Lambda creates and uses an AWS managed customer master key (CMK).

The AWS KMS key that's used to encrypt your function's environment variables.

---

##### `ephemeralStorageSize`<sup>Optional</sup> <a name="ephemeralStorageSize" id="cdk-lambda-llrt.LlrtFunctionProps.property.ephemeralStorageSize"></a>

```typescript
public readonly ephemeralStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 512 MiB

The size of the function’s /tmp directory in MiB.

---

##### `events`<sup>Optional</sup> <a name="events" id="cdk-lambda-llrt.LlrtFunctionProps.property.events"></a>

```typescript
public readonly events: IEventSource[];
```

- *Type:* aws-cdk-lib.aws_lambda.IEventSource[]
- *Default:* No event sources.

Event sources for this function.

You can also add event sources using `addEventSource`.

---

##### `filesystem`<sup>Optional</sup> <a name="filesystem" id="cdk-lambda-llrt.LlrtFunctionProps.property.filesystem"></a>

```typescript
public readonly filesystem: FileSystem;
```

- *Type:* aws-cdk-lib.aws_lambda.FileSystem
- *Default:* will not mount any filesystem

The filesystem configuration for the lambda function.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="cdk-lambda-llrt.LlrtFunctionProps.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.

A name for the function.

---

##### `initialPolicy`<sup>Optional</sup> <a name="initialPolicy" id="cdk-lambda-llrt.LlrtFunctionProps.property.initialPolicy"></a>

```typescript
public readonly initialPolicy: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No policy statements are added to the created Lambda role.

Initial policy statements to add to the created Lambda Role.

You can call `addToRolePolicy` to the created lambda to add statements post creation.

---

##### `insightsVersion`<sup>Optional</sup> <a name="insightsVersion" id="cdk-lambda-llrt.LlrtFunctionProps.property.insightsVersion"></a>

```typescript
public readonly insightsVersion: LambdaInsightsVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LambdaInsightsVersion
- *Default:* No Lambda Insights

Specify the version of CloudWatch Lambda insights to use for monitoring.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Lambda-Insights-Getting-Started-docker.html)

---

##### `ipv6AllowedForDualStack`<sup>Optional</sup> <a name="ipv6AllowedForDualStack" id="cdk-lambda-llrt.LlrtFunctionProps.property.ipv6AllowedForDualStack"></a>

```typescript
public readonly ipv6AllowedForDualStack: boolean;
```

- *Type:* boolean
- *Default:* false

Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.

Only used if 'vpc' is supplied.

---

##### `layers`<sup>Optional</sup> <a name="layers" id="cdk-lambda-llrt.LlrtFunctionProps.property.layers"></a>

```typescript
public readonly layers: ILayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion[]
- *Default:* No layers.

A list of layers to add to the function's execution environment.

You can configure your Lambda function to pull in
additional code during initialization in the form of layers. Layers are packages of libraries or other dependencies
that can be used by multiple functions.

---

##### ~~`logFormat`~~<sup>Optional</sup> <a name="logFormat" id="cdk-lambda-llrt.LlrtFunctionProps.property.logFormat"></a>

- *Deprecated:* Use `loggingFormat` as a property instead.

```typescript
public readonly logFormat: string;
```

- *Type:* string
- *Default:* "Text"

Sets the logFormat for the function.

---

##### `loggingFormat`<sup>Optional</sup> <a name="loggingFormat" id="cdk-lambda-llrt.LlrtFunctionProps.property.loggingFormat"></a>

```typescript
public readonly loggingFormat: LoggingFormat;
```

- *Type:* aws-cdk-lib.aws_lambda.LoggingFormat
- *Default:* LoggingFormat.TEXT

Sets the loggingFormat for the function.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="cdk-lambda-llrt.LlrtFunctionProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* `/aws/lambda/${this.functionName}` - default log group created by Lambda

The log group the function sends logs to.

By default, Lambda functions send logs to an automatically created default log group named /aws/lambda/\<function name\>.
However you cannot change the properties of this auto-created log group using the AWS CDK, e.g. you cannot set a different log retention.

Use the `logGroup` property to create a fully customizable LogGroup ahead of time, and instruct the Lambda function to send logs to it.

Providing a user-controlled log group was rolled out to commercial regions on 2023-11-16.
If you are deploying to another type of region, please check regional availability first.

---

##### ~~`logRemovalPolicy`~~<sup>Optional</sup> <a name="logRemovalPolicy" id="cdk-lambda-llrt.LlrtFunctionProps.property.logRemovalPolicy"></a>

- *Deprecated:* use `logGroup` instead

```typescript
public readonly logRemovalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.Retain

Determine the removal policy of the log group that is auto-created by this construct.

Normally you want to retain the log group so you can diagnose issues
from logs even after a deployment that no longer includes the log group.
In that case, use the normal date-based retention policy to age out your
logs.

---

##### ~~`logRetention`~~<sup>Optional</sup> <a name="logRetention" id="cdk-lambda-llrt.LlrtFunctionProps.property.logRetention"></a>

- *Deprecated:* use `logGroup` instead

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.INFINITE

The number of days log events are kept in CloudWatch Logs.

When updating
this property, unsetting it doesn't remove the log retention policy. To
remove the retention policy, set the value to `INFINITE`.

This is a legacy API and we strongly recommend you move away from it if you can.
Instead create a fully customizable log group with `logs.LogGroup` and use the `logGroup` property
to instruct the Lambda function to send logs to it.
Migrating from `logRetention` to `logGroup` will cause the name of the log group to change.
Users and code and referencing the name verbatim will have to adjust.

In AWS CDK code, you can access the log group name directly from the LogGroup construct:
```ts
import * as logs from 'aws-cdk-lib/aws-logs';

declare const myLogGroup: logs.LogGroup;
myLogGroup.logGroupName;
```

---

##### `logRetentionRetryOptions`<sup>Optional</sup> <a name="logRetentionRetryOptions" id="cdk-lambda-llrt.LlrtFunctionProps.property.logRetentionRetryOptions"></a>

```typescript
public readonly logRetentionRetryOptions: LogRetentionRetryOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.LogRetentionRetryOptions
- *Default:* Default AWS SDK retry options.

When log retention is specified, a custom resource attempts to create the CloudWatch log group.

These options control the retry policy when interacting with CloudWatch APIs.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `logRetentionRole`<sup>Optional</sup> <a name="logRetentionRole" id="cdk-lambda-llrt.LlrtFunctionProps.property.logRetentionRole"></a>

```typescript
public readonly logRetentionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created.

The IAM role for the Lambda function associated with the custom resource that sets the retention policy.

This is a legacy API and we strongly recommend you migrate to `logGroup` if you can.
`logGroup` allows you to create a fully customizable log group and instruct the Lambda function to send logs to it.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="cdk-lambda-llrt.LlrtFunctionProps.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

The amount of memory, in MB, that is allocated to your Lambda function.

Lambda uses this value to proportionally allocate the amount of CPU
power. For more information, see Resource Model in the AWS Lambda
Developer Guide.

---

##### `paramsAndSecrets`<sup>Optional</sup> <a name="paramsAndSecrets" id="cdk-lambda-llrt.LlrtFunctionProps.property.paramsAndSecrets"></a>

```typescript
public readonly paramsAndSecrets: ParamsAndSecretsLayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.ParamsAndSecretsLayerVersion
- *Default:* No Parameters and Secrets Extension

Specify the configuration of Parameters and Secrets Extension.

> [https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/ps-integration-lambda-extensions.html)

---

##### `profiling`<sup>Optional</sup> <a name="profiling" id="cdk-lambda-llrt.LlrtFunctionProps.property.profiling"></a>

```typescript
public readonly profiling: boolean;
```

- *Type:* boolean
- *Default:* No profiling.

Enable profiling.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `profilingGroup`<sup>Optional</sup> <a name="profilingGroup" id="cdk-lambda-llrt.LlrtFunctionProps.property.profilingGroup"></a>

```typescript
public readonly profilingGroup: IProfilingGroup;
```

- *Type:* aws-cdk-lib.aws_codeguruprofiler.IProfilingGroup
- *Default:* A new profiling group will be created if `profiling` is set.

Profiling Group.

> [https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/setting-up-lambda.html)

---

##### `recursiveLoop`<sup>Optional</sup> <a name="recursiveLoop" id="cdk-lambda-llrt.LlrtFunctionProps.property.recursiveLoop"></a>

```typescript
public readonly recursiveLoop: RecursiveLoop;
```

- *Type:* aws-cdk-lib.aws_lambda.RecursiveLoop
- *Default:* RecursiveLoop.Terminate

Sets the Recursive Loop Protection for Lambda Function.

It lets Lambda detect and terminate unintended recursive loops.

---

##### `reservedConcurrentExecutions`<sup>Optional</sup> <a name="reservedConcurrentExecutions" id="cdk-lambda-llrt.LlrtFunctionProps.property.reservedConcurrentExecutions"></a>

```typescript
public readonly reservedConcurrentExecutions: number;
```

- *Type:* number
- *Default:* No specific limit - account limit.

The maximum of concurrent executions you want to reserve for the function.

> [https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html](https://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html)

---

##### `role`<sup>Optional</sup> <a name="role" id="cdk-lambda-llrt.LlrtFunctionProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.

Lambda execution role.

This is the role that will be assumed by the function upon execution.
It controls the permissions that the function will have. The Role must
be assumable by the 'lambda.amazonaws.com' service principal.

The default Role automatically has permissions granted for Lambda execution. If you
provide a Role, you must add the relevant AWS managed policies yourself.

The relevant managed policies are "service-role/AWSLambdaBasicExecutionRole" and
"service-role/AWSLambdaVPCAccessExecutionRole".

---

##### `runtimeManagementMode`<sup>Optional</sup> <a name="runtimeManagementMode" id="cdk-lambda-llrt.LlrtFunctionProps.property.runtimeManagementMode"></a>

```typescript
public readonly runtimeManagementMode: RuntimeManagementMode;
```

- *Type:* aws-cdk-lib.aws_lambda.RuntimeManagementMode
- *Default:* Auto

Sets the runtime management configuration for a function's version.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="cdk-lambda-llrt.LlrtFunctionProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.

The list of security groups to associate with the Lambda's network interfaces.

Only used if 'vpc' is supplied.

---

##### `snapStart`<sup>Optional</sup> <a name="snapStart" id="cdk-lambda-llrt.LlrtFunctionProps.property.snapStart"></a>

```typescript
public readonly snapStart: SnapStartConf;
```

- *Type:* aws-cdk-lib.aws_lambda.SnapStartConf
- *Default:* No snapstart

Enable SnapStart for Lambda Function.

SnapStart is currently supported for Java 11, Java 17, Python 3.12, Python 3.13, and .NET 8 runtime

---

##### ~~`systemLogLevel`~~<sup>Optional</sup> <a name="systemLogLevel" id="cdk-lambda-llrt.LlrtFunctionProps.property.systemLogLevel"></a>

- *Deprecated:* Use `systemLogLevelV2` as a property instead.

```typescript
public readonly systemLogLevel: string;
```

- *Type:* string
- *Default:* "INFO"

Sets the system log level for the function.

---

##### `systemLogLevelV2`<sup>Optional</sup> <a name="systemLogLevelV2" id="cdk-lambda-llrt.LlrtFunctionProps.property.systemLogLevelV2"></a>

```typescript
public readonly systemLogLevelV2: SystemLogLevel;
```

- *Type:* aws-cdk-lib.aws_lambda.SystemLogLevel
- *Default:* SystemLogLevel.INFO

Sets the system log level for the function.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="cdk-lambda-llrt.LlrtFunctionProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(3)

The function execution time (in seconds) after which Lambda terminates the function.

Because the execution time affects cost, set this value
based on the function's expected execution time.

---

##### `tracing`<sup>Optional</sup> <a name="tracing" id="cdk-lambda-llrt.LlrtFunctionProps.property.tracing"></a>

```typescript
public readonly tracing: Tracing;
```

- *Type:* aws-cdk-lib.aws_lambda.Tracing
- *Default:* Tracing.Disabled

Enable AWS X-Ray Tracing for Lambda Function.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-lambda-llrt.LlrtFunctionProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Function is not placed within a VPC.

VPC network to place Lambda network interfaces.

Specify this if the Lambda function needs to access resources in a VPC.
This is required when `vpcSubnets` is specified.

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="cdk-lambda-llrt.LlrtFunctionProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified

Where to place the network interfaces within the VPC.

This requires `vpc` to be specified in order for interfaces to actually be
placed in the subnets. If `vpc` is not specify, this will raise an error.

Note: Internet access for Lambda Functions requires a NAT Gateway, so picking
public subnets is not allowed (unless `allowPublicSubnet` is set to `true`).

---

##### `awsSdkConnectionReuse`<sup>Optional</sup> <a name="awsSdkConnectionReuse" id="cdk-lambda-llrt.LlrtFunctionProps.property.awsSdkConnectionReuse"></a>

```typescript
public readonly awsSdkConnectionReuse: boolean;
```

- *Type:* boolean
- *Default:* false (obsolete) for runtimes >= Node 18, true for runtimes <= Node 16.

The `AWS_NODEJS_CONNECTION_REUSE_ENABLED` environment variable does not exist in the AWS SDK for JavaScript v3.

This prop will be deprecated when the Lambda Node16 runtime is deprecated on June 12, 2024.
See https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-support-policy

Info for Node 16 runtimes / SDK v2 users:

Whether to automatically reuse TCP connections when working with the AWS
SDK for JavaScript v2.

This sets the `AWS_NODEJS_CONNECTION_REUSE_ENABLED` environment variable
to `1`.

> [https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-reusing-connections.html](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-reusing-connections.html)

---

##### `bundling`<sup>Optional</sup> <a name="bundling" id="cdk-lambda-llrt.LlrtFunctionProps.property.bundling"></a>

```typescript
public readonly bundling: BundlingOptions;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.BundlingOptions
- *Default:* use default bundling options: no minify, no sourcemap, all modules are bundled.

Bundling options.

---

##### `code`<sup>Optional</sup> <a name="code" id="cdk-lambda-llrt.LlrtFunctionProps.property.code"></a>

```typescript
public readonly code: Code;
```

- *Type:* aws-cdk-lib.aws_lambda.Code
- *Default:* the code is bundled by esbuild

The code that will be deployed to the Lambda Handler.

If included, then properties related to
bundling of the code are ignored.

* If the `code` field is specified, then you must include the `handler` property.

---

##### `depsLockFilePath`<sup>Optional</sup> <a name="depsLockFilePath" id="cdk-lambda-llrt.LlrtFunctionProps.property.depsLockFilePath"></a>

```typescript
public readonly depsLockFilePath: string;
```

- *Type:* string
- *Default:* the path is found by walking up parent directories searching for a `yarn.lock`, `pnpm-lock.yaml`, `bun.lockb`, `bun.lock` or `package-lock.json` file

The path to the dependencies lock file (`yarn.lock`, `pnpm-lock.yaml`, `bun.lockb`, `bun.lock` or `package-lock.json`).

This will be used as the source for the volume mounted in the Docker
container.

Modules specified in `nodeModules` will be installed using the right
installer (`yarn`, `pnpm`, `bun` or `npm`) along with this lock file.

---

##### `entry`<sup>Optional</sup> <a name="entry" id="cdk-lambda-llrt.LlrtFunctionProps.property.entry"></a>

```typescript
public readonly entry: string;
```

- *Type:* string
- *Default:* Derived from the name of the defining file and the construct's id. If the `NodejsFunction` is defined in `stack.ts` with `my-handler` as id (`new NodejsFunction(this, 'my-handler')`), the construct will look at `stack.my-handler.ts` and `stack.my-handler.js`.

Path to the entry file (JavaScript or TypeScript).

---

##### `handler`<sup>Optional</sup> <a name="handler" id="cdk-lambda-llrt.LlrtFunctionProps.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string
- *Default:* handler

The name of the exported handler in the entry file.

* If the `code` property is supplied, then you must include the `handler` property. The handler should be the name of the file
that contains the exported handler and the function that should be called when the AWS Lambda is invoked. For example, if
you had a file called `myLambda.js` and the function to be invoked was `myHandler`, then you should input `handler` property as `myLambda.myHandler`.

* If the `code` property is not supplied and the handler input does not contain a `.`, then the handler is prefixed with `index.` (index period). Otherwise,
the handler property is not modified.

---

##### `projectRoot`<sup>Optional</sup> <a name="projectRoot" id="cdk-lambda-llrt.LlrtFunctionProps.property.projectRoot"></a>

```typescript
public readonly projectRoot: string;
```

- *Type:* string
- *Default:* the directory containing the `depsLockFilePath`

The path to the directory containing project config files (`package.json` or `tsconfig.json`).

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="cdk-lambda-llrt.LlrtFunctionProps.property.runtime"></a>

```typescript
public readonly runtime: Runtime;
```

- *Type:* aws-cdk-lib.aws_lambda.Runtime
- *Default:* `Runtime.NODEJS_LATEST` if the `@aws-cdk/aws-lambda-nodejs:useLatestRuntimeVersion` feature flag is enabled, otherwise `Runtime.NODEJS_16_X`

The runtime environment.

Only runtimes of the Node.js family are
supported.

---

##### `llrtBinaryPath`<sup>Optional</sup> <a name="llrtBinaryPath" id="cdk-lambda-llrt.LlrtFunctionProps.property.llrtBinaryPath"></a>

```typescript
public readonly llrtBinaryPath: string;
```

- *Type:* string
- *Default:* If this option is not provided, the LLRT binary is downloaded from GitHub and cached in the .tmp directory.

A custom relative path to use as a local LLRT bootstrap binary.

This path must be specified relative to the function's `projectRoot` directory.

---

##### `llrtBinaryType`<sup>Optional</sup> <a name="llrtBinaryType" id="cdk-lambda-llrt.LlrtFunctionProps.property.llrtBinaryType"></a>

```typescript
public readonly llrtBinaryType: LlrtBinaryType;
```

- *Type:* <a href="#cdk-lambda-llrt.LlrtBinaryType">LlrtBinaryType</a>
- *Default:* LlrtBinaryType.STANDARD

The type of LLRT bundle to use.

---

##### `llrtLayer`<sup>Optional</sup> <a name="llrtLayer" id="cdk-lambda-llrt.LlrtFunctionProps.property.llrtLayer"></a>

```typescript
public readonly llrtLayer: boolean;
```

- *Type:* boolean
- *Default:* false

If `true` then the LLRT runtime will be built in a layer that can be shared amongst other `LLrtFunction`s that utilise the same `LlrtBinaryType`.

---

##### `llrtVersion`<sup>Optional</sup> <a name="llrtVersion" id="cdk-lambda-llrt.LlrtFunctionProps.property.llrtVersion"></a>

```typescript
public readonly llrtVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of LLRT.

See https://github.com/awslabs/llrt/releases

---



## Enums <a name="Enums" id="Enums"></a>

### LlrtBinaryType <a name="LlrtBinaryType" id="cdk-lambda-llrt.LlrtBinaryType"></a>

The type of LLRT binary to use.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-lambda-llrt.LlrtBinaryType.FULL_SDK">FULL_SDK</a></code> | The LLRT bundle including full AWS SDK. |
| <code><a href="#cdk-lambda-llrt.LlrtBinaryType.NO_SDK">NO_SDK</a></code> | The LLRT bundle without AWS SDK. |
| <code><a href="#cdk-lambda-llrt.LlrtBinaryType.STANDARD">STANDARD</a></code> | The standard LLRT bundle, including only major services of AWS SDK. |

---

##### `FULL_SDK` <a name="FULL_SDK" id="cdk-lambda-llrt.LlrtBinaryType.FULL_SDK"></a>

The LLRT bundle including full AWS SDK.

---


##### `NO_SDK` <a name="NO_SDK" id="cdk-lambda-llrt.LlrtBinaryType.NO_SDK"></a>

The LLRT bundle without AWS SDK.

---


##### `STANDARD` <a name="STANDARD" id="cdk-lambda-llrt.LlrtBinaryType.STANDARD"></a>

The standard LLRT bundle, including only major services of AWS SDK.

---

