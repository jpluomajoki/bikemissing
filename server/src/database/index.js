const mongoose = require('mongoose');
const config = require('../config').database;

const url = `mongodb://${config.host}:${config.port}/${config.dbname}`;
mongoose.connect(url, { useNewUrlParser: true });

const { connection } = mongoose;

connection.on('error', error => {
  console.error('Error while connecting to database', error);
});

connection.once('open', () => {
  console.log('Database connected');
});

module.exports = connection;
