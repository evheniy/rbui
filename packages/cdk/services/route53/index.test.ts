import * as domains from './domain';
import * as hostedZone from './hostedZone';
import * as record from './record';
import * as target from './target';

import * as index from '.';

describe('@rbui/services/route53/', () => {
  test('domains', () => {
    expect(index.domains).toEqual(domains);
  });

  test('hostedZone', () => {
    expect(index.hostedZone).toEqual(hostedZone);
  });

  test('record', () => {
    expect(index.record).toEqual(record);
  });

  test('target', () => {
    expect(index.target).toEqual(target);
  });
});
