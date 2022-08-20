exports.up = async function (knex) {
  await knex.schema
    .createTable('bosses', (table) => {
      table.increments('boss_id').primary();
      table.string('description').notNullable();
      table.string('title').notNullable();
      table.integer('health').notNullable().unsigned();
      table.string('location');
      table.string('requirements');
      table.string('status');
    })
    .createTable('activities', (table) => {
      table.increments('activity_id').primary();
      table.string('activity').notNullable();
      table.string('description').notNullable();
      table.integer('effectiveness').notNullable();
      table.string('requirements');
      table.string('link');
      table.bool('is_approved').defaultTo(false);
      table
        .integer('boss_id')
        .references('boss_id')
        .inTable('bosses')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
    })
    .createTable('users', (table) => {
      table.increments('user_id').primary();
      table.string('username').notNullable().unique();
      table.string('password').notNullable();
    })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('activities').dropTableIfExists('bosses').dropTableIfExists('users');
};
