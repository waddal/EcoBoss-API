const express = require('express');
const router = express.Router();
const Activities = require('./model');
const { checkActivityExists } = require('../middleware/activitiesMiddleware');

router.get('/', (req, res, next) => {
  Activities.getActivity()
    .then((activity) => {
      res.status(200).json(activity);
    })
    .catch((err) => {
      next(err);
    });
});

//http post :9090/activities activity="say yo" description="say it with your chest" effectiveness:=9 link="nothing.com" requirements="bravery"

router.post('/', (req, res, next) => {
  Activities.create(req.body)
    .then(() => {
      res.status(201).json({ message: `Added activity: '${req.body.activity}'` });
    })
    .catch((err) => {
      res.status(404).json({ message: 'Woops', error: err });
      next(err);
    });
});

router.put('/', (req, res, next) => {
  res.status(200).json({ message: '/PUT activities' });
});

router.delete('/:id', checkActivityExists, (req, res, next) => {
  // 202: (Accepted) action will likely succeed but has not yet been enacted
  // 204: (No Content) action has been enacted and no futher information is to be supplied
  Activities.deleteActivity(req.params.id)
    .then((activity) => {
      res.status(204).json(activity);
    })
    .catch((err) => {
      res.status(404).json({ message: 'Woops', error: err });
      next();
    });
});

module.exports = router;
