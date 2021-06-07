import ApiAndAuthStack from "./ApiAndAuthStack";
import * as sst from "@serverless-stack/resources";
import S3Stack from "./S3Stack";

export default function main(app: sst.App): void {
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x"
  });

  new ApiAndAuthStack(app, "ApiAndAuthStack");
  new S3Stack(app, "S3Stack");
}
