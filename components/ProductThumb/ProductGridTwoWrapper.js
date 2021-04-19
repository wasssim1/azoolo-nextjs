import {Fragment} from "react";

import {useToasts} from "react-toast-notifications";
import {getDiscountPrice} from "../../lib/product";
import ProductGridTwo from "./ProductGridTwo";

const ProductGridTwoWrapper = ({
                                   products,
                                   bottomSpace,
                                   addToCart,
                                   addToWishlist,
                                   deleteFromWishlist,
                                   addToCompare,
                                   deleteFromCompare,
                                   cartItems,
                                   wishlistItems,
                                   compareItems
                               }) => {
    const {addToast} = useToasts();
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
                const wishlistItem = wishlistItems.filter(
                    (wishlistItem) => wishlistItem.id === product.id
                )[0];
                const compareItem = compareItems.filter(
                    (compareItem) => compareItem.id === product.id
                )[0];

                return (
                    <ProductGridTwo
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
                    />
                );
            })}
        </Fragment>
    );
};

export default ProductGridTwoWrapper;
