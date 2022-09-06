const express = require('express');
const router = express.Router();
const Bosses = require('./model');

router.get('/', (req, res, next) => {
  Bosses.getBosses()
    .then((bosses) => {
      res.status(200).json(bosses);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
