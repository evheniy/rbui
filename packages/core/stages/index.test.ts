import * as stages from '.';

describe('@rbui/core/stages', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  test('DEV', () => {
    expect(stages.DEV).toEqual('dev');
  });

  test('STAGING', () => {
    expect(stages.STAGING).toEqual('staging');
  });

  test('TEST', () => {
    expect(stages.TEST).toEqual('test');
  });

  test('PRODUCTION', () => {
    expect(stages.PRODUCTION).toEqual('production');
  });

  test('getStage', () => {
    process.env.STAGE = '';

    expect(stages.getStage()).toEqual(stages.DEV);
  });

  test('getStage DEV', () => {
    process.env.STAGE = stages.DEV;

    expect(stages.getStage()).toEqual(stages.DEV);
  });

  test('getStage STAGING', () => {
    process.env.STAGE = stages.STAGING;

    expect(stages.getStage()).toEqual(stages.STAGING);
  });

  test('getStage TEST', () => {
    process.env.STAGE = stages.TEST;

    expect(stages.getStage()).toEqual(stages.TEST);
  });

  test('getStage PRODUCTION', () => {
    process.env.STAGE = stages.PRODUCTION;

    expect(stages.getStage()).toEqual(stages.PRODUCTION);
  });

  test('getStage error', () => {
    process.env.STAGE = 'aaa';

    const run = () => stages.getStage();

    expect(run).toThrow(Error);
    expect(run).toThrow('Wrong stage!');
  });

  test('isDev true', () => {
    process.env.STAGE = stages.DEV;

    expect(stages.isDev()).toBeTruthy();
  });

  test('isDev true default', () => {
    process.env.STAGE = '';

    expect(stages.isDev()).toBeTruthy();
  });

  test('isDev false', () => {
    process.env.STAGE = stages.STAGING;

    expect(stages.isDev()).toBeFalsy();
  });

  test('isStaging true', () => {
    process.env.STAGE = stages.STAGING;

    expect(stages.isStaging()).toBeTruthy();
  });

  test('isStaging false', () => {
    process.env.STAGE = stages.DEV;

    expect(stages.isStaging()).toBeFalsy();
  });

  test('isTest true', () => {
    process.env.STAGE = stages.TEST;

    expect(stages.isTest()).toBeTruthy();
  });

  test('isTest false', () => {
    process.env.STAGE = stages.DEV;

    expect(stages.isTest()).toBeFalsy();
  });

  test('isProduction true', () => {
    process.env.STAGE = stages.PRODUCTION;

    expect(stages.isProduction()).toBeTruthy();
  });

  test('isProduction false', () => {
    process.env.STAGE = stages.DEV;

    expect(stages.isProduction()).toBeFalsy();
  });
});
