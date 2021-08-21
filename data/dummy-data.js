const DUMMY_ITEMS = [
  {
    id: 'e1',
    title: 'Hand Made Patchwork Quilt',
    description:
      'This is a handmade patchwork quilt',
    categories: ['Art', 'Folk Art'],
    dimensions: '78 x 74 in',
    measurements: '78“W x 74“H',
    inStock: true,
    date: '2021-05-12',
    minBid: 50,
    highestBid: 0,
    highestBidUser: null,
    image: 'images/quilt.jpeg',
    isFeatured: true,
  },
  {
    id: 'e2',
    title: 'Pair Of Metal Garden Cherubs',
    description:
      'This is a pair of metal garden charubs',
    categories: ['Art', 'Garden', 'Sculpture'],
    dimensions: '8.5 x 8 x 22 in',
    measurements: '8.5“W x 8“D x 22“H',
    inStock: true,
    date: '2021-05-12',
    minBid: 100,
    highestBid: 0,
    highestBidUser: null,
    image: 'images/cherub.jpeg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'East Asian Carved Wood Plaque',
    description:
      'This is an East Asian Carved Wood Plaque',
    categories: ['Accessories','Art', 'Artifact', 'Wood'],
    dimensions: '34 x 2.5 x 10.5 in',
    measurements: '34“W x 2.5“D x 10.5“H',
    inStock: true,
    date: '2021-05-12',
    minBid: 125,
    highestBid: 0,
    highestBidUser: null,
    image: 'images/wood.jpeg',
    isFeatured: false,
  },
];

export function getFeaturedItems() {
  return DUMMY_ITEMS.filter((item) => item.isFeatured);
}

export function getAllItems() {
  return DUMMY_ITEMS;
}

export function getFilteredItems(category) {

  if (category === 'Featured') {
    return DUMMY_ITEMS.filter(item => item.isFeatured);
  }

  let filteredItems = DUMMY_ITEMS.filter((item) => {
    return item.categories.includes(category);
  });
  return filteredItems;
}

export function getItemById(id) {
  return DUMMY_ITEMS.find((item) => item.id === id);
} 