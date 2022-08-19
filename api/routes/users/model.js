const db = require('../../data/db-config');

const getAllUsers = async () => {
  return await db('users');
};

const getByUsername = async (username) => {
  return await db('users').where({ username }).first();
};

const create = async (credentials) => {
  const user = await db('users').insert(credentials);
  return user;
};

const remove = async (user_id) => {
  return await db('users').where({ user_id }).del();
};

module.exports = { getAllUsers, getByUsername, create, remove };
