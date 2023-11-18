import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { SectionTitleThree } from '../../components/SectionTitle'
import { SIMILAR_PRODUCTS_LABEL } from '../../config/productLabels'
import { getDiscountPrice } from '../../lib/product'
import ProductGridThree from '../ProductThumb/ProductGridThree'
import Swiper, { SwiperSlide } from '../swiper'

const params = {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 24,
  grabCursor: true,
  navigation: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
}

const ProductSliderTwo = ({ products }) => {
  const { cartItems } = useSelector((state) => state.cart)
  const { wishlistItems } = useSelector((state) => state.wishlist)

  return (
    <Fragment>
      <SectionTitleThree
        title={SIMILAR_PRODUCTS_LABEL}
        subtitle="Recommendations pour vous"
      />
      <Container>
        <Row>
          <Col lg={12}>
            <div className="product-slider-container">
              {!!products.length && (
                <Swiper options={params} navClass="prod-swiper-two">
                  {products.map((product) => {
                    const discountedPrice = getDiscountPrice(
                      product.price,
                      product.discount,
                    )?.toFixed(2)
                    const productPrice = product.price.toFixed(2)
                    const cartItem = cartItems.find(
                      (cartItem) => cartItem.id === product.id,
                    )
                    const wishlistItem = wishlistItems.find(
                      (wishlistItem) => wishlistItem.id === product.id,
                    )

                    return (
                      <SwiperSlide key={product.id}>
                        <ProductGridThree
                          product={product}
                          discountedPrice={discountedPrice}
                          productPrice={productPrice}
                          cartItem={cartItem}
                          wishlistItem={wishlistItem}
                        />
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default ProductSliderTwo
