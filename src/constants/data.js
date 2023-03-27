import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: "Welcome to our world where we offer services equally, no discrimination whether of Nationality, color or background",
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'The top expensive award our chef won. He is very competitive and supreme in providing services to our clients. Welcome and enjoy some of his cooking practices.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'We have our best co-workers who are highly qualified in performing daily task, Kevin is the best chef of the year. He just received a star award. Join us if you know how to cook especially top class foods like pizza, momo, burger etc.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Nickson Okwemba is the best  chef of the year . Nickson knows how to fry chicken and his performance in chicken roasting is of great practice. He knows how to advitise them, by welcoming clients in highly and respectable order.',
  },
];

export default { wines, cocktails, awards } ;

