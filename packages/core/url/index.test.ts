import { WWW } from '@rbui/core/domains';

import { HTTP, HTTPS, getUrl } from '.';

describe('@rbui/core/url', () => {
  test('HTTP', () => {
    expect(HTTP).toEqual('http');
  });

  test('HTTPS', () => {
    expect(HTTPS).toEqual('https');
  });

  test('getUrl', () => {
    expect(getUrl()).toEqual('https://rbui.tools/');
  });

  test('getUrl error', () => {
    const run = () => getUrl('/', 'aaa');

    expect(run).toThrow(Error);
    expect(run).toThrow('Wrong protocol!');
  });

  test('getUrl path', () => {
    expect(getUrl('/test/')).toEqual('https://rbui.tools/test/');
  });

  test('getUrl HTTPS', () => {
    expect(getUrl('/test/', HTTPS)).toEqual('https://rbui.tools/test/');
  });

  test('getUrl HTTP', () => {
    expect(getUrl('/test/', HTTP)).toEqual('http://rbui.tools/test/');
  });

  test('getUrl subDomain', () => {
    expect(getUrl('/test/', HTTPS, WWW)).toEqual('https://www.rbui.tools/test/');
  });
});
