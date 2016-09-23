import { AngularBelloPage } from './app.po';

describe('angular-bello App', function() {
  let page: AngularBelloPage;

  beforeEach(() => {
    page = new AngularBelloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
