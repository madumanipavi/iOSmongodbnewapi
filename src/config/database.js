const mongoose = require('mongoose');
require("dotenv").config();

const mongoURI =process.env.DBURL;

const options = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useCreateIndex: true,
  //   useFindAndModify: false,
};

mongoose
  .connect(mongoURI, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose;
