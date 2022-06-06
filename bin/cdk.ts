import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { RBUICdkStack } from '@rbui/cdk/stacks/rbui';
import { RBUIProductionCdkStack } from '@rbui/cdk/stacks/rbuiProduction';
import { RBUIStagingCdkStack } from '@rbui/cdk/stacks/rbuiStaging';
import { RBUITestCdkStack } from '@rbui/cdk/stacks/rbuiTest';
import { getCdkAccount } from '@rbui/core/env';
import { getRegion } from '@rbui/core/regions';

const app = new cdk.App();

const rbui = new RBUICdkStack(app, 'RBUICdkStack', {
  env: {
    account: getCdkAccount(),
    region: getRegion(),
  },
});

new RBUIProductionCdkStack(app, 'RBUIProductionCdkStack', {
  env: {
    account: getCdkAccount(),
    region: getRegion(),
  },
  certificate: rbui.certificate,
});

new RBUIStagingCdkStack(app, 'RBUIStagingCdkStack', {
  env: {
    account: getCdkAccount(),
    region: getRegion(),
  },
  certificate: rbui.certificate,
});

new RBUITestCdkStack(app, 'RBUITestCdkStack', {
  env: {
    account: getCdkAccount(),
    region: getRegion(),
  },
  certificate: rbui.certificate,
});
