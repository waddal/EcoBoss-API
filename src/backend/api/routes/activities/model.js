const db = require('../../data/db-config');

// const getActivity = async () => {
//   return await db
//     .select('a.activity', 'a.description', 'a.requirements', 'a.effectiveness', 'b.type', 't.title')
//     .from('activities as a')
//     .join('bosses as b', 'b.boss_id', '=', 'a.boss_id')
//     .join('themes as t', 't.theme_id', '=', 'a.theme_id')
//     .orderByRaw('RANDOM()').first();
// };

const getActivity = async () => {
  return await db('activities').orderByRaw('RANDOM()').first();;
};

const getActivities = async () => {
  return await db('activities');
};

const getById = async (activity_id) => {
  return await db('activities').where({ activity_id }).first();
};

const create = async (newActivity) => {
  const activity = await db('activities').insert(newActivity);
  return activity;
};

const deleteActivity = async (activity_id) => {
  return await db('activities').where({ activity_id }).del();
};

module.exports = { getActivity, getActivities, getById, create, deleteActivity };
