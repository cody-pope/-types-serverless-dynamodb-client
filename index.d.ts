import * as AWS from "aws-sdk";

declare module "serverless-dynamodb-client" {
  export const doc: AWS.DynamoDB.DocumentClient;
  export const raw: AWS.DynamoDB;
}
