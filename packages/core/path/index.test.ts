import path from '.';

describe('Test @rb/core-path', () => {
  test('test path', () => {
    expect(path()).toContain('rb');
  });
});
