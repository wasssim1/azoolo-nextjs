import {Fragment, useContext, useState} from "react";
import {Col} from "react-bootstrap";
import Link from "next/link";
import {IoIosHeartEmpty, IoIosShuffle, IoIosSearch} from "react-icons/io";
import {Tooltip} from "react-tippy";
import ProductModal from "./ProductModal";
import {
    ADD_TO_CART_LABEL,
    ADD_TO_WISHLIST_TOOLTIP, ADDED_TO_CART_LABEL,
    ADDED_TO_WISHLIST_TOOLTIP, AFFILIATE_LINK_LABEL, NEW_PRODUCT_SPAN,
    OUTOFSTOCK_PRODUCT_SPAN,
    QUICK_VIEW_TOOLTIP, SELECT_OPTION_LABEL
} from "../../config/productLabels";
import {CurrencyContext} from "../../contexts/currencyContext";
import {MARKETPLACE_PRODUCT_URL} from "../../config/staticNavigation";

const ProductGridList = ({
                             product,
                             discountedPrice,
                             productPrice,
                             cartItem,
                             wishlistItem,
                             compareItem,
                             bottomSpace,
                             addToCart,
                             addToWishlist,
                             deleteFromWishlist,
                             addToCompare,
                             deleteFromCompare,
                             addToast,
                             cartItems
                         }) => {

    const {currentCurrency} = useContext(CurrencyContext);

    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <Col lg={3} md={6} className={bottomSpace ? bottomSpace : ""}>
                <div className="product-grid">
                    {/*=======  single product image  =======*/}
                    <div className="product-grid__image">
                        <Link
                            href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                            as={
                                process.env.PUBLIC_URL + "/shop/product-basic/" + product.slug
                            }
                        >
                            <a className="image-wrap">
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
                                    ""
                                )}
                            </a>
                        </Link>
                        <div className="product-grid__floating-badges">
                            {product.discount && product.discount > 0 ? (
                                <span className="onsale">-{product.discount}%</span>
                            ) : (
                                ""
                            )}
                            {product.new ? <span className="hot">New</span> : ""}
                            {product.stock === 0 ? (
                                <span className="out-of-stock">out</span>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="product-grid__floating-icons">
                            {/* add to wishlist */}
                            <Tooltip
                                title={
                                    wishlistItem !== undefined
                                        ? ADDED_TO_WISHLIST_TOOLTIP
                                        : ADD_TO_WISHLIST_TOOLTIP
                                }
                                position="left"
                                trigger="mouseenter"
                                animation="shift"
                                arrow={true}
                                duration={200}
                            >
                                <button
                                    onClick={
                                        wishlistItem !== undefined
                                            ? () => deleteFromWishlist(product, addToast)
                                            : () => addToWishlist(product, addToast)
                                    }
                                    className={wishlistItem !== undefined ? "active" : ""}
                                >
                                    <IoIosHeartEmpty/>
                                </button>
                            </Tooltip>

                            {/* add to compare */}
                            {/*<Tooltip
                title={
                  compareItem !== undefined
                    ? "Added to compare"
                    : "Add to compare"
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
                      ? () => deleteFromCompare(product, addToast)
                      : () => addToCompare(product, addToast)
                  }
                  className={compareItem !== undefined ? "active" : ""}
                >
                  <IoIosShuffle />
                </button>
              </Tooltip>*/}

                            {/* quick view */}
                            <Tooltip
                                title={QUICK_VIEW_TOOLTIP}
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
                                    <IoIosSearch/>
                                </button>
                            </Tooltip>
                        </div>
                    </div>

                    {/*=======  single product content  =======*/}
                    <div className="product-grid__content">
                        <div className="title">
                            <h3>
                                <Link
                                    href={`${MARKETPLACE_PRODUCT_URL}/${product.slug}`}
                                    as={`${process.env.PUBLIC_URL}${MARKETPLACE_PRODUCT_URL}/${product.slug}`}
                                >
                                    <a>{product.name}</a>
                                </Link>
                            </h3>
                            {/* add to cart */}
                            {product.affiliateLink ? (
                                <a href={product.affiliateLink} target="_blank">
                                    {AFFILIATE_LINK_LABEL}
                                </a>
                            ) : product.variation && product.variation.length >= 1 ? (
                                <Link
                                    href={`${MARKETPLACE_PRODUCT_URL}/${product.slug}`}
                                    as={`${process.env.PUBLIC_URL}${MARKETPLACE_PRODUCT_URL}/${product.slug}`}
                                >
                                    <a>{SELECT_OPTION_LABEL}</a>
                                </Link>
                            ) : product.stock && product.stock > 0 ? (
                                <button
                                    onClick={() => addToCart(product, addToast)}
                                    disabled={
                                        cartItem !== undefined &&
                                        cartItem.quantity >= cartItem.stock
                                    }
                                >
                                    {cartItem !== undefined ? ADDED_TO_CART_LABEL : ADD_TO_CART_LABEL}
                                </button>
                            ) : (
                                <button disabled>{OUTOFSTOCK_PRODUCT_SPAN}</button>
                            )}
                        </div>
                        <div className="price">
                            {product.discount > 0 ? (
                                <Fragment>
                                    <span
                                        className="main-price discounted">{`${productPrice} ${currentCurrency}`}</span>
                                    <span className="discounted-price">{`${discountedPrice} ${currentCurrency}`}</span>
                                </Fragment>
                            ) : (
                                <span className="main-price">{`${productPrice} ${currentCurrency}`}</span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="product-list">
                    {/*=======  single product image  =======*/}
                    <div className="product-list__image">
                        <Link
                            href={`${MARKETPLACE_PRODUCT_URL}/${product.slug}`}
                            as={`${process.env.PUBLIC_URL}${MARKETPLACE_PRODUCT_URL}/${product.slug}`}
                        >
                            <a className="image-wrap">
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
                                    ""
                                )}
                            </a>
                        </Link>
                        <div className="product-list__floating-badges">
                            {product.discount && product.discount > 0 ? (
                                <span className="onsale">-{product.discount}%</span>
                            ) : (
                                ""
                            )}
                            {product.new ? <span className="hot">{NEW_PRODUCT_SPAN}</span> : ""}
                            {product.stock === 0 ? (
                                <span className="out-of-stock">{OUTOFSTOCK_PRODUCT_SPAN}</span>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="product-list__floating-icons">
                            {/*add to wishlist*/}
                            <Tooltip
                                title={
                                    wishlistItem !== undefined
                                        ? ADDED_TO_WISHLIST_TOOLTIP
                                        : ADD_TO_WISHLIST_TOOLTIP
                                }
                                position="left"
                                trigger="mouseenter"
                                animation="shift"
                                arrow={true}
                                duration={200}
                            >
                                <button
                                    onClick={
                                        wishlistItem !== undefined
                                            ? () => deleteFromWishlist(product, addToast)
                                            : () => addToWishlist(product, addToast)
                                    }
                                    className={wishlistItem !== undefined ? "active" : ""}
                                >
                                    <IoIosHeartEmpty/>
                                </button>
                            </Tooltip>

                            {/*add to compare*/}
                            {/*<Tooltip
                title={
                  compareItem !== undefined
                    ? "Added to compare"
                    : "Add to compare"
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
                      ? () => deleteFromCompare(product, addToast)
                      : () => addToCompare(product, addToast)
                  }
                  className={compareItem !== undefined ? "active" : ""}
                >
                  <IoIosShuffle />
                </button>
              </Tooltip>*/}

                            {/*quick view*/}
                            <Tooltip
                                title={QUICK_VIEW_TOOLTIP}
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
                                    <IoIosSearch/>
                                </button>
                            </Tooltip>
                        </div>
                    </div>

                    {/*=======  single product content  =======*/}
                    <div className="product-list__content">
                        <div className="title">
                            <h3>
                                <Link
                                    href={`${MARKETPLACE_PRODUCT_URL}/${product.slug}`}
                                    as={`${process.env.PUBLIC_URL}${MARKETPLACE_PRODUCT_URL}/${product.slug}`}
                                >
                                    <a>{product.name}</a>
                                </Link>
                            </h3>
                        </div>
                        <div className="price">
                            {product.discount > 0 ? (
                                <Fragment>
                                    <span
                                        className="main-price discounted">{`${productPrice} ${currentCurrency}`}</span>
                                    <span className="discounted-price">{`${discountedPrice} ${currentCurrency}`}</span>
                                </Fragment>
                            ) : (
                                <span className="main-price">{`${productPrice} ${currentCurrency}`}</span>
                            )}
                        </div>

                        <div className="short-description">{product.shortDescription}</div>
                        <div className="add-to-cart">
                            {/*add to cart*/}
                            {product.affiliateLink ? (
                                <a
                                    href={product.affiliateLink}
                                    target="_blank"
                                    className="lezada-button lezada-button--medium"
                                >
                                    {AFFILIATE_LINK_LABEL}
                                </a>
                            ) : product.variation && product.variation.length >= 1 ? (
                                <Link
                                    href={`${MARKETPLACE_PRODUCT_URL}/${product.slug}`}
                                    as={`${process.env.PUBLIC_URL}${MARKETPLACE_PRODUCT_URL}/${product.slug}`}
                                >
                                    <a className="lezada-button lezada-button--medium">
                                        {SELECT_OPTION_LABEL}
                                    </a>
                                </Link>
                            ) : product.stock && product.stock > 0 ? (
                                <button
                                    onClick={() => addToCart(product, addToast)}
                                    disabled={
                                        cartItem !== undefined &&
                                        cartItem.quantity >= cartItem.stock
                                    }
                                    className="lezada-button lezada-button--medium"
                                >
                                    {cartItem !== undefined ? ADDED_TO_CART_LABEL : ADD_TO_CART_LABEL}
                                </button>
                            ) : (
                                <button
                                    disabled
                                    className="lezada-button lezada-button--medium"
                                >
                                    {OUTOFSTOCK_PRODUCT_SPAN}
                                </button>
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
                cartitems={cartItems}
                cartitem={cartItem}
                wishlistitem={wishlistItem}
                compareitem={compareItem}
                addtocart={addToCart}
                addtowishlist={addToWishlist}
                deletefromwishlist={deleteFromWishlist}
                addtocompare={addToCompare}
                deletefromcompare={deleteFromCompare}
                addtoast={addToast}
            />
        </Fragment>
    );
};

export default ProductGridList;
