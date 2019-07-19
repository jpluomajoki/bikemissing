const dbConnection = require('../database');

const getAllBikes = () => {
  console.log(dbConnection);
  const collection = dbConnection.collection('bikes');

  console.log(collection);
};

module.exports = { getAllBikes };
