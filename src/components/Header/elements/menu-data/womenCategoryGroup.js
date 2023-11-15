const SUB_GROUP_1 = [
  {
    key: 'decor',
    label: 'Decor',
    path: '/category/decor',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'decor',
    label: 'Decor',
    path: '/category/decor',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    key: 'decor',
    label: 'Decor',
    path: '/category/decor',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
]

const MENU_SUB_GROUPS = [
  {
    key: 'menu-sub-grp-1-1',
    label: 'Sug Grp 1',
    subGroupList: SUB_GROUP_1,
  },
  {
    key: 'menu-sub-grp-1-2',
    label: 'Sug Grp 2',
    subGroupList: SUB_GROUP_1,
  },
  {
    key: 'menu-sub-grp-1-3',
    label: 'Sug Grp 3',
    subGroupList: SUB_GROUP_1,
  },
  {
    key: 'menu-sub-grp-1-4',
    label: 'Sug Grp 4',
    subGroupList: SUB_GROUP_1,
  },
]

export const WOMEN_CATEGORY_GROUP = {
  key: 'menu-grp-2',
  path: '/women',
  label: 'Femme',
  className: 'sub-menu sub-menu--mega sub-menu--mega--column-5',
  isRelativePosition: false,
  subGroupsList: [...MENU_SUB_GROUPS],
  menuGroupImg: {
    src: '/assets/images/menu-image/megamenu-shop.png',
    alt: '',
  },
}
