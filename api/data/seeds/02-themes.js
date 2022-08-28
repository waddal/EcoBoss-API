const themes = [
  {
    title: 'Biodiversity',
    description: `Biodiversity is crucial to human well-being, and is increasingly threatened.  Habitat destruction, invasive species, overexploitation, illegal wildlife trade, pollution and climate change put the survival of species worldwide at risk. IUCN is at the forefront of global efforts to halt the extinction crisis and to sustainably manage, conserve and restore ecosystems. We provide the methodologies, data and expertise to guide decision makers and conservation action, using approaches that benefit nature and people’s lives and livelihoods.`,
  },
  {
    title: 'Business, finance and economics',
    description: `Over half of global GDP is at risk from nature loss. Many businesses, from micro-enterprises in developing countries to large multinationals, rely on natural resources for their production as well as healthy ecosystems for clean air, water, productive soils and many other benefits. At the same time, our economies continue to inflict harm on the natural world due to the lack of financial incentives to restore, protect and conserve nature at scale.

    While the private sector, including the financial community, is part of the problem, it is also increasingly becoming part of the solution. By addressing their environmental footprint and investing in nature, businesses of all sizes can identify new opportunities, respond to consumer demand for responsible behaviour, pre-empt regulation, and save costs and natural resources. Changing the economic and financial system to redirect financial flows towards nature-positive activities is imperative.`,
  },
  {
    title: 'Climate change',
    description: `Climate change threatens people’s lives and livelihoods, the survival of species, and the integrity of ecosystems all over the world. But Nature-based Solutions that protect and restore ecosystems absorb carbon dioxide and help shield communities from the effects of climate change. Investing in the conservation, restoration and sustainable management of nature can provide around a third  of climate mitigation needed by 2030.`,
  },
  {
    title: 'Freshwater and water security',
    description: `People’s lives and livelihoods depend on access to water. We have long overstretched this precious resource, with freshwater ecosystems disappearing three times faster than forests, and many countries now facing water shortages. The world must equitably and sustainably manage water to provide for a growing human population, to protect life on land and in freshwater ecosystems, and to mitigate the impacts of climate change.`,
  },
  {
    title: 'Governance - law and rights',
    description: `Environmental law, social justice, equity, Human Rights, transparency and inclusion are fundamental to our vision of a just world that values and conserves nature. Rights-based and inclusive approaches to conservation and its legal frameworks support the good governance of natural resources and guarantee conservation’s contribution to human wellbeing. International agreements can similarly advance equality by empowering those who are marginalised and valuing the unique knowledge, roles and capacities of all people.`,
  },
  {
    title: 'Nature-based Solutions',
    description: `People’s lives and livelihoods depend on access to water. We have long overstretched this precious resource, with freshwater ecosystems disappearing three times faster than forests, and many countries now facing water shortages. The world must equitably and sustainably manage water to provide for a growing human population, to protect life on land and in freshwater ecosystems, and to mitigate the impacts of climate change.`,
  },
  {
    title: 'Ocean and coasts',
    description: `Unsustainable exploitation, pollution and the climate crisis threaten marine species and ecosystems around the world. Less than 3% of the global ocean has escaped human pressure. Unless things change, there will be profound impacts to life in the oceans, to global weather systems, and for the more than three billion people whose livelihoods depend on marine and coastal biodiversity. `,
  },
  {
    title: 'Protected areas and land use',
    description: `Human activity, mostly for food production and forestry, is transforming landscapes. Today, one third of all land is degraded or degrading, which harms biodiversity and jeopardises essential ecosystem services such as carbon storage. Protected areas offer a solution. If effectively managed and fairly governed, such areas can safeguard nature and cultural resources, protect human health and well-being, provide sustainable livelihoods and so support sustainable development.`,
  },
];

exports.seed = function (knex) {
  return knex('themes')
    .del()
    .then(function () {
      return knex('themes').insert(themes);
    });
};
