import { Construct } from 'constructs';
import { Template } from 'aws-cdk-lib/assertions';

import * as cdk from 'aws-cdk-lib';

import { getHostedZone } from './hostedZone';

describe('@rbui/services/route53/hostedZone', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('getHostedZone', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        jest.spyOn(cdk.aws_route53.HostedZone, 'fromLookup').mockReturnValue(
          new cdk.aws_route53.HostedZone(this, 'HostedZone', { zoneName: 'ZoneName' }),
        );

        getHostedZone(this);
      }
    }

    const testStack = new TestStack(app, 'TestStack');

    const template = Template.fromStack(testStack);

    template.hasResourceProperties('AWS::Route53::HostedZone', {
      Name: 'ZoneName.',
    });
  });
});
