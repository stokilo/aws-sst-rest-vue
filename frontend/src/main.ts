import {createApp} from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
import * as CdkOutput from "@/cdk-output.json";
const dev = CdkOutput['dev-sst-auth-ApiAndAuthStack']

import {
    applyPolyfills,
    defineCustomElements,
} from '@aws-amplify/ui-components/loader';


Amplify.configure({
    Auth: {
        region: dev.apiRegion,
        userPoolId: dev.userPoolId,
        userPoolWebClientId: dev.userPoolClientId,
        identityPoolId: dev.identityPoolId
    },

    API: {
        endpoints: [
            {
                name: dev.apiName,
                endpoint: dev.apiEndpoint,
                region: dev.apiRegion
            },
        ]
    }
});

createApp(App).mount('#app')

applyPolyfills().then(() => {
    defineCustomElements(window);
});