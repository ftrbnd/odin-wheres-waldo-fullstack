const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MapSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);

module.exports = mongoose.model('Map', MapSchema);
