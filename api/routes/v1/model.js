const db = require("../../data/db-config");

const get = async () => {
  return await db("awesome");
};

module.exports = { get };
