const express = require('express');
const router = express.Router();
const Users = require('./model');

router.get('/', (req, res, next) => {
  Users.getAllUsers()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:username', (req, res, next) => {
  Users.getByUsername(req.params.username)
    .then((user) => {
      console.log('returned user: ', user);
      res.status(200).json(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  Users.create(req.body)
    .then(() => {
      res.status(201).json({ message: `Added user: '${req.body.username}'` });
    })
    .catch((err) => {
      res.status(404).json({ message: 'Woops', error: err });
      next(err);
    });
});

router.delete('/:user_id', (req, res, next) => {
  Users.remove(req.params.user_id)
    .then((user) => {
      res.status(204).json(user);
    })
    .catch((err) => {
      res.status(404).json({ message: 'Woops', error: err });
      next();
    });
});

module.exports = router;
