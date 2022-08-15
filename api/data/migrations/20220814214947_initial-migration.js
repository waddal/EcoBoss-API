exports.up = async function (knex) {
  await knex.schema
    .createTable('bosses', (table) => {
      table.increments('boss_id').primary();
      table.string('description').notNullable();
      table.string('title').notNullable();
      table.integer('health').notNullable().unsigned();
      table.string('location').notNullable();
      table.string('requirement').notNullable();
      table.string('status').notNullable();
    })
    .createTable('activities', (table) => {
      table.increments('activity_id').primary();
      table.string('activity').notNullable();
      table.string('description').notNullable();
      table.integer('effectiveness').notNullable();
      table.string('requirements');
      table.string('link');
      // table.foreign('boss_id').references('boss_id').inTable('bosses');
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('activities').dropTableIfExists('bosses');
};
