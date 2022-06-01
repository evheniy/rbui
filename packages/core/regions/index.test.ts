import { US_EAST_1, getRegion } from '.';

describe('Test @rb/core/regions', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterAll(() => {
    process.env = OLD_ENV;
  });

  test('US_EAST_1', () => {
    expect(US_EAST_1).toEqual('us-east-1');
  });

  test('getRegion default value', () => {
    expect(getRegion()).toEqual(US_EAST_1);
  });

  test('getRegion getEnvRegion', () => {
    process.env.REGION = US_EAST_1;

    expect(getRegion()).toEqual(US_EAST_1);
  });

  test('getRegion getCdkRegion', () => {
    process.env.CDK_DEFAULT_REGION = US_EAST_1;

    expect(getRegion()).toEqual(US_EAST_1);
  });

  test('getRegion getEnvRegion error', () => {
    process.env.REGION = 'test';

    const run = () => getRegion();

    expect(run).toThrow(Error);
    expect(run).toThrow('Wrong region!');
  });

  test('getRegion getCdkRegion error', () => {
    process.env.CDK_DEFAULT_REGION = 'test';

    const run = () => getRegion();

    expect(run).toThrow(Error);
    expect(run).toThrow('Wrong region!');
  });
});
