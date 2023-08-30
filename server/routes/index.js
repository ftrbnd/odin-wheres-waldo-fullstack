const express = require('express');
const router = express.Router();

router.get('/', function (_req, res) {
  res.send("Welcome to Where's Waldo! Access the API with the /api route.");
});

module.exports = router;
