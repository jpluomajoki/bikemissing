const dbConnection = require('../database');

const getHelloMessage = () => {
  const collection = dbConnection.collection('bikes');

  console.log(collection);
  return { text: 'Hello' };
};

module.exports = { getHelloMessage };
