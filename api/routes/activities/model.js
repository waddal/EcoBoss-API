const db = require('../../data/db-config');

const getActivity = async () => {
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

module.exports = { getActivity, getById, create, deleteActivity };
