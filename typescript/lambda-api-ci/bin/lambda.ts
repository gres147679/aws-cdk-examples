#!/usr/bin/env node
import "source-map-support/register"
import cdk = require("@aws-cdk/core")
import { LambdaApiStack } from "../lib/lambda-api-stack"

export const lambdaApiStackName = "CDKExampleLambdaApiStack"
export const lambdaFunctionName = "CDKExampleWidgetStoreFunction"

const app = new cdk.App()
new LambdaApiStack(app, lambdaApiStackName, {
    functionName: lambdaFunctionName,
})
