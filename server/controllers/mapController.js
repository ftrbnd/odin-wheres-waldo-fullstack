const asyncHandler = require('express-async-handler');
const Map = require('../models/Map');

exports.map_list = asyncHandler(async (_req, res) => {
  try {
    const maps = await Map.find({}).exec();

    res.json(maps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
