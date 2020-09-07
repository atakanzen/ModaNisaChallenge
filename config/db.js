const mongoose = require('mongoose');
const config = require('config');
const { MongoMemoryServer } = require('mongodb-memory-server');
var colors = require('colors');

const mongoURI = config.get('mongoURI');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

let mockDb = new MongoMemoryServer();

const connectDB = async () => {
  // Mocking Database if environment is 'test'
  if (process.env.NODE_ENV === 'test') {
    try {
      const mockURI = await mockDb.getUri();

      await mongoose.connect(mockURI, options);

      console.log('MockDb Connected.'.green.bold);
    } catch (err) {
      console.error(err.message);
    }
  } else {
    try {
      await mongoose.connect(mongoURI, options);

      console.log('MongoDb Connected.'.blue.bold);
    } catch (err) {
      console.error(err.message);

      process.exit(1);
    }
  }
};

const disconnectDB = async () => {
  // Mocking Database if environment is 'test'
  if (process.env.NODE_ENV === 'test') {
    mockDb.stop();
    console.log('MockDB Disconnected'.red.bold);
  } else {
    try {
      await mongoose.disconnect();
    } catch (err) {
      console.error(err.message);
    }
  }
};

module.exports = { connectDB, disconnectDB };
