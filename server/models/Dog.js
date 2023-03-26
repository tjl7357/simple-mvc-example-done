// Requires
const mongoose = require('mongoose');

//  Declare Dog Model
let DogModel = {};

// Defining Dog Schema
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

// Connect the Schema to the Model
DogModel = mongoose.model('Dog', DogSchema);

// Export the model
module.exports = DogModel;
