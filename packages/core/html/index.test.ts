import { html } from '.';

describe('@rbui/core-html', () => {
  test('test html', () => {
    expect(html()).toContain('<title>Loading...</title>');
  });
});
