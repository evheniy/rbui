/* eslint-disable no-new */
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import RBUICdkStack from '@rbui/cdk/stacks/rbui';
import { getCdkAccount } from '@rbui/core/env';
import { getRegion } from '@rbui/core/regions';

const app = new cdk.App();

new RBUICdkStack(app, 'RBUICdkStack', {
  env: {
    account: getCdkAccount(),
    region: getRegion(),
  },
});
