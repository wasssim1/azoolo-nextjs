import { Fragment, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";


import { BreadcrumbOne } from "../../../components/Breadcrumb";
import { CategorySlider } from "../../../components/Category";
import {
    ImageGalleryBottomThumb,
    ProductDescription,
    ProductDescriptionTab
} from "../../../components/ProductDetails";
import Anchor from "../../../components/anchor";
import { SectionTitleOne } from "../../../components/sectiontitle/";
import { SIMILAR_PRODUCTS_LABEL } from "../../../config/productLabels";
import similarProducts from "../../../data/categories/similar-products.json";
import productsFake from "../../../data/products.json";
import { getDiscountPrice } from "../../../lib/product";

const ProductDetail = ({ product }) => {

    useEffect(() => {
        document.querySelector("body").classList.remove("overflow-hidden");
    });

    const { cartItems } = useSelector((state) => state.cart);
    const { wishlistItems } = useSelector((state) => state.wishlist);
    const { compareItems } = useSelector((state) => state.compare);

    const discountedPrice = getDiscountPrice(
        product.price,
        product.discount
    ).toFixed(2);

    const productPrice = product.price.toFixed(2);
    const cartItem = cartItems.find(
        (cartItem) => cartItem.id === product.id
    );
    const wishlistItem = wishlistItems.find(
        (wishlistItem) => wishlistItem.id === product.id
    );
    const compareItem = compareItems.find(
        (compareItem) => compareItem.id === product.id
    );

    return (
        <Fragment>
            {/* breadcrumb */}
            <BreadcrumbOne
                pageTitle={product.name}
                backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
            >
                <ul className="breadcrumb__list">
                    <li>
                        <Anchor path="/">
                            Acceuil
                        </Anchor>
                    </li>

                    <li>{product.name}</li>
                </ul>
            </BreadcrumbOne>

            <Container>
                {/* product details */}
                {
                    product &&
                    <div className="product-details space-mt--r100 space-mb--r100">
                        <Row>
                            <Col lg={6} className="space-mb-mobile-only--50">
                                {/* image gallery bottom thumb */}
                                <ImageGalleryBottomThumb
                                    product={product}
                                    wishlistItem={wishlistItem}
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
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {/* product description tab */}
                                <ProductDescriptionTab product={product} />
                            </Col>
                        </Row>
                    </div>
                }

                <div className="element-wrapper space-mt--r130 space-mb--r130">
                    <SectionTitleOne title={SIMILAR_PRODUCTS_LABEL}
                        subtitle="This is where to find your satisfactory products" />
                    <CategorySlider
                        categoryData={similarProducts}
                        spaceBottomClass="space-mb--r100"
                    />
                </div>
            </Container>
        </Fragment>
    );
};

/*export async function getStaticPaths() {
    // get the paths we want to pre render based on products
    const paths = productsFake.map((product) => ({
        params: {prd: product.slug}
    }));

    return {paths, fallback: false};
}*/

export async function getServerSideProps({ params: { slug } }) {
    // const res = await getData(`product/${id}`);

    const product = await productsFake?.find(p => p.slug === slug) || null;
    console.log(product.name)

    return {
        props: {
            product: product,
        },
    }
}

export default ProductDetail;
