import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import { RBUIProductionCdkStack } from '@rbui/cdk/stacks/rbuiProduction';
import { RBUIStagingCdkStack } from '@rbui/cdk/stacks/rbuiStaging';
import { RBUITestCdkStack } from '@rbui/cdk/stacks/rbuiTest';
import { getCdkAccount } from '@rbui/core/env';
import { getRegion } from '@rbui/core/regions';

const app = new cdk.App();

const rbuiProduction = new RBUIProductionCdkStack(app, 'RBUIProductionCdkStack', {
  env: {
    account: getCdkAccount(),
    region: getRegion(),
  },
});

new RBUIStagingCdkStack(app, 'RBUIStagingCdkStack', {
  env: {
    account: getCdkAccount(),
    region: getRegion(),
  },
  certificate: rbuiProduction.certificate,
});

new RBUITestCdkStack(app, 'RBUITestCdkStack', {
  env: {
    account: getCdkAccount(),
    region: getRegion(),
  },
  certificate: rbuiProduction.certificate,
});
