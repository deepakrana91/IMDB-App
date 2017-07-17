import { IMDBAppPage } from './app.po';

describe('imdb-app App', () => {
  let page: IMDBAppPage;

  beforeEach(() => {
    page = new IMDBAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
