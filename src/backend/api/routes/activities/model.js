const db = require('../../data/db-config');

const getActivity = async () => {
  return await db
    .select('a.activity', 'a.description', 'a.requirements', 'a.effectiveness', 'b.type', 't.title')
    .from('activities as a')
    .join('bosses as b', 'b.boss_id', '=', 'a.boss_id')
    .join('themes as t', 't.theme_id', '=', 'a.theme_id')
    .orderByRaw('RANDOM()')
    .first();
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

const update = async (activity_id, changes) => {
  const { activity, description, requirements, effectiveness, is_approved, boss_id, theme_id } =
    changes;
  const updateForm = {
    activity: activity,
    description: description,
    requirements: requirements,
    effectiveness: effectiveness,
    is_approved: is_approved,
  };
  try {
    await db.schema.raw(
      `UPDATE activities SET boss_id = ${boss_id}, theme_id = ${theme_id} WHERE activity_id = ${activity_id}`
    );
    await db('activities as a').where({ activity_id }).update(updateForm);
  } catch (err) {
    console.log(err);
  }

  const updatedActivity = db('activities').where({ activity_id }).first();
  return updatedActivity;
};

const deleteActivity = async (activity_id) => {
  return await db('activities').where({ activity_id }).del();
};

module.exports = { getActivity, getActivities, getById, create, update, deleteActivity };
