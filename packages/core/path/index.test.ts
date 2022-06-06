import { getFullPath } from '.';

describe('@rbui/core-path', () => {
  test('test path', () => {
    expect(getFullPath()).toContain('rbui');
  });
});
