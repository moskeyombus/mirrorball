export class MirrorballPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mirrorball-app h1')).getText();
  }
}
