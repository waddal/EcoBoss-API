const express = require('express');
const router = express.Router();
const Activities = require('./model');

router.get('/', (req, res, next) => {
  Activities.get()
    .then((res) => {
      res.status(200).json(res);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
