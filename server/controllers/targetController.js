const asyncHandler = require('express-async-handler');
const Target = require('../models/Target');

exports.target_list = asyncHandler(async (_req, res) => {
  try {
    const targets = await Target.find({}, 'name').exec();
    res.json(targets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

exports.validate_target = [
  getTargetMap,
  async (req, res) => {
    try {
      if (req.targetMap.x_range[0] <= req.body.x && req.body.x <= req.targetMap.x_range[1] && req.targetMap.y_range[0] <= req.body.y && req.body.y <= req.targetMap.y_range[1]) {
        res.json({ message: 'Found target!' });
      } else {
        res.json({ message: 'Not a target.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  }
];

async function getTargetMap(req, res, next) {
  let targetMap;
  try {
    const target = await Target.findById(req.params.id).populate('maps').exec();
    if (!target) {
      return res.status(404).json({ message: 'Target not found' });
    }

    targetMap = target.maps.find((map) => map.name === req.body.map);
    if (!targetMap) {
      return res.status(404).json({ message: 'Target Map not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  req.targetMap = targetMap;
  next();
}
