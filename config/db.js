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

const connectDB = async () => {
  if (process.env.NODE_ENV === 'test') {
    let mongoServer = new MongoMemoryServer();
    const mockURI = await mongoServer.getUri();
    await mongoose.connect(mockURI, options);
    console.log('MockDb Connected.'.yellow.bold);
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
  await mongoose.disconnect();
};

module.exports = { connectDB, disconnectDB };
