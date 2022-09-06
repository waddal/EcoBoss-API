const db = require('../../data/db-config');

const getBosses = async () => {
  return await db('bosses');
};

module.exports = { getBosses };
