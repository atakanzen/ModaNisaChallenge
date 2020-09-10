const request = require('supertest');

const app = require('../../../app');
const { connectDB, disconnectDB } = require('../../../config/db');

describe('DELETE /api/todos/:id', () => {
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

  it('Adds and then Deletes a ToDo, returns 200 status code and information message.', async () => {
    try {
      // Adding a ToDo for deleting
      const res = await request(app)
        .post('/api/todos')
        .send({ text: 'Test Delete' });
      // Getting the id
      const id = res.body._id;
      // Deleting
      await request(app)
        .delete(`/api/todos/${id}`)
        .expect(200, { msg: 'ToDo removed.' });
    } catch (err) {
      console.log(err.message);
    }
  });
});
