const SUB_GROUP_1 = [
  {
    key: 'robes',
    label: 'Robes',
    path: '/shop/women/clothing/robes',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'jeans',
    label: 'Jeans',
    path: '/shop/women/clothing/jeans',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'top-tshirt',
    label: 'Top & T-Shirts',
    path: '/shop/women/clothing/tshirts',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'shoes',
    label: 'Chaussures',
    path: '/shop/women/clothing/shoes',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'sport-clothing',
    label: 'Vêtement de sport',
    path: '/shop/women/clothing/sport-clothing',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
];

const SUB_GROUP_2 = [
  {
    key: 'robes',
    label: 'Robes',
    path: '/shop/women/clothing/robes',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'jeans',
    label: 'Jeans',
    path: '/shop/women/clothing/jeans',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'top-tshirt',
    label: 'Top & T-Shirts',
    path: '/shop/women/clothing/tshirts',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'coats',
    label: 'Montaux',
    path: '/shop/women/clothing/coats',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'blazers',
    label: 'Vestes & Blazers',
    path: '/shop/women/clothing/vestes',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
];

const SUB_GROUP_3 = [
  {
    key: 'robes',
    label: 'Robes',
    path: '/shop/women/clothing/robes',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'jeans',
    label: 'Jeans',
    path: '/shop/women/clothing/jeans',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'top-tshirt',
    label: 'Top & T-Shirts',
    path: '/shop/women/clothing/tshirts',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'coats',
    label: 'Montaux',
    path: '/shop/women/clothing/coats',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'blazers',
    label: 'Vestes & Blazers',
    path: '/shop/women/clothing/vestes',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
];
const SUB_GROUP_4 = [
  {
    key: 'robes',
    label: 'Robes',
    path: '/shop/women/clothing/robes',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'jeans',
    label: 'Jeans',
    path: '/shop/women/clothing/jeans',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'top-tshirt',
    label: 'Top & T-Shirts',
    path: '/shop/women/clothing/tshirts',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'coats',
    label: 'Montaux',
    path: '/shop/women/clothing/coats',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'blazers',
    label: 'Vestes & Blazers',
    path: '/shop/women/clothing/vestes',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
];

const MENU_SUB_GROUPS = [
  {
    key: 'menu-sub-grp-1-1',
    label: 'Vêtements',
    path: '/shop/women/clothing',
    subGroupList: SUB_GROUP_1,
  },
  {
    key: 'menu-sub-grp-1-2',
    label: 'Chaussures',
    path: '/shop/women/shoes',
    subGroupList: SUB_GROUP_2,
  },
  {
    key: 'menu-sub-grp-1-3',
    label: 'Vêtement de sport',
    path: '/shop/women/sport-clothing',
    subGroupList: SUB_GROUP_3,
  },
  {
    key: 'menu-sub-grp-1-4',
    label: 'New In',
    path: '/shop/women/new-in',
    subGroupList: SUB_GROUP_4,
  },
];

export const WOMEN_CATEGORY_GROUP = {
  key: 'menu-grp-2',
  path: '/shop/women',
  label: 'Femme',
  className: 'sub-menu sub-menu--mega sub-menu--mega--column-5',
  isRelativePosition: false,
  subGroupsList: [...MENU_SUB_GROUPS],
  menuGroupImg: {
    src: '/assets/images/menu-image/megamenu-shop.png',
    alt: '',
  },
};
