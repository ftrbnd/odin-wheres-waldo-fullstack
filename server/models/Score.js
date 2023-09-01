const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema(
  {
    player: {
      type: String,
      required: true
    },
    time: {
      type: Number,
      required: true
    },
    map: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: false
    }
  },
  { versionKey: false }
);

ScoreSchema.virtual('formatted_time').get(function () {
  const minutes = Math.floor(this.time / 60);
  const seconds = this.time % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
});

module.exports = mongoose.model('Score', ScoreSchema);
