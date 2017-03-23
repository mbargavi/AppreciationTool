import { RewardsDemoPage } from './app.po';

describe('rewards-demo App', function() {
  let page: RewardsDemoPage;

  beforeEach(() => {
    page = new RewardsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
