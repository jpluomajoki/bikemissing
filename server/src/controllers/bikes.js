/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
const BikeModel = require('../models/bike');

const getAllBikes = async () => {
  let retVal = [];
  await BikeModel.find((error, bikes) => {
    if (error) console.error(error);

    console.log(bikes);
    retVal = bikes;
  });
  console.log(retVal);
  return retVal;
};

const insertBike = params => {
  const bike = new BikeModel(params);
  bike.submitted = new Date();
  console.debug(`Inserting bike with id ${bike._id} to database`);
  bike.save();
};

/*
const bikeSchema = new Schema({
  title: String,
  description: String,
  stolenFrom: {
    place: String,
    Location: {
      lat: Number,
      lon: Number
    }
  }
});
*/

module.exports = { getAllBikes, insertBike };
