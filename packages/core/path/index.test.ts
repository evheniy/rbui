import { getFullPath } from '.';

describe('Test @rb/core-path', () => {
  test('test path', () => {
    expect(getFullPath()).toContain('rbui');
  });
});
