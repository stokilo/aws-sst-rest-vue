import {S3Event, S3Handler} from "aws-lambda/trigger/s3";

export const handler: S3Handler = async (event: S3Event) => {
  console.info("S3 handler called.")
  console.dir(event)
};
