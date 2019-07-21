const mongoose = require('mongoose');

const { Schema } = mongoose;

const bikeSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Bikes must have a short and descriptive title']
  },
  description: String,
  stolenFrom: {
    place: {
      type: String,
      required: [true, 'Bikes must have a description of the place it was stolen from']
    },
    location: {
      lat: {
        type: Number,
        required: [true, 'Bikes must have the location in coordinates']
      },
      lon: {
        type: Number,
        required: [true, 'Bikes must have the location in coordinates']
      }
    }
  },
  submitted: {
    type: Date,
    required: [true, 'Bike must have a timestamp']
  }
});

module.exports = mongoose.model('bike', bikeSchema);
