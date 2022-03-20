const mongoose = require('mongoose');
 //   mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
const connectionString = 'mongodb://mongo:27017/cinema';
// kenet haka   mongodb://localhost:27017

mongoose.connect(connectionString, { useNewUrlParser: true }).catch((e) => {
  console.error('Connection error', e.message);
});

const db = mongoose.connection;

module.exports = db;
