import React, {Fragment, useContext} from "react";

import { useToasts } from "react-toast-notifications";
import { getDiscountPrice } from "../../lib/product";
import ProductGrid from "./ProductGrid";
import {CartContext} from "../../contexts/cartContext";

const ProductGridWrapper = ({
  products,
  bottomSpace,
  addToWishlist,
  deleteFromWishlist,
  addToCompare,
  deleteFromCompare,
  wishlistItems,
  compareItems,
  column
}) => {
  const {cartItems, addToCart, removeFromCart} = useContext(CartContext);

  const { addToast } = useToasts();
  return (
    <Fragment>
      {products &&
        products.map((product) => {
          const discountedPrice = getDiscountPrice(
            product.price,
            product.discount
          ).toFixed(2);
          const productPrice = product.price.toFixed(2);
          const cartItem = cartItems.filter(
            (cartItem) => cartItem.id === product.id
          )[0];
          const wishlistItem = wishlistItems?.filter(
            (wishlistItem) => wishlistItem.id === product.id
          )[0];
          const compareItem = compareItems?.filter(
            (compareItem) => compareItem.id === product.id
          )[0];

          return (
            <ProductGrid
              key={product.id}
              product={product}
              discountedPrice={discountedPrice}
              productPrice={productPrice}
              cartItem={cartItem}
              wishlistItem={wishlistItem}
              compareItem={compareItem}
              bottomSpace={bottomSpace}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              deleteFromWishlist={deleteFromWishlist}
              addToCompare={addToCompare}
              deleteFromCompare={deleteFromCompare}
              addToast={addToast}
              cartItems={cartItems}
              column={column}
            />
          );
        })}
    </Fragment>
  );
};

export default ProductGridWrapper;
