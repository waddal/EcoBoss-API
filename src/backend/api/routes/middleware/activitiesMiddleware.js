const { getById } = require('../activities/model');

const checkActivityExists = async (req, res, next) => {
  try {
    const activity = await getById(req.params.activity_id);
    if (!activity) {
      res.status(404).json({ message: 'Activity with requested id not found!' });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { checkActivityExists };
