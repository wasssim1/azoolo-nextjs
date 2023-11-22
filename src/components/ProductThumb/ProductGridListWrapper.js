import { Fragment } from 'react'
import { useSelector } from 'react-redux'

import { getDiscountPrice } from '../../lib/product'
import ProductGridList from './ProductGridList'

const ProductGridWrapper = ({ products, bottomSpace }) => {
  const { cartItems } = useSelector((state) => state.cart)
  const { wishlistItems } = useSelector((state) => state.wishlist)

  return (
    <Fragment>
      {products &&
        products.map((product) => {
          const discountedPrice = getDiscountPrice(
            product.price,
            product.discount,
          ).toFixed(2)
          const productPrice = product.price.toFixed(2)
          const cartItem = cartItems.find(
            (cartItem) => cartItem.id === product.id,
          )
          const wishlistItem = wishlistItems.find(
            (wishlistItem) => wishlistItem.id === product.id,
          )

          return (
            <ProductGridList
              key={product.id}
              product={product}
              discountedPrice={discountedPrice}
              productPrice={productPrice}
              cartItem={cartItem}
              wishlistItem={wishlistItem}
              bottomSpace={bottomSpace}
            />
          )
        })}
    </Fragment>
  )
}

export default ProductGridWrapper
