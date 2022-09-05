const express = require('express');
const router = express.Router();
const Activities = require('./model');
const { checkActivityExists } = require('../middleware/activitiesMiddleware');

router.get('/random', (req, res, next) => {
  Activities.getActivity()
    .then((activity) => {
      res.status(200).json(activity);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/', (req, res, next) => {
  // filter data by boss & theme id
  const { boss_id, theme_id, is_approved } = req.query;

  Activities.getActivities()
    .then((activity) => {
      let response = [...activity];
      // /activities?boss_id=[0-3]
      if (boss_id) {
        response = response.filter((item) => item.boss_id === parseInt(boss_id));
      }
      // /activities?theme_id=[0-7]
      if (theme_id) {
        response = response.filter((item) => item.theme_id === parseInt(theme_id));
      }
      // /activities?is_approved=true
      if (is_approved) {
        response = response.filter((item) => item.is_approved === (is_approved === 'true'));
      }
      res.status(200).json(response);
    })
    .catch((err) => {
      next(err);
    });
});

// router.get('/all', (req, res, next) => {
//   Activities.getActivities()
//     .then((activities) => {
//       res.status(200).json(activities);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

router.get('/:activity_id', (req, res, next) => {
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
