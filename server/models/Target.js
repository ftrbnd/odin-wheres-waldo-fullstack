const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Map = new Schema({
  name: {
    type: String,
    required: true
  },
  x_range: {
    type: [Number],
    required: true
  },
  y_range: {
    type: [Number],
    required: true
  }
});

const TargetSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    maps: {
      type: [Map],
      required: true
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model('Target', TargetSchema);
