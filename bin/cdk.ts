/* eslint-disable no-new */
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import RBUICdkStack from '@rbui/cdk/stacks/rbui';

const app = new cdk.App();

new RBUICdkStack(app, 'RBUICdkStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
