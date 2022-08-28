const express = require('express');
const router = express.Router();
const Users = require('./model');
const bcrypt = require('bcrypt');

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

router.post('/register', (req, res, next) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 12);

  user.password = hash;

  Users.create(user)
    .then(() => {
      res.status(201).json({ message: `Added user: '${user.username}'` });
    })
    .catch((err) => {
      res.status(404).json({ message: 'Woops', error: err });
      next(err);
    });
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  Users.findBy(username)
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'Incorrect details' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.delete('/:user_id', (req, res, next) => {
  Users.remove(req.params.user_id)
    .then((user) => {
      res.status(204).json(user);
    })
    .catch((err) => {
      res.status(404).json({ message: 'Woops', error: err });
    });
});

module.exports = router;
