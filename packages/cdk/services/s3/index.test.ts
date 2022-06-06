/* eslint-disable max-classes-per-file */
import { Construct } from 'constructs';
import { Template } from 'aws-cdk-lib/assertions';

import * as cdk from 'aws-cdk-lib';

import * as s3 from '.';

describe('@rbui/services/s3/', () => {
  test('getBucket', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        s3.getBucket(this, 'TestS3Bucket', 'test-bucket-name');
      }
    }

    const testStack = new TestStack(app, 'TestStack');

    const template = Template.fromStack(testStack);

    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'test-bucket-name',
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });
  });

  test('getWwwDomainBucket', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        s3.getWwwDomainBucket(this);
      }
    }

    const testStack = new TestStack(app, 'TestStack');

    const template = Template.fromStack(testStack);

    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'www.rbui.tools',
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
      WebsiteConfiguration: {
        RedirectAllRequestsTo: {
          HostName: 'rbui.tools',
          Protocol: 'https',
        },
      },
    });
  });

  test('getDomainBucket', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        s3.getDomainBucket(this);
      }
    }

    const testStack = new TestStack(app, 'TestStack');

    const template = Template.fromStack(testStack);

    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'rbui.tools',
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });
  });

  test('getStorybookDomainBucket', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        s3.getStorybookDomainBucket(this);
      }
    }

    const testStack = new TestStack(app, 'TestStack');

    const template = Template.fromStack(testStack);

    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'sb.rbui.tools',
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });
  });

  test('getStagingDomainBucket', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        s3.getStagingDomainBucket(this);
      }
    }

    const testStack = new TestStack(app, 'TestStack');

    const template = Template.fromStack(testStack);

    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'staging.rbui.tools',
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });
  });

  test('getStorybookStagingDomainBucket', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        s3.getStorybookStagingDomainBucket(this);
      }
    }

    const testStack = new TestStack(app, 'TestStack');

    const template = Template.fromStack(testStack);

    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'sb.staging.rbui.tools',
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });
  });

  test('getTestDomainBucket', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        s3.getTestDomainBucket(this);
      }
    }

    const testStack = new TestStack(app, 'TestStack');

    const template = Template.fromStack(testStack);

    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'test.rbui.tools',
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });
  });

  test('getStorybookTestDomainBucket', () => {
    const app = new cdk.App();

    class TestStack extends cdk.Stack {
      constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        s3.getStorybookTestDomainBucket(this);
      }
    }

    const testStack = new TestStack(app, 'TestStack');

    const template = Template.fromStack(testStack);

    template.hasResourceProperties('AWS::S3::Bucket', {
      BucketName: 'sb.test.rbui.tools',
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: true,
        BlockPublicPolicy: true,
        IgnorePublicAcls: true,
        RestrictPublicBuckets: true,
      },
    });
  });
});
