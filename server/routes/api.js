const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ message: "Welcome to the Where's Waldo API" });
});

module.exports = router;
