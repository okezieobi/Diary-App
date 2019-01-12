import {
  chai,
  expect,
  chaiHttp,
  app,
} from './index';

chai.use(chaiHttp);

describe("Test diary endpoint at '/v1/entries' to get all entries with GET", () => {
  it("should get all diary entries at '/v1/entries' with GET", (done) => {
    chai.request(app)
      .get('/v1/entries/')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        done();
      });
  });
});
