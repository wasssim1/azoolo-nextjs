import clsx from 'clsx'
import CustomScroll from 'react-custom-scroll'
import { IoIosClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { getDiscountPrice } from '../../../lib/product'
import { deleteFromCart } from '../../../store/slices/cart-slice'
import Anchor from '../../anchor'

const CartOverlay = ({ activeStatus, getActiveStatus }) => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)
  let cartTotalPrice = 0

  return (
    <div className={clsx('cart-overlay', activeStatus && 'active')}>
      <div
        className="cart-overlay__close"
        onClick={() => {
          getActiveStatus(false)
          document.querySelector('body').classList.remove('overflow-hidden')
        }}
      />
      <div className="cart-overlay__content">
        {/*=======  close icon  =======*/}
        <button
          className="cart-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false)
            document.querySelector('body').classList.remove('overflow-hidden')
          }}
        >
          <IoIosClose />
        </button>
        {/*=======  offcanvas cart content container  =======*/}
        <div className="cart-overlay__content-container">
          <h3 className="cart-title">Panier</h3>
          {cartItems.length >= 1 ? (
            <div className="cart-product-wrapper">
              <div className="cart-product-container">
                <CustomScroll allowOuterScroll={true}>
                  {cartItems.map((product, i) => {
                    const discountedPrice = getDiscountPrice(
                      product.price,
                      product.discount,
                    ).toFixed(2)

                    cartTotalPrice += discountedPrice * product.quantity

                    return (
                      <div className="single-cart-product" key={i}>
                        <span className="cart-close-icon">
                          <button
                            onClick={() =>
                              dispatch(deleteFromCart(product.cartItemId))
                            }
                          >
                            <IoIosClose />
                          </button>
                        </span>
                        <div className="image">
                          <Anchor path={`/listing/${product.slug}`}>
                            <img
                              src={
                                process.env.PUBLIC_URL + product.thumbImage[0]
                              }
                              className="img-fluid"
                              alt=""
                            />
                          </Anchor>
                        </div>
                        <div className="content">
                          <h5>
                            <Anchor path={`/listing/${product.slug}`}>
                              {product.name}
                            </Anchor>
                          </h5>
                          {product.selectedProductColor &&
                          product.selectedProductSize ? (
                            <div className="cart-item-variation">
                              <span>
                                Couleur: {product.selectedProductColor}
                              </span>
                              <span>Taille: {product.selectedProductSize}</span>
                            </div>
                          ) : (
                            ''
                          )}
                          <p>
                            <span className="cart-count">
                              {product.quantity} x{' '}
                            </span>{' '}
                            <span className="discounted-price">
                              ${discountedPrice}
                            </span>
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </CustomScroll>
              </div>
              {/*=======  subtotal calculation  =======*/}
              <p className="cart-subtotal">
                <span className="subtotal-title">Total:</span>
                <span className="subtotal-amount">
                  ${cartTotalPrice.toFixed(2)}
                </span>
              </p>
              {/*=======  cart buttons  =======*/}
              <div className="cart-buttons">
                <Anchor path="/cart">Mon panier</Anchor>
                <Anchor path="/checkout">Commander</Anchor>
              </div>
              {/*=======  free shipping text  =======*/}
              <p className="free-shipping-text">
                Livraison gratuite sur toutes les commandes de plus de 100 TND!
              </p>
            </div>
          ) : (
            'Aucun article trouvé dans le panier'
          )}
        </div>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cartData
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteFromCart: (item, addToast) => {
//       dispatch(deleteFromCart(item, addToast));
//     }
//   };
// };

export default CartOverlay
