const asyncHandler = require('express-async-handler');
const Score = require('../models/Score');

exports.score_list = asyncHandler(async (_req, res) => {
  try {
    const scores = await Score.find({}).exec();
    const formatted_scores = [];

    for (const score of scores) {
      formatted_scores.push({
        player: score.player,
        time: score.formatted_time,
        map: score.map,
        date: score.date
      });
    }

    res.json(formatted_scores);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

exports.new_score = asyncHandler(async (req, res) => {
  try {
    const score = new Score({
      player: req.body.name,
      time: req.body.time,
      map: req.body.map,
      date: new Date()
    });

    await score.save();

    res.json({ message: 'Successfully saved score!' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});
