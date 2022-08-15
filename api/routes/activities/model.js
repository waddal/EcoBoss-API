const db = require("../../data/db-config");

const get = async () => {
  return await db("activities");
};

module.exports = { get };
