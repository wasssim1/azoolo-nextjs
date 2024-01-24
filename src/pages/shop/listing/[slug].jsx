import { Fragment, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import {
  ImageGalleryBottomThumb,
  ProductDescription,
  ProductDescriptionTab,
} from '../../../components/ProductDetails';
import { ProductSliderTwo } from '../../../components/ProductSlider';
import Anchor from '../../../components/anchor';
import similarProducts from '../../../data/categories/similar-products.json';
import productsFake from '../../../data/products.json';
import { getDiscountPrice } from '../../../lib/product';
import { notFound } from 'next/navigation';

export default function ProductDetail({ product }) {
  useEffect(() => {
    console.log({ product });
    if (!product) {
      notFound();
    }
    document.querySelector('body').classList.remove('overflow-hidden');
  });

  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);

  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount,
  ).toFixed(2);

  const productPrice = product.price.toFixed(2);
  const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  const wishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === product.id,
  );
  const compareItem = compareItems.find(
    (compareItem) => compareItem.id === product.id,
  );

  return (
    <Container>
      <div className="space-pt--70">
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">Acceuil</Anchor>
          </li>

          <li>{product.name}</li>
        </ul>
      </div>

      {/* product details */}
      {product && (
        <div className="product-details space-mt--50 space-mb--r100">
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
      )}

      <div className="element-wrapper space-mt--r130 space-mb--r130">
        {/* product slider */}
        <ProductSliderTwo products={similarProducts} />
      </div>
    </Container>
  );
}

export async function getStaticPaths() {
  // get the paths we want to pre render based on products
  const paths = productsFake.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // get product data based on slug
  const product = productsFake.filter(
    (single) => single.slug === params.slug,
  )[0];

  return { props: { product } };
}
