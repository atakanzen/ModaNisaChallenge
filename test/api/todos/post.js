const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app');
const { connectDB, disconnectDB } = require('../../../config/db');

describe('POST api/todos', () => {
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

  it('Adds new toDo', async () => {
    try {
      const res = await request(app)
        .post('/api/todos')
        .send({ text: 'Test ToDo API' });
      const body = res.body;

      expect(body).to.contain.property('_id');
      expect(body).to.contain.property('text');
      expect(body).to.contain.property('isDone');
    } catch (err) {
      console.log(err);
    }
  });

  it('Returns 400 status code if required field is null', async () => {
    try {
      const res = await request(app).post('/api/todos').send({});

      const body = res.body;

      expect(body).to.contain.property('errors');
    } catch (err) {
      console.log(err);
    }
  });
});
