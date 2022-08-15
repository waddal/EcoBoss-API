const bosses = [
  {
    title: 'Biodiversity',
    description: 'discription',
    status: 'Active',
    health: 999,
    location: 'Region_id',
    requirement:
      'min requirement to fight. required items/skillset for optimal effectiveness against this boss',
  },
  {
    title: 'Climate Change',
    description: 'discription',
    status: 'Active',
    health: 999,
    location: 'Region_id',
    requirement:
      'min requirement to fight. required items/skillset for optimal effectiveness against this boss',
  },
  {
    title: 'Business, finance and economics',
    description: 'discription',
    status: 'Active',
    health: 999,
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

// const boss = {
//   boss_id: uuid,
//   title: 'Climate Change',
//   status: 'Active',
//   health: 259 /* how do we find accurate health? */,
//   location: location_id,
//   type: [type_id],
//   requirement: 'level/occupation required to fight',
//   equipment: 'equipment needed to fight',
// };
// const themes = [
//   `Biodiversity`,
//   `Business, finance and economics`,
//   `Climate change`,
//   `Freshwater and water security`,
//   `Governance, law and rights`,
//   `Nature-based Solutions`,
//   `Ocean and coasts`,
//   `Protected areas and land use`,
//   `Fight the new drug`,
// ];
