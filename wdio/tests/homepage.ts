import HomePage from '@rb/wdio/homepage';

describe('Homepage test', () => {
  it('should open homepage', async () => {
    await HomePage.open();
  });
});
