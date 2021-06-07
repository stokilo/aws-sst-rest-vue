import * as sst from "@serverless-stack/resources";
import {Bucket} from "@serverless-stack/resources";
import {EventType} from "@aws-cdk/aws-s3";
import {RemovalPolicy} from "@aws-cdk/core";

export default class S3Stack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, "BucketNotificationTest", {
      s3Bucket: {
        removalPolicy: RemovalPolicy.DESTROY,
        autoDeleteObjects: true
      },
      notifications: [
        {
          function: "src/s3notification.handler",
          notificationProps: {
            events: [EventType.OBJECT_CREATED],
          },
        },
      ],
    });

    bucket.attachPermissions(["s3"]);
    this.addOutputs({S3Bucket: bucket.s3Bucket.bucketArn})
  }
}
