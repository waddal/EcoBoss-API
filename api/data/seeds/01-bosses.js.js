const bosses = [
  {
    title: 'Land',
    description: 'rocky',
    status: 'Active',
    health: 359,
    location: 'Region_id',
    requirement:
      'min requirement to fight. required items/skillset for optimal effectiveness against this boss',
  },
  {
    title: 'Water',
    description: 'wet',
    status: 'Active',
    health: 851,
    location: 'Region_id',
    requirement:
      'min requirement to fight. required items/skillset for optimal effectiveness against this boss',
  },
  {
    title: 'Ocean',
    description: 'salty',
    status: 'Active',
    health: 407,
    location: 'Region_id',
    requirement:
      'min requirement to fight. required items/skillset for optimal effectiveness against this boss',
  },
  {
    title: 'Climate',
    description: 'whoosh',
    status: 'Active',
    health: 843,
    location: 'Region_id',
    requirement:
      'min requirement to fight. required items/skillset for optimal effectiveness against this boss',
  },
];

exports.seed = function (knex) {
  return knex('bosses')
    .del()
    .then(function () {
      return knex('bosses').insert(bosses);
    });
};
