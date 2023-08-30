const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const Target = require('../models/Target');

exports.target_list = asyncHandler(async (_req, res) => {
  try {
    const targets = await Target.find({}).populate('maps').exec();
    res.json({ targets });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
