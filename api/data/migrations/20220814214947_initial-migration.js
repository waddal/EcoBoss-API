exports.up = async function (knex) {
  await knex.schema
    .createTable('bosses', (table) => {
      table.increments('boss_id').primary();
      table.string('description').notNullable();
      table.string('type').notNullable();
      table.integer('health').notNullable().unsigned();
      table.string('status');
    })
    .createTable('themes', (table) => {
      table.increments('theme_id').primary();
      table.string('title').unique().notNullable();
      table.string('description', 999).notNullable();
    })
    .createTable('activities', (table) => {
      table.increments('activity_id').primary();
      table.string('activity').notNullable();
      table.text('description').notNullable();
      table.float('effectiveness', 4, 1);
      table.string('requirements');
      table.string('link');
      table.bool('is_approved').defaultTo(false);
      table
        .integer('boss_id')
        .references('boss_id')
        .inTable('bosses')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
      table
        .integer('theme_id')
        .references('theme_id')
        .inTable('themes')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
    })
    .createTable('users', (table) => {
      table.increments('user_id').primary();
      table.string('username').notNullable().unique();
      table.string('password').notNullable();
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('activities')
    .dropTableIfExists('themes')
    .dropTableIfExists('bosses');
};
