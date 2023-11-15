const SUB_GROUP_1 = [
  {
    id: 'decor',
    label: 'Decor',
    path: '/category/decor',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    id: 'decor',
    label: 'Decor',
    path: '/category/decor',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
  {
    id: 'decor',
    label: 'Decor',
    path: '/category/decor',
    imgSrc: '/assets/images/home-preview/decor.jpg',
  },
]

const MENU_SUB_GROUPS = [
  {
    key: 'menu-sub-grp-2-1',
    label: 'Sug Grp 1',
    subGroupList: SUB_GROUP_1,
  },
  {
    key: 'menu-sub-grp-2-2',
    label: 'Sug Grp 2',
    subGroupList: SUB_GROUP_1,
  },
  {
    key: 'menu-sub-grp-2-3',
    label: 'Sug Grp 3',
    subGroupList: SUB_GROUP_1,
  },
  {
    key: 'menu-sub-grp-2-4',
    label: 'Sug Grp 4',
    subGroupList: SUB_GROUP_1,
  },
]

export const MEN_CATEGORY_GROUP = {
  key: 'menu-grp-2',
  path: '/men',
  label: 'Homme',
  className: 'sub-menu sub-menu--mega sub-menu--mega--column-5',
  isRelativePosition: false,
  subGroupsList: [...MENU_SUB_GROUPS],
  menuGroupImg: {
    src: '/assets/images/menu-image/megamenu-shop.png',
    alt: '',
  },
}
