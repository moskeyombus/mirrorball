import { MirrorballPage } from './app.po';

describe('mirrorball App', function() {
  let page: MirrorballPage;

  beforeEach(() => {
    page = new MirrorballPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mirrorball works!');
  });
});
