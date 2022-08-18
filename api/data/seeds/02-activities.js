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
