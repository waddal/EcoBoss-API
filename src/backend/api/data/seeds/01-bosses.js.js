const bosses = [
  {
    type: 'Land',
    description: 'rocky',
    status: 'Active',
    health: 2147483647,
  },
  {
    type: 'Water',
    description: 'wet',
    status: 'Active',
    health: 2147483647,
  },
  {
    type: 'Ocean',
    description: 'salty',
    status: 'Active',
    health: 2147483647,
  },
  {
    type: 'Air',
    description: 'whoosh',
    status: 'Active',
    health: 2147483647,
  },
];

exports.seed = function (knex) {
  return knex('bosses')
    .del()
    .then(function () {
      return knex('bosses').insert(bosses);
    });
};
