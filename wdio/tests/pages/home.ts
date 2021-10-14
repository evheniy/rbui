import HomePage from '@rb/wdio/pages/home';

describe('Home page test', () => {
  it('should open home page', async () => {
    await HomePage.open();
  });
});
