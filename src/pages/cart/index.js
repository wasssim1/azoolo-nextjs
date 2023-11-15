import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoIosClose, IoMdCart } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'

import { BreadcrumbOne } from '../../components/Breadcrumb'
import { LayoutFive } from '../../components/Layout'
import Anchor from '../../components/anchor'
import { cartItemStock, getDiscountPrice } from '../../lib/product'
import {
  addToCart,
  decreaseQuantity,
  deleteAllFromCart,
  deleteFromCart,
} from '../../store/slices/cart-slice'

const Cart = () => {
  const [quantityCount] = useState(1)
  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart)

  let cartTotalPrice = 0

  useEffect(() => {
    document.querySelector('body').classList.remove('overflow-hidden')
  })

  return (
    <LayoutFive>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Panier"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">Acceuil</Anchor>
          </li>

          <li>Panier</li>
        </ul>
      </BreadcrumbOne>

      {/* cart content */}
      <div className="cart-content space-mt--r130 space-mb--r130">
        <Container>
          {cartItems && cartItems.length >= 1 ? (
            <Row>
              <Col lg={12}>
                {/* cart table */}
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th className="product-name" colSpan="2">
                        Article
                      </th>
                      <th className="product-price">Prix</th>
                      <th className="product-quantity">Quantité</th>
                      <th className="product-subtotal">Total</th>
                      <th className="product-remove">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((product, i) => {
                      const discountedPrice = getDiscountPrice(
                        product.price,
                        product.discount,
                      ).toFixed(2)

                      cartTotalPrice += discountedPrice * product.quantity
                      return (
                        <tr key={i}>
                          <td className="product-thumbnail">
                            <Anchor path={`/listing/${product.slug}`}>
                              <img
                                src={
                                  process.env.PUBLIC_URL + product.thumbImage[0]
                                }
                                className="img-fluid"
                                alt=""
                              />
                            </Anchor>
                          </td>
                          <td className="product-name">
                            <Anchor path={`/listing/${product.slug}`}>
                              {product.name}
                            </Anchor>
                            {product.selectedProductColor &&
                            product.selectedProductSize ? (
                              <div className="product-variation">
                                <span>
                                  Couleur: {product.selectedProductColor}
                                </span>
                                <span>
                                  Taille: {product.selectedProductSize}
                                </span>
                              </div>
                            ) : (
                              ''
                            )}
                          </td>

                          <td className="product-price">
                            <span className="price">{discountedPrice} TND</span>
                          </td>

                          <td className="product-quantity">
                            <div className="cart-plus-minus">
                              <button
                                className="dec qtybutton"
                                onClick={() =>
                                  dispatch(decreaseQuantity(product))
                                }
                              >
                                -
                              </button>
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                value={product.quantity}
                                readOnly
                              />
                              <button
                                className="inc qtybutton"
                                onClick={() =>
                                  dispatch(
                                    addToCart({
                                      ...product,
                                      quantity: quantityCount,
                                    }),
                                  )
                                }
                                disabled={
                                  product !== undefined &&
                                  product.quantity &&
                                  product.quantity >=
                                    cartItemStock(
                                      product,
                                      product.selectedProductColor,
                                      product.selectedProductSize,
                                    )
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>

                          <td className="total-price">
                            <span className="price">
                              {(discountedPrice * product.quantity).toFixed(2)}{' '}
                              TND
                            </span>
                          </td>

                          <td className="product-remove">
                            <button
                              onClick={() =>
                                dispatch(deleteFromCart(product.cartItemId))
                              }
                            >
                              <IoIosClose />
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </Col>
              <Col lg={12} className="space-mb--r100">
                <div className="cart-coupon-area space-pt--30 space-pb--30">
                  <Row className="align-items-center">
                    <Col lg={7} className="space-mb-mobile-only--30">
                      <div className="lezada-form coupon-form">
                        <form>
                          <Row>
                            <Col md={7}>
                              <input
                                type="text"
                                placeholder="Enter your coupon code"
                              />
                            </Col>
                            <Col md={5}>
                              <button className="lezada-button lezada-button--medium">
                                Ajouter un code <small>(facultatif)</small>
                              </button>
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </Col>
                    <Col lg={5} className="text-start text-lg-end">
                      <button
                        className="lezada-button lezada-button--medium"
                        onClick={() => dispatch(deleteAllFromCart())}
                      >
                        Vider le panier
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={5} className="ms-auto">
                <div className="cart-calculation-area">
                  <h2 className="space-mb--40">Somme</h2>
                  <table className="cart-calculation-table space-mb--40">
                    <tbody>
                      <tr>
                        <th>Sous-total</th>
                        <td className="subtotal">
                          {cartTotalPrice.toFixed(2)} TND
                        </td>
                      </tr>
                      <tr>
                        <th>Livraison</th>
                        <td className="subtotal">{Number(0).toFixed(2)} TND</td>
                      </tr>
                      <tr>
                        <th>TOTAL</th>
                        <td className="total">
                          {cartTotalPrice.toFixed(2)} TND
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="cart-calculation-button text-center">
                    <Anchor
                      path="/checkout"
                      className="lezada-button lezada-button--medium"
                    >
                      Commander
                    </Anchor>
                  </div>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className="item-empty-area text-center">
                  <div className="item-empty-area__icon space-mb--30">
                    <IoMdCart />
                  </div>
                  <div className="item-empty-area__text">
                    <p className="space-mb--30">
                      Remplissez-le avec la nouvelle collection
                    </p>
                    <Anchor
                      path="/"
                      className="lezada-button lezada-button--medium"
                    >
                      Continuer mes achats
                    </Anchor>
                  </div>
                </div>
              </Col>
            </Row>
          )}

          {/* TODO: Add Recommended items section */}
        </Container>
      </div>
    </LayoutFive>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cartData
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (item, addToast, quantityCount) => {
//       dispatch(addToCart(item, addToast, quantityCount));
//     },
//     decreaseQuantity: (item, addToast) => {
//       dispatch(decreaseQuantity(item, addToast));
//     },
//     deleteFromCart: (item, addToast) => {
//       dispatch(deleteFromCart(item, addToast));
//     },
//     deleteAllFromCart: (addToast) => {
//       dispatch(deleteAllFromCart(addToast));
//     }
//   };
// };

export default Cart
