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
    key: 'menu-sub-grp-4-1',
    label: 'Sug Grp 1',
    subGroupList: SUB_GROUP_1,
  },
  {
    key: 'menu-sub-grp-4-2',
    label: 'Sug Grp 2',
    subGroupList: SUB_GROUP_1,
  },
  {
    key: 'menu-sub-grp-4-3',
    label: 'Sug Grp 3',
    subGroupList: SUB_GROUP_1,
  },
  {
    key: 'menu-sub-grp-4-4',
    label: 'Sug Grp 4',
    subGroupList: SUB_GROUP_1,
  },
]

export const SALE_CATEGORY_GROUP = {
  key: 'menu-grp-4',
  path: '/sale',
  label: 'Promos',
  className: 'sub-menu sub-menu--mega sub-menu--mega--column-4',
  isRelativePosition: false,
  subGroupsList: [...MENU_SUB_GROUPS],
}
