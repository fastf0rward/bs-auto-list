import { TyAppPage } from './app.po';

describe('ty-app App', () => {
  let page: TyAppPage;

  beforeEach(() => {
    page = new TyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
