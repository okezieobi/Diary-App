import {
  chai,
  expect,
  chaiHttp,
  app,
} from './index';

chai.use(chaiHttp);

describe("Test diary endpoint at '/v1/entries/:id' to get one entry with GET", () => {
  it("should get a diary entry at '/v1/entries/:id' with GET if id exists", (done) => {
    const id = 0;
    chai.request(app)
      .get(`/v1/entries/${id}`)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).be.an('object');
        expect(res.body.diaryEntry).to.have.property('id').equal(0);
        expect(res.body.diaryEntry).to.have.property('title').equal('Title');
        expect(res.body.diaryEntry).to.have.property('description').equal('Description');
        done();
      });
  });

  it("should NOT get a diary entry at '/v1/entries/:id' with GET if id does not exist", (done) => {
    const id = 10;
    chai.request(app)
      .get(`/v1/entries/${id}`)
      .then((res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.have.property('message').equal('Diary entry does not exist');
        done();
      });
  });
});
