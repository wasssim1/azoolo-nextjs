import { IoIosArrowDown } from 'react-icons/io'
import Anchor from '../../anchor'
import { ACCESSORIES_CATEGORY_GROUP } from './menu-data/accessoriesCategoryGroup'
import { MEN_CATEGORY_GROUP } from './menu-data/menCategoryGroup'
import { SALE_CATEGORY_GROUP } from './menu-data/saleCategoryGroup'
import { WOMEN_CATEGORY_GROUP } from './menu-data/womenCategoryGroup'

const NAV_MENU_GROUPS = [
  WOMEN_CATEGORY_GROUP,
  MEN_CATEGORY_GROUP,
  ACCESSORIES_CATEGORY_GROUP,
  SALE_CATEGORY_GROUP,
]
// TODO:
// 1- Improve component - remove redundancy
// 2- Update nav items value
const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        {/* Menu Group */}
        {[
          NAV_MENU_GROUPS.map(
            ({
              key,
              path,
              label,
              isRelativePosition,
              className,
              subGroupsList,
              menuGroupImg,
            }) => (
              <li
                key={key}
                className={isRelativePosition ? `position-relative` : ''}
              >
                <Anchor path={path}>{label}</Anchor>
                <IoIosArrowDown />
                <ul className={className}>
                  {/* Menu Sub-Group */}
                  {subGroupsList.map(({ key, label, subGroupList }) => (
                    <li key={key} className="sub-menu--mega__title">
                      <Anchor path="#">{label}</Anchor>
                      <ul className="sub-menu--mega__list">
                        {/* Sub-Group Menu List Item */}
                        {subGroupList.map(({ key, label, path, imgSrc }) => (
                          <li key={key}>
                            <Anchor path={path}>{label}</Anchor>
                            {imgSrc && (
                              <img
                                src={process.env.PUBLIC_URL + imgSrc}
                                className="img-fluid"
                                alt=""
                              />
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                  {menuGroupImg && (
                    <li>
                      <div className="sub-menu--mega__image">
                        <img
                          src={process.env.PUBLIC_URL + menuGroupImg?.src}
                          className="img-fluid"
                          alt={menuGroupImg?.alt}
                        />
                      </div>
                    </li>
                  )}
                </ul>
              </li>
            ),
          ),
        ]}

        {/* One Column menu group with child items */}
        {/*  <li className="position-relative">
          <Anchor path="/blog/standard-left-sidebar">Blog</Anchor>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Anchor path="/blog/standard-left-sidebar">
                Standard Layout
              </Anchor>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Anchor path="/blog/standard-left-sidebar">
                    Left Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/standard-right-sidebar">
                    Right Sidebar
                  </Anchor>
                </li>
                <li>
                  <Anchor path="/blog/standard-fullwidth">Full Width</Anchor>
                </li>
              </ul>
            </li>
            <li>
              <Anchor path="/blog/grid-left-sidebar">Grid Layout</Anchor>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Anchor path="/blog/grid-left-sidebar">Left Sidebar</Anchor>
                </li>
                <li>
                  <Anchor path="/blog/grid-right-sidebar">Right Sidebar</Anchor>
                </li>
                <li>
                  <Anchor path="/blog/grid-fullwidth">Full Width</Anchor>
                </li>
              </ul>
            </li>
            <li>
              <Anchor path="/blog/list-left-sidebar">List Layout</Anchor>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Anchor path="/blog/list-left-sidebar">Left Sidebar</Anchor>
                </li>
                <li>
                  <Anchor path="/blog/list-right-sidebar">Right Sidebar</Anchor>
                </li>
                <li>
                  <Anchor path="/blog/list-fullwidth">Full Width</Anchor>
                </li>
              </ul>
            </li>
            <li>
              <Anchor path="/blog/post-left-sidebar">Single Post Layout</Anchor>
              <IoIosArrowForward />
              <ul className="sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Anchor path="/blog/post-left-sidebar">Left Sidebar</Anchor>
                </li>
                <li>
                  <Anchor path="/blog/post-right-sidebar">Right Sidebar</Anchor>
                </li>
                <li>
                  <Anchor path="/blog/post-fullwidth">Full Width</Anchor>
                </li>
              </ul>
            </li>
          </ul>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navigation
