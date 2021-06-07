import * as sst from "@serverless-stack/resources";
import {Auth} from "@serverless-stack/resources";
import {CorsHttpMethod} from "@aws-cdk/aws-apigatewayv2";
import {UserPool, UserPoolClient} from "@aws-cdk/aws-cognito"
import {RemovalPolicy} from "@aws-cdk/core";


export default class ApiAndAuthStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    const api = new sst.Api(this, "Api", {
      defaultAuthorizationType: sst.ApiAuthorizationType.AWS_IAM,
      routes: {
        "GET /private": "src/private.handler"
      },
      cors: {
        allowMethods: [CorsHttpMethod.GET],
        allowOrigins: ['http://localhost:8080'],
        allowHeaders: ['*']
      }
    })

    const userPool = new UserPool(this, "TestUserPool", {
      userPoolName: "TestUserPool",
      signInAliases: { email: true, phone: false, username: true},
      selfSignUpEnabled: true,
      removalPolicy: RemovalPolicy.DESTROY
    });

    const userPoolClient = new UserPoolClient(this, "TestUserPoolClient", {
      userPool,
      disableOAuth: true,
    });

    const auth = new Auth(this, "Auth", {
      cognito: {
        userPool,
        userPoolClient,
      },
    })

    auth.attachPermissionsForAuthUsers([api]);

    this.addOutputs({
      userPoolId: userPool.userPoolId,
      userPoolClientId: userPoolClient.userPoolClientId,
      identityPoolId: auth.cognitoCfnIdentityPool.ref,

      apiRegion: 'us-east-1',
      apiName: 'TestApi',
      apiEndpoint: api.url
    })

  }
}
