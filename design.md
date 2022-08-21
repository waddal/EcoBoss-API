const activity = {
  "activity_id": uuid,
  "activity": 'Walk to work',
  "description": 'commuting on foot increases health benefits and reduces your carbon footprint!',
  "theme": themes_id, /* foreign key for IUCN themes table */
  "goal": goals_id, /* foreign key connecting UN SDGs table */
  "effect": "describe the benefit of this act",
  "how": 'link to additional info for how to do this activity',
}

const boss = {
  "boss_id": uuid,
  "title": "Climate Change",
  "status": "Active",
  "health" : 259, /* how do we find accurate health? */
  "location": location_id,
  "type": [type_id],
  "requirement": "level/occupation required to fight",
  "equipment" : "equipment needed to fight",
}

const guild = {
  "guild_id": uuid,
  "guild_name": "Dreamers",
  "founders": [arrOfFounders],
  "members": [arrOfMems]
}

// example activity
export const activities = [
  {
    activity: "Compost your organic waste",
    theme: "Biodiversity",
    availability: 0.25,
    participants: 2,
    region: "Asia",
    accessability: "Few to no challenges",
    duration: "minutes",
    kidFriendly: true,
    link: "#",
  },
];

// IUCN Themes aka bosses
export const themes = [
  `Biodiversity`,
  `Business, finance and economics`,
  `Climate change`,
  `Freshwater and water security`,
  `Governance, law and rights`,
  `Nature-based Solutions`,
  `Ocean and coasts`,
  `Protected areas and land use`,
  `Fight the new drug`,
];

// UN Sustainable Development Goals
export const goals = [
  `No Poverty`,
  `Zero Hunger`,
  `Good Health and Well-being`,
  `Quality Education`,
  `Gender Equality`,
  `Clean Water and Sanitation`,
  `Affordable and Clean Energy`,
  `Decent Work and Economic Growth`,
  `Industry, Innovation and Infastructure`,
  `Reduce Inequalities`,
  `Sustainable Cities and Communities`,
  `Responsible Consumption and Production`,
  `Climate Action`,
  `Life Below Water`,
  `Life on Land`,
  `Peace, Justice and Strong Institutions`,
  `Partnerships`,
];


exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('bosses', function (table) {
      table.increments('boss_id').notNullable().unique().primary();
      table.string('description').notNullable();
      table.string('title').notNullable();
      table.string('status').notNullable();
      table.integer('health').notNullable().unsigned();
      table.string('location').notNullable();
      table.string('requirement').notNullable();
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('bosses');
};


exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('activities', function (table) {
      table.increments('activity_id').notNullable().unique().primary();
      table.string('activity').notNullable();
      table.string('description').notNullable();
      table.string('requirements').notNullable();
      table.integer('effectiveness').notNullable();
      table.string('link').notNullable();
      table
        .integer('boss_id')
        .notNullable()
        .references('boss_id')
        .inTable('bosses');
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('activities');
};


const activities = [
  {
    activity: 'Walk to work',
    description: 'commuting on foot increases health benefits and reduces your carbon footprint!',
    requirements: 'materials / experience needed to engage in this activity',
    // theme: themes_id /* foreign key for IUCN themes table */,
    // goal: goals_id /* foreign key connecting UN SDGs table */,
    boss_id: 0,
    effectiveness: 1,
    link: 'link to additional info for how to do this activity',
  },
  {
    activity: 'Use a personal water bottle',
    description: 'decrease the amount of plastic put in the landfill',
    requirements: 'less than 20 bucks',
    boss_id: 1,
    effectiveness: 2,
    link: 'link to additional info for how to do this activity',
  },
];

exports.seed = function (knex) {
  return knex('activities')
    .del()
    .then(function () {
      return knex('activities').insert(activities);
    });
};



// CHECKBOXES
<label htmlFor="Air">
    Air
    <input type="checkbox" name="Air" value={formValues.boss} onChange={handleChange} />
  </label>
  <label htmlFor="Land">
    Land
    <input
      type="checkbox"
      name="Land"
      value={formValues.boss}
      onChange={handleChange}
    />
  </label>
  <label htmlFor="Ocean">
    Ocean
    <input
      type="checkbox"
      name="Ocean"
      value={formValues.boss}
      onChange={handleChange}
    />
  </label>
  <label htmlFor="Water">
    Water
    <input
      type="checkbox"
      name="Water"
      value={formValues.boss}
      onChange={handleChange}
    />
  </label>
  <label htmlFor="Creature">
    Creature
    <input
      type="checkbox"
      name="Creature"
      value={formValues.boss}
      onChange={handleChange}
    />
</label>