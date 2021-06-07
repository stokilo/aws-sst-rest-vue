import { expect, haveResource } from "@aws-cdk/assert";
import * as sst from "@serverless-stack/resources";
import ApiAndAuthStack from "../lib/ApiAndAuthStack";

test("Test Stack", () => {
  const app = new sst.App();
  // WHEN
  const stack = new ApiAndAuthStack(app, "ApiAndAuthStack");
  // THEN
  expect(stack).to(haveResource("AWS::Lambda::Function"));
});
