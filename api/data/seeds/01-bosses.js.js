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

// const boss = {
//   boss_id: uuid,
//   title: 'Climate Change',
//   status: 'Active',.
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
