import clsx from 'clsx'
import { Fragment, useState } from 'react'
import { Col } from 'react-bootstrap'
import { IoIosEye, IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { Tooltip } from 'react-tippy'

import { addToCart } from '../../store/slices/cart-slice'
import {
  addToWishlist,
  deleteFromWishlist,
} from '../../store/slices/wishlist-slice'
import Anchor from '../anchor'
import ProductModal from './ProductModal'

const ProductGridList = ({
  product,
  discountedPrice,
  productPrice,
  cartItem,
  wishlistItem,
  bottomSpace,
}) => {
  const [modalShow, setModalShow] = useState(false)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <Col lg={3} md={6} className={clsx(bottomSpace)}>
        <div className="product-grid">
          {/*=======  single product image  =======*/}
          <div className="product-grid__image">
            <Anchor
              path={`/shop/listing/${product.slug}`}
              className="image-wrap"
            >
              <img
                src={process.env.PUBLIC_URL + product.thumbImage[0]}
                className="img-fluid"
                alt={product.name}
              />
              {product.thumbImage.length > 1 ? (
                <img
                  src={process.env.PUBLIC_URL + product.thumbImage[1]}
                  className="img-fluid"
                  alt={product.name}
                />
              ) : (
                ''
              )}
            </Anchor>
            <div className="product-grid__floating-badges">
              {product.discount && product.discount > 0 ? (
                <span className="onsale">-{product.discount}%</span>
              ) : (
                ''
              )}
              {product.new ? <span className="hot">Nvté</span> : ''}
              {product.stock === 0 ? (
                <span className="out-of-stock">out</span>
              ) : (
                ''
              )}
            </div>
            <div className="product-grid__floating-icons">
              {/* add to wishlist */}
              <Tooltip
                title={
                  wishlistItem !== undefined
                    ? 'Dêjà dans la Wishlist'
                    : 'Ajouter à la Wishlist'
                }
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  onClick={
                    !!wishlistItem
                      ? () => dispatch(deleteFromWishlist(product.id))
                      : () => dispatch(addToWishlist(product))
                  }
                >
                  {!!wishlistItem ? <IoIosHeart /> : <IoIosHeartEmpty />}
                </button>
              </Tooltip>

              {/* add to cart */}
              {/* <Tooltip
                title={
                  cartItem !== undefined
                    ? 'Dêjà dans le panier'
                    : 'Ajouter au panier'
                }
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  onClick={
                    !!cartItem
                      ? () => dispatch(deleteFromCart(product.id))
                      : () => dispatch(addToCart(product))
                  }
                >
                  {!!cartItem ? <PiShoppingCartFill /> : <PiShoppingCart />}
                </button>
              </Tooltip> */}

              {/* add to compare */}
              {/*  <Tooltip
                title={
                  compareItem !== undefined
                    ? 'Added to compare'
                    : 'Add to compare'
                }
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  onClick={
                    compareItem !== undefined
                      ? () => dispatch(deleteFromCompare(product.id))
                      : () => dispatch(addToCompare(product))
                  }
                  className={compareItem !== undefined ? 'active' : ''}
                >
                  <IoIosShuffle />
                </button>
              </Tooltip> */}

              {/* quick view */}
              <Tooltip
                title="Aperçu rapide"
                position="left"
                trigger="mouseenter"
                animation="shift"
                arrow={true}
                duration={200}
              >
                <button
                  onClick={() => setModalShow(true)}
                  className="d-none d-lg-block"
                >
                  <IoIosEye />
                </button>
              </Tooltip>
            </div>
          </div>

          {/*=======  single product content  =======*/}
          <div className="product-grid__content">
            <div className="title">
              <h3>
                <Anchor path={`/shop/listing/${product.slug}`}>
                  {product.name}
                </Anchor>
              </h3>
              {/* add to cart */}
              {product.affiliateLink ? (
                <a href={product.affiliateLink} target="_blank">
                  Acheter maintenant
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Anchor path={`/shop/listing/${product.slug}`}>
                  Choisir une variation
                </Anchor>
              ) : product.stock && product.stock > 0 ? (
                <button
                  onClick={() => dispatch(addToCart(product))}
                  disabled={
                    cartItem !== undefined &&
                    cartItem.quantity >= cartItem.stock
                  }
                >
                  {cartItem !== undefined
                    ? 'Déjà dans le panier'
                    : 'Ajouter au panier'}
                </button>
              ) : (
                <button disabled>Pas de Stock</button>
              )}
            </div>
            <div className="price">
              {product.discount > 0 ? (
                <Fragment>
                  <span className="main-price discounted">
                    {productPrice} TND
                  </span>
                  <span className="discounted-price">
                    {discountedPrice} TND
                  </span>
                </Fragment>
              ) : (
                <span className="main-price">{productPrice} TND</span>
              )}
            </div>
          </div>
        </div>
      </Col>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        discountedprice={discountedPrice}
        productprice={productPrice}
        cartitem={cartItem}
        wishlistitem={wishlistItem}
      />
    </Fragment>
  )
}

export default ProductGridList
