import { getEnv, getStage } from '.';

describe('Test @rb/core-env', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  test('getEnv', () => {
    expect(getEnv()).toBeDefined();
    expect(getEnv()).toEqual('test');

    process.env.NODE_ENV = 'dev';
    expect(getEnv()).toEqual('dev');
  });

  test('getStage', () => {
    expect(getStage()).toBeUndefined();

    process.env.STAGE = 'dev';
    expect(getStage()).toBeDefined();
    expect(getStage()).toEqual('dev');
  });
});
