import { TribesPage } from './app.po';

describe('tribes App', () => {
  let page: TribesPage;

  beforeEach(() => {
    page = new TribesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
