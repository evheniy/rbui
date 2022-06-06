import * as domains from '.';

describe('@rbui/core/domains', () => {
  test('DOMAIN', () => {
    expect(domains.DOMAIN).toEqual('rbui.tools');
  });

  test('WWW', () => {
    expect(domains.WWW).toEqual('www');
  });

  test('SB', () => {
    expect(domains.SB).toEqual('sb');
  });

  test('DEV', () => {
    expect(domains.DEV).toEqual('dev');
  });

  test('DEVELOP', () => {
    expect(domains.DEVELOP).toEqual('develop');
  });

  test('STAGING', () => {
    expect(domains.STAGING).toEqual('staging');
  });

  test('SB_STAGING', () => {
    expect(domains.SB_STAGING).toEqual('sb.staging');
  });

  test('TEST', () => {
    expect(domains.TEST).toEqual('test');
  });

  test('SB_TEST', () => {
    expect(domains.SB_TEST).toEqual('sb.test');
  });

  test('TESTING', () => {
    expect(domains.TESTING).toEqual('testing');
  });

  test('QA', () => {
    expect(domains.QA).toEqual('qa');
  });

  test('UAT', () => {
    expect(domains.UAT).toEqual('uat');
  });

  test('PREPROD', () => {
    expect(domains.PREPROD).toEqual('preprod');
  });

  test('getDomain', () => {
    expect(domains.getDomain()).toEqual('rbui.tools');
    expect(domains.getDomain(domains.WWW)).toEqual('www.rbui.tools');
    expect(domains.getDomain(domains.SB)).toEqual('sb.rbui.tools');
    expect(domains.getDomain(domains.DEV)).toEqual('dev.rbui.tools');
    expect(domains.getDomain(domains.DEVELOP)).toEqual('develop.rbui.tools');
    expect(domains.getDomain(domains.STAGING)).toEqual('staging.rbui.tools');
    expect(domains.getDomain(domains.SB_STAGING)).toEqual('sb.staging.rbui.tools');
    expect(domains.getDomain(domains.TEST)).toEqual('test.rbui.tools');
    expect(domains.getDomain(domains.SB_TEST)).toEqual('sb.test.rbui.tools');
    expect(domains.getDomain(domains.TESTING)).toEqual('testing.rbui.tools');
    expect(domains.getDomain(domains.QA)).toEqual('qa.rbui.tools');
    expect(domains.getDomain(domains.UAT)).toEqual('uat.rbui.tools');
    expect(domains.getDomain(domains.PREPROD)).toEqual('preprod.rbui.tools');
  });

  test('getDomain error', () => {
    const run = () => domains.getDomain('aaa');

    expect(run).toThrow(Error);
    expect(run).toThrow('Wrong sub domain!');
  });
});
