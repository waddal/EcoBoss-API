const activities = [
  {
    activity: 'activity',
    description: 'description',
    effectiveness: 0.0,
    link: 'link',
    requirements: 'requirements',
    boss_id: null,
    theme_id: null,
    is_approved: false,
  },
  // REDUCE GREENHOUSE GAS EMISSIONS
  // REDUCE GREENHOUSE GAS EMISSIONS
  {
    activity: 'Walk there',
    description:
      'Strap on your shoes for those short commutes! Reduce your carbon footprint ~ and add a few more steps to your counter. Ever heard of Nordic walking?',
    effectiveness: 1.2,
    requirements: 'Shoes, time, water',
    link: 'link',
    is_approved: true,
  },
  {
    activity: 'Take the bus',
    description: 'Reduce your greenhouse emissions by making use of public transportation!',
    effectiveness: 1.2,
    requirements: 'Money',
    link: '',
    is_approved: true,
  },
  {
    activity: 'Ride the train',
    description:
      'Save some green and reduce your greenhouse emissions taking this public mode of transport.',
    effectiveness: 1.5,
    requirements: 'Money',
    link: '',
    is_approved: true,
  },
  {
    activity: 'Carpool',
    description:
      'Sharing a ride with a comrade takes one car, and its carbon dioxide emissions, off the road.',
    effectiveness: 1.3,
    requirements: 'Money',
    link: 'https://www.c2es.org/content/reducing-your-transportation-footprint/',
    is_approved: true,
  },
  // REDUCE FOOD WASTE
  // REDUCE FOOD WASTE
  {
    activity: 'Plan your next grocery trip',
    description:
      'Reduce excess waste by buying only the items you need for the meals you have planned out for this week.',
    effectiveness: 1.3,
    requirements: 'A little time and foresight',
    link: 'https://www.epa.gov/recycle/preventing-wasted-food-home#planning',
    is_approved: true,
  },
  {
    activity: 'Keep track of your meals',
    description:
      'Keep a running list of meals and their ingredients that your household already enjoys - that way, you can easily choose, shop for, and prepare meals that you are likely to consume.',
    effectiveness: 1.8,
    requirements: 'Notepad, time, foresight',
    link: 'https://www.epa.gov/recycle/preventing-wasted-food-home#planning',
    is_approved: true,
  },
  {
    activity: 'Buy your produce in bulk',
    description:
      'Buying food from bulk bins can save you money and reduce food waste and packaging as you can purchase the amount of food you need as opposed to a pre-determined amount. When buying in bulk, remember to store food properly in airtight, labeled containers.',
    effectiveness: 1.9,
    requirements: 'Money, containers',
    link: 'https://www.epa.gov/recycle/preventing-wasted-food-home#planning',
    is_approved: true,
  },
  {
    activity: 'Purchase the imperfect',
    description:
      'Purchase imperfect produce or upcycled products. Imperfect produce may have physical imperfections but is just as safe and nutritious and can sometimes be found at discounted prices. Upcycled products are made from ingredients that might have otherwise gone to waste.',
    effectiveness: 1.3,
    requirements: 'Money',
    link: 'link',
    is_approved: true,
  },
  {
    activity: 'Store your fruits / veges the right way',
    description:
      'When produce is put away properly, they taste better and last longer, helping you to eat more of them before they go bad.',
    effectiveness: 1.3,
    requirements: 'Produce, a fridge',
    link: 'https://www.epa.gov/recycle/preventing-wasted-food-home#storage',
    is_approved: true,
  },
  {
    activity: 'Reorganize your refridgerator',
    description:
      'There are cooler/hotter spots in that box ~ make the most out of your storage space placing items where they fit best',
    effectiveness: 1.7,
    requirements: 'Produce, a fridge',
    link: 'https://www.epa.gov/recycle/preventing-wasted-food-home#storage',
    is_approved: true,
  },
  {
    activity: 'Donate to your local food bank, soup kitchens, shelters',
    description: `Find your local food bank and make a special delivery. Together, we can end hunger, but it’s going to require an active partnership between yourself and the vast network of charities, food banks, governments, and the private sector. We're grateful to have you on our side.`,
    effectiveness: 1.4,
    requirements: 'Produce that may go bad!',
    link: 'https://www.feedingamerica.org/find-your-local-foodbank',
    is_approved: true,
  },
  {
    activity: 'Educate yourself on expiration dates',
    description:
      'Drug expiration dates reflect the time period during which the product is known to remain stable, which means it retains its strength, quality, and purity when it is stored according to its labeled storage conditions.',
    effectiveness: 0.2,
    requirements: 'Curiosity',
    link: 'https://www.fda.gov/drugs/pharmaceutical-quality-resources/expiration-dates-questions-and-answers',
    is_approved: true,
  },
  {
    activity: 'Learn to love leftovers',
    description: 'Reduce food waste and get creative with your leftovers',
    effectiveness: 1.2,
    requirements: 'Hunger, creativity',
    link: 'https://ivaluefood.com/resources/cooking-eating/creative-ways-to-use-leftovers/',
    is_approved: false,
  },
  {
    activity: 'Take food home',
    description:
      'Does the restaurant use biodegradable packaging? If so, you can take those scraps home and repurpose them later! Reducing food waste can taste so good',
    effectiveness: 1.0,
    requirements: 'Container',
    link: 'link',
    is_approved: true,
  },
  {
    activity: 'Make animal food out of those unwanted eats',
    description:
      'Renderers make products containing valuable fats and proteins animals need to maintain their health and nutrition',
    effectiveness: 1.7,
    requirements: 'Containers',
    link: 'https://nara.org/about-us/facts/',
    is_approved: true,
  },
  {
    activity: 'Provide waste oils for rendering and fuel conversion',
    description: 'Waste oils can be transformed into useful products by a rendering facility. Water treatment plants benefit from the reduction as well.',
    effectiveness: 1.3,
    requirements: 'Containers',
    link: 'https://nara.org/about-us/facts/',
    is_approved: true,
  },
  {
    activity: 'Make a compost bin',
    description: 'Have a garden? Create a nutrient-rich soil amendment with the Bokashi composting method',
    effectiveness: 1.5,
    requirements: 'Food waste',
    link: 'https://www.epa.gov/sustainable-management-food/types-composting-and-understanding-process',
    is_approved: true,
  },
];

exports.seed = function (knex) {
  return knex('activities')
    .del()
    .then(function () {
      return knex('activities').insert(activities);
    });
};

// {
//   activity: 'activity',
//   description: 'description',
//   effectiveness: 0.0,
//   requirements: 'requirements',
//   link: 'link',
//   is_approved: false,
// },
