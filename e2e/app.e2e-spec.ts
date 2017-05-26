import { HuntingLogPage } from './app.po';

describe('hunting-log App', () => {
  let page: HuntingLogPage;

  beforeEach(() => {
    page = new HuntingLogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
