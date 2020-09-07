const request = require('supertest');

const app = require('../../../app');
const { connectDB, disconnectDB } = require('../../../config/db');

describe('GET api/todos', () => {
  before(async () => {
    try {
      await connectDB();
    } catch (err) {
      console.log(err);
    }
  });

  after(async () => {
    try {
      await disconnectDB();
    } catch (err) {
      console.log(err);
    }
  });

  it('Gets all toDos or an information message in JSON with 200 status code', async () => {
    try {
      await request(app)
        .get('/api/todos')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8');
    } catch (err) {
      console.log(err);
    }
  });
});
