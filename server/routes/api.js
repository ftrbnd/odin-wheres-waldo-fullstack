const express = require('express');
const router = express.Router();
const targetController = require('../controllers/targetController');

router.get('/', (_req, res) => {
  res.json({ message: "Welcome to the Where's Waldo API" });
});

router.get('/targets', targetController.target_list);

module.exports = router;
