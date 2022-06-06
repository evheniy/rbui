import * as domain from './domain';

describe('@rbui/services/route53/domain', () => {
  test('domain', () => {
    expect(domain.domain).toEqual('rbui.tools');
  });

  test('wwwDomain', () => {
    expect(domain.wwwDomain).toEqual('www.rbui.tools');
  });

  test('storybookDomain', () => {
    expect(domain.storybookDomain).toEqual('sb.rbui.tools');
  });

  test('stagingDomain', () => {
    expect(domain.stagingDomain).toEqual('staging.rbui.tools');
  });

  test('storybookStagingDomain', () => {
    expect(domain.storybookStagingDomain).toEqual('sb.staging.rbui.tools');
  });

  test('testDomain', () => {
    expect(domain.testDomain).toEqual('test.rbui.tools');
  });

  test('storybookTestDomain', () => {
    expect(domain.storybookTestDomain).toEqual('sb.test.rbui.tools');
  });
});
