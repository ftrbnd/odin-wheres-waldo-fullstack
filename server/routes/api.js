const express = require('express');
const router = express.Router();
const targetController = require('../controllers/targetController');
const scoreController = require('../controllers/scoreController');
const mapController = require('../controllers/mapController');

router.get('/', (_req, res) => {
  res.json({ message: "Welcome to the Where's Waldo API" });
});

router.get('/targets', targetController.target_list);

router.post('/targets/:id', targetController.validate_target);

router.get('/scores', scoreController.score_list);

router.post('/scores/new', scoreController.new_score);

router.get('/maps', mapController.map_list);

module.exports = router;
