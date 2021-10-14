import html from '.';

describe('Test @rb/core-html', () => {
  test('test html', () => {
    expect(html()).toContain('<title>Loading...</title>');
  });
});
