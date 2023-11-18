import { Fragment, useState } from 'react'
import { IoIosHeart, IoIosHeartEmpty, IoMdExpand } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { Tooltip } from 'react-tippy'
import { EffectFade, Thumbs } from 'swiper'
import Lightbox from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Swiper, { SwiperSlide } from '../../components/swiper'
import {
  addToWishlist,
  deleteFromWishlist,
} from '../../store/slices/wishlist-slice'

const ImageGalleryBottomThumb = ({ product, wishlistItem }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [index, setIndex] = useState(-1)
  const dispatch = useDispatch()

  const slides = product?.image.map((img, i) => ({
    src: process.env.PUBLIC_URL + img,
    key: i,
  }))

  // swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
    pagination: true,
  }

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    loop: true,
    freeMode: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    navigation: true,
  }

  return (
    <Fragment>
      <div className="product-large-image-wrapper space-mb--30">
        {/* floating badges */}
        <div className="product-large-image-wrapper__floating-badges">
          {product.discount && product.discount > 0 ? (
            <span className="onsale">-{product.discount}%</span>
          ) : (
            ''
          )}
          {product.new ? <span className="hot">Nvté</span> : ''}
          {product.stock === 0 ? <span className="out-of-stock">out</span> : ''}
        </div>

        {/* wishlist button */}
        <div className="product-details-button-wrapper">
          <Tooltip
            title={
              !!wishlistItem ? 'Déjà dans la Wishlist' : 'Ajouter à la Wishlist'
            }
            position="left"
            trigger="mouseenter"
            animation="shift"
            arrow={true}
            duration={200}
          >
            <button
              onClick={
                !!wishlistItem
                  ? () => dispatch(deleteFromWishlist(product.id))
                  : () => dispatch(addToWishlist(product))
              }
            >
              {!!wishlistItem ? <IoIosHeart /> : <IoIosHeartEmpty />}
            </button>
          </Tooltip>
        </div>
        {!!product.image.length && (
          <Swiper options={gallerySwiperParams}>
            {product.image.map((image, i) => (
              <SwiperSlide key={i}>
                <button className="enlarge-icon" onClick={() => setIndex(i)}>
                  <Tooltip
                    title="Agrandir"
                    position="left"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <IoMdExpand />
                  </Tooltip>
                </button>
                <div className="single-image">
                  <img
                    src={process.env.PUBLIC_URL + image}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
          plugins={[Thumbnails, Zoom, Fullscreen]}
        />
      </div>
      <div className="product-small-image-wrapper">
        {!!product.image.length && (
          <Swiper options={thumbnailSwiperParams}>
            {product.image.map((image, i) => (
              <SwiperSlide key={i}>
                <div className="single-image">
                  <img
                    src={process.env.PUBLIC_URL + image}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </Fragment>
  )
}

export default ImageGalleryBottomThumb
