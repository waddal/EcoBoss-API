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

router.get('/:activity_id', (req, res, next) => {
  console.log('get by id');
  Activities.getById(req.params.activity_id)
    .then((activity) => {
      res.status(200).json(activity);
    })
    .catch((err) => {
      next(err);
    });
});

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

router.put('/:activity_id', checkActivityExists, (req, res, next) => {
  Activities.update(req.params.activity_id, req.body)
    .then(() => {
      res.status(200).json({ message: `Activity with id ${req.params.activity_id} updated` });
    })
    .catch((err) => {
      res.status(404).json({ message: 'Error updating activity' });
      next(err);
    });
});

router.delete('/:activity_id', checkActivityExists, (req, res, next) => {
  Activities.deleteActivity(req.params.activity_id)
    .then((activity) => {
      res.status(204).json(activity);
    })
    .catch((err) => {
      res.status(404).json({ message: 'Woops', error: err });
      next();
    });
});

module.exports = router;
