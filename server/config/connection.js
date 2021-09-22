const mongoose = require('mongoose');

mongoose.connect(
  
  process.env.MONGODB_URI || 'mongodb://localhost/googlebooks',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  }
);

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!')
})

module.exports = mongoose.connection;
