import { Fragment, useState } from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoIosHeartEmpty } from 'react-icons/io'
import { PiArrowUUpLeftFill } from 'react-icons/pi'
import { TbTruckDelivery } from 'react-icons/tb'
import { useDispatch } from 'react-redux'

import { getProductCartQuantity } from '../../lib/product'
import { addToCart } from '../../store/slices/cart-slice'
import {
  addToWishlist,
  deleteFromWishlist,
} from '../../store/slices/wishlist-slice'
import { ProductRating } from '../Product'
import Anchor from '../anchor'

const ProductDescription = ({
  product,
  productPrice,
  discountedPrice,
  cartItems,
  wishlistItem,
}) => {
  const dispatch = useDispatch()
  const [selectedProductColor, setSelectedProductColor] = useState(
    product.variation ? product.variation[0].color : '',
  )
  const [selectedProductSize, setSelectedProductSize] = useState(
    product.variation ? product.variation[0].size[0].name : '',
  )
  const [productStock, setProductStock] = useState(
    product.variation ? product.variation[0].size[0].stock : product.stock,
  )
  const [quantityCount, setQuantityCount] = useState(1)

  const productCartQty = getProductCartQuantity(
    cartItems,
    product,
    selectedProductColor,
    selectedProductSize,
  )

  return (
    <div className="product-content">
      {product.rating && product.rating > 0 && (
        <div className="product-content__rating-wrap d-block d-sm-flex space-mb--20">
          <div className="product-content__rating space-mr--20">
            <ProductRating ratingValue={product.rating} />
          </div>
          <div className="product-content__rating-count">
            <a href="#">( {product.ratingCount} Avis des clients )</a>
          </div>
        </div>
      )}
      <h2 className="product-content__title space-mb--20">{product.name}</h2>
      <div className="product-content__price space-mb--20">
        {product.discount > 0 ? (
          <Fragment>
            <span className="main-price discounted">{productPrice} TND</span>
            <span className="main-price">{discountedPrice} TND</span>
          </Fragment>
        ) : (
          <span className="main-price">{productPrice} TND</span>
        )}
      </div>
      <div className="product-content__description space-mb--30">
        <p>{product.shortDescription}</p>
      </div>

      {product.variation ? (
        <div className="product-content__size-color">
          <div className="product-content__size space-mb--20">
            <div className="product-content__size__title">Taille</div>
            <div className="product-content__size__content">
              {product.variation &&
                product.variation.map((single) => {
                  return single.color === selectedProductColor
                    ? single.size.map((singleSize, i) => {
                        return (
                          <Fragment key={i}>
                            <input
                              type="radio"
                              value={singleSize.name}
                              checked={
                                singleSize.name === selectedProductSize
                                  ? 'checked'
                                  : ''
                              }
                              id={singleSize.name}
                              onChange={() => {
                                setSelectedProductSize(singleSize.name)
                                setProductStock(singleSize.stock)
                                setQuantityCount(1)
                              }}
                            />
                            <label htmlFor={singleSize.name}>
                              {singleSize.name}
                            </label>
                          </Fragment>
                        )
                      })
                    : ''
                })}
            </div>
          </div>
          <div className="product-content__color space-mb--20">
            <div className="product-content__color__title">Couleur</div>
            <div className="product-content__color__content">
              {product.variation.map((single, i) => {
                return (
                  <Fragment key={i}>
                    <input
                      type="radio"
                      value={single.color}
                      name="product-color"
                      id={single.color}
                      checked={
                        single.color === selectedProductColor ? 'checked' : ''
                      }
                      onChange={() => {
                        setSelectedProductColor(single.color)
                        setSelectedProductSize(single.size[0].name)
                        setProductStock(single.size[0].stock)
                        setQuantityCount(1)
                      }}
                    />
                    <label
                      htmlFor={single.color}
                      style={{ backgroundColor: single.colorCode }}
                    ></label>
                  </Fragment>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      {product.affiliateLink ? (
        <div className="product-content__quality">
          <div className="product-content__cart btn-hover">
            <a
              href={product.affiliateLink}
              rel="noopener noreferrer"
              target="_blank"
              className="lezada-button lezada-button--medium"
            >
              Acheter maintenant
            </a>
          </div>
        </div>
      ) : (
        <Fragment>
          <div className="product-content__quantity space-mb--40">
            <div className="product-content__quantity__title">Quantité</div>
            <div className="cart-plus-minus">
              <button
                onClick={() =>
                  setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)
                }
                className="qtybutton"
              >
                -
              </button>
              <input
                className="cart-plus-minus-box"
                type="text"
                value={quantityCount}
                readOnly
              />
              <button
                onClick={() =>
                  setQuantityCount(
                    quantityCount < productStock - productCartQty
                      ? quantityCount + 1
                      : quantityCount,
                  )
                }
                className="qtybutton"
              >
                +
              </button>
            </div>
          </div>

          <div className="product-content__button-wrapper d-flex align-items-center">
            {productStock && productStock > 0 ? (
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      ...product,
                      quantity: quantityCount,
                      selectedProductColor: selectedProductColor
                        ? selectedProductColor
                        : product.selectedProductColor
                        ? product.selectedProductColor
                        : null,
                      selectedProductSize: selectedProductSize
                        ? selectedProductSize
                        : product.selectedProductSize
                        ? product.selectedProductSize
                        : null,
                    }),
                  )
                }
                disabled={productCartQty >= productStock}
                className="lezada-button lezada-button--medium product-content__cart space-mr--10"
              >
                Ajouter au panier
              </button>
            ) : (
              <button
                className="lezada-button lezada-button--medium product-content__ofs space-mr--10"
                disabled
              >
                Pas de Stock
              </button>
            )}

            <button
              className={`product-content__wishlist space-mr--10 ${
                !!wishlistItem ? 'active' : ''
              }`}
              title={
                !!wishlistItem
                  ? 'Ajouter à la Wishlist'
                  : 'Déjà dans la Wishlist'
              }
              onClick={
                !!wishlistItem
                  ? () => dispatch(deleteFromWishlist(product.id))
                  : () => dispatch(addToWishlist(product))
              }
            >
              <IoIosHeartEmpty />
            </button>

            {/* <button
              className={`product-content__compare space-mr--10 ${
                !!compareItem ? 'active' : ''
              }`}
              title={
                compareItem !== undefined
                  ? 'Added to compare'
                  : 'Add to compare'
              }
              onClick={
                compareItem !== undefined
                  ? () => dispatch(deleteFromCompare(product.id))
                  : () => dispatch(addToCompare(product))
              }
            >
              <IoIosShuffle />
            </button> */}
          </div>

          <div className="product-content__other-info space-mt--50">
            <table>
              <tbody>
                <tr className="single-info">
                  <td className="title">Catégories: </td>
                  <td className="value">
                    {product.category &&
                      product.category.map((item, index, arr) => {
                        return (
                          <Anchor path={`shop/listing`} key={index}>
                            {item + (index !== arr.length - 1 ? ', ' : '')}
                          </Anchor>
                        )
                      })}
                  </td>
                </tr>
                <tr className="single-info">
                  <td className="title">Tags: </td>
                  <td className="value">
                    {product.tag &&
                      product.tag.map((item, index, arr) => {
                        return (
                          <small key={index}>
                            {item + (index !== arr.length - 1 ? ', ' : '')}
                          </small>
                        )
                      })}
                  </td>
                </tr>
                <tr className="single-info">
                  <td className="title">Vendu par: </td>
                  <td className="value">
                    <Anchor path={`/shop/vendor/${product.vendor}`}>
                      {product.vendor}
                    </Anchor>
                  </td>
                </tr>
                <tr className="single-info">
                  <td className="title">Partager sur: </td>
                  <td className="value">
                    <ul className="social-icons">
                      <li>
                        <a href="https://www.twitter.com">
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com">
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com">
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com">
                          <FaYoutube />
                        </a>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="product-content__other-info space-mt--50">
            <table>
              <tbody>
                <tr className="single-info">
                  <td className="title">
                    <TbTruckDelivery /> Livraison rapide:
                  </td>
                  <td className="value">48H</td>
                </tr>
                <tr className="single-info">
                  <td className="title">
                    <CiDeliveryTruck /> Livraison standard:
                  </td>
                  <td className="value">1 semaine max</td>
                </tr>
                <tr className="single-info"></tr>
                <tr className="single-info">
                  <td colSpan={2}>Gratuit à partir de 35.00 TND d'achat</td>
                </tr>
                <tr className="single-info">
                  <td colSpan={2}>
                    <PiArrowUUpLeftFill /> Retour gratuit sous 7 jours
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default ProductDescription
