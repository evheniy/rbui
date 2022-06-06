import * as env from '.';

describe('@rbui/core/env', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  test('getEnv', () => {
    expect(env.getEnv()).toBeDefined();
    expect(env.getEnv()).toEqual('test');

    process.env.NODE_ENV = 'dev';
    expect(env.getEnv()).toEqual('dev');
  });

  test('getStage', () => {
    expect(env.getStage()).toBeUndefined();

    process.env.STAGE = 'dev';
    expect(env.getStage()).toBeDefined();
    expect(env.getStage()).toEqual('dev');
  });

  test('getRegion', () => {
    expect(env.getRegion()).toBeUndefined();

    process.env.REGION = 'test';
    expect(env.getRegion()).toBeDefined();
    expect(env.getRegion()).toEqual('test');
  });

  test('getCdkAccount', () => {
    expect(env.getCdkAccount()).toBeUndefined();

    process.env.CDK_DEFAULT_ACCOUNT = 'test';
    expect(env.getCdkAccount()).toBeDefined();
    expect(env.getCdkAccount()).toEqual('test');
  });

  test('getCdkRegion', () => {
    expect(env.getCdkRegion()).toBeUndefined();

    process.env.CDK_DEFAULT_REGION = 'test';
    expect(env.getCdkRegion()).toBeDefined();
    expect(env.getCdkRegion()).toEqual('test');
  });
});
