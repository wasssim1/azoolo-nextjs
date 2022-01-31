import React, {useContext, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import productsFake from "../../../data/products.json";
import {useToasts} from "react-toast-notifications";
import {getDiscountPrice} from "../../../lib/product";
import {CartContext} from "../../../contexts/cartContext";
import BasicLayout from "../../../components/layout/BasicLayout";
import BreadcrumbOne from "../../../components/Breadcrumb/BreadcrumbOne";
import ImageGalleryBottomThumb from "../../../components/ProductDetails/ImageGalleryBottomThumb";
import ProductDescription from "../../../components/ProductDetails/ProductDescription";
import ProductDescriptionTab from "../../../components/ProductDetails/ProductDescriptionTab";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import CategorySlider from "../../../components/categorygrid/CategorySlider";
import {PRODUCT_NOT_FOUND_LABEL, SIMILAR_PRODUCTS_LABEL} from "../../../config/productLabels";
import similarProducts from "../../../data/categories/similar-products.json";

const ProductDetail = ({
                           product,
                           wishlistItems,
                           compareItems,
                           addToWishlist,
                           deleteFromWishlist,
                           addToCompare,
                           deleteFromCompare
                       }) => {

    const {cartItems, addToCart, removeFromCart} = useContext(CartContext);

    useEffect(() => {
        document.querySelector("body").classList.remove("overflow-hidden");
    }, []);

    const {addToast} = useToasts();

    let discountedPrice = 0;
    let productPrice = 0;
    if (product) {
        discountedPrice = getDiscountPrice(
            product.price,
            product.discount
        )?.toFixed(2);
        productPrice = product.price?.toFixed(2);
    }

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
        <BasicLayout>
            {/* breadcrumb */}
            <BreadcrumbOne
                pageTitle={product ? product.name : PRODUCT_NOT_FOUND_LABEL}
                backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
            >
                {/*<ul className="breadcrumb__list">*/}
                {/*    <li>{product.name}</li>*/}
                {/*</ul>*/}
            </BreadcrumbOne>

            {/* product details */}
            {
                product &&
                <div className="product-details space-mt--r100 space-mb--r100">
                    <Container>
                        <Row>
                            <Col lg={6} className="space-mb-mobile-only--50">
                                {/* image gallery bottom thumb */}
                                <ImageGalleryBottomThumb
                                    product={product}
                                    wishlistItem={wishlistItem}
                                    addToast={addToast}
                                    addToWishlist={addToWishlist}
                                    deleteFromWishlist={deleteFromWishlist}
                                />
                            </Col>

                            <Col lg={6}>
                                {/* product description */}
                                <ProductDescription
                                    product={product}
                                    productPrice={productPrice}
                                    discountedPrice={discountedPrice}
                                    cartItems={cartItems}
                                    cartItem={cartItem}
                                    wishlistItem={wishlistItem}
                                    compareItem={compareItem}
                                    addToast={addToast}
                                    addToCart={addToCart}
                                    addToWishlist={addToWishlist}
                                    deleteFromWishlist={deleteFromWishlist}
                                    addToCompare={addToCompare}
                                    deleteFromCompare={deleteFromCompare}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {/* product description tab */}
                                <ProductDescriptionTab product={product}/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            }

            <div className="element-wrapper space-mt--r130 space-mb--r130">
                <SectionTitle title={SIMILAR_PRODUCTS_LABEL}
                              subtitle="This is where to find your satisfactory products"/>
                <CategorySlider
                    categoryData={similarProducts}
                    spaceBottomClass="space-mb--r100"
                />
            </div>
        </BasicLayout>
    );
};

/*export async function getStaticPaths() {
    // get the paths we want to pre render based on products
    const paths = productsFake.map((product) => ({
        params: {prd: product.slug}
    }));

    return {paths, fallback: false};
}*/

export async function getServerSideProps({params: {slug}}) {
    // const res = await getData(`product/${id}`);

    const product = await productsFake?.find(p => p.slug === slug) || null;
    console.log(product)

    return {
        props: {
            product: product,
        },
    }
}

export default ProductDetail;
