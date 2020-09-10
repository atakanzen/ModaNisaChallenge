const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app');
const { connectDB, disconnectDB } = require('../../../config/db');

describe('PUT /api/todos/:id', () => {
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

  it('Marks ToDo as done or undone.', async () => {
    try {
      // Marking
      const testToDo = await request(app)
        .post('/api/todos')
        .send({ text: 'Test Mark ToDo' });

      const id = testToDo.body._id;
    } catch (err) {
      console.log(err.message);
    }
  });
});
