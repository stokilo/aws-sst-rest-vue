import { API } from 'aws-amplify';
import * as CdkOutput from "@/cdk-output.json";
const dev = CdkOutput['dev-sst-auth-ApiAndAuthStack']

class TestService {

  get(): Promise<any> {
    return API.get(dev.apiName, '/private', {})
  }
}

export default new TestService();
