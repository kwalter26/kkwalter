import { KkwalterPage } from './app.po';

describe('kkwalter App', () => {
  let page: KkwalterPage;

  beforeEach(() => {
    page = new KkwalterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
