import { FirecrudPage } from './app.po';

describe('firecrud App', () => {
  let page: FirecrudPage;

  beforeEach(() => {
    page = new FirecrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
