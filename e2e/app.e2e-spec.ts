import { Angular4Project2Page } from './app.po';

describe('angular4-project2 App', () => {
  let page: Angular4Project2Page;

  beforeEach(() => {
    page = new Angular4Project2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
