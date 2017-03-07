import { EpamAfAngular2BootcampPage } from './app.po';

describe('epam-af-angular2-bootcamp App', function() {
  let page: EpamAfAngular2BootcampPage;

  beforeEach(() => {
    page = new EpamAfAngular2BootcampPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
