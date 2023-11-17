import { Fragment, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import {
  getDiscountPrice,
  getIndividualCategories,
  getIndividualTags,
  getProducts,
  setActiveSort,
} from '../../lib/product'
import { ProductRating } from '../Product'
import Anchor from '../anchor'

const ShopSidebar = ({ products, getSortParams }) => {
  const categories = getIndividualCategories(products)
  const tags = getIndividualTags(products)
  const popularProducts = getProducts(products, 'decor', 'popular', 3)

  const [categoriesList, setCategoriesList] = useState(categories)

  return (
    <div className="shop-sidebar">
      <div className="single-sidebar-widget space-mb--40">
        {/* search widget */}
        <div className="search-widget">
          <div>
            <input
              type="search"
              placeholder="Filtrer les catégories ..."
              onChange={(e) =>
                setCategoriesList(
                  categories.filter((categ) =>
                    String(categ).includes(e.target.value),
                  ),
                )
              }
            />
            <button type="button">
              <IoIosSearch />
            </button>
          </div>
        </div>
      </div>

      {/* category list */}
      <div className="single-sidebar-widget space-mb--40">
        <h2 className="single-sidebar-widget__title space-mb--30">
          Catégories
        </h2>
        {categories.length > 0 ? (
          <ul className="single-sidebar-widget__list single-sidebar-widget__list--category">
            <li>
              <button
                onClick={(e) => {
                  getSortParams('category', '')
                  setActiveSort(e)
                }}
                className="active"
              >
                Toutes les catégories
              </button>
            </li>
            {categoriesList.map((category, i) => {
              return (
                <li key={i}>
                  <button
                    onClick={(e) => {
                      getSortParams('category', category)
                      setActiveSort(e)
                    }}
                  >
                    {category}
                  </button>
                </li>
              )
            })}
          </ul>
        ) : (
          'Pas de catégories'
        )}
      </div>

      {/* popular products */}
      <div className="single-sidebar-widget space-mb--40">
        <h2 className="single-sidebar-widget__title space-mb--30">
          Meilleures ventes
        </h2>
        {popularProducts.length > 0 ? (
          <div className="widget-product-wrapper">
            {popularProducts.map((product, i) => {
              const discountedPrice = getDiscountPrice(
                product.price,
                product.discount,
              ).toFixed(2)
              const productPrice = product.price.toFixed(2)
              return (
                <div className="single-widget-product-wrapper" key={i}>
                  <div className="single-widget-product">
                    <div className="single-widget-product__image">
                      <Anchor
                        path={`/shop/product-basic/${product.slug}`}
                        className="image-wrap"
                      >
                        <img
                          src={process.env.PUBLIC_URL + product.thumbImage[0]}
                          className="img-fluid"
                          alt={product.name}
                        />
                      </Anchor>
                    </div>
                    <div className="single-widget-product__content">
                      <div className="single-widget-product__content__top">
                        <h3 className="product-title space-mb--10">
                          <Anchor path={`/shop/product-basic/${product.slug}`}>
                            {product.name}
                          </Anchor>
                        </h3>
                        <div className="price space-mb--10">
                          {product.discount > 0 ? (
                            <Fragment>
                              <span className="main-price discounted">
                                ${productPrice}
                              </span>
                              <span className="discounted-price">
                                ${discountedPrice}
                              </span>
                            </Fragment>
                          ) : (
                            <span className="main-price">${productPrice}</span>
                          )}
                        </div>
                        <div className="rating">
                          <ProductRating ratingValue={product.rating} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          'Aucun article trouvé'
        )}
      </div>

      {/* tag list */}
      <div className="single-sidebar-widget">
        <h2 className="single-sidebar-widget__title space-mb--30">Tags</h2>
        {tags.length > 0 ? (
          <div className="tag-container">
            {tags.map((tag, i) => {
              return (
                <button
                  key={i}
                  onClick={(e) => {
                    getSortParams('tag', tag)
                    setActiveSort(e)
                  }}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        ) : (
          'Aucun tag trouvé'
        )}
      </div>
    </div>
  )
}

export default ShopSidebar
