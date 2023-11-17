import { useSelector } from 'react-redux'

import { Fragment } from 'react'
import { CategoryGrid, CategoryGridFour } from '../components/Category'
import { ImageCta } from '../components/Cta'
import { HeroSliderOne } from '../components/HeroSlider'
import AccessoriesContent from '../components/HomeContent/AccessoriesContent'
import { ProductTab } from '../components/ProductTab'
import heroSliderData from '../data/hero-sliders/hero-slider-one.json'
import imageCtaData from '../data/image-cta/image-cta-one.json'
import { getProducts } from '../lib/product'

const Home = () => {
  const { products } = useSelector((state) => state.product)
  const newProducts = getProducts(products, 'decor', 'new', 9)
  const popularProducts = getProducts(products, 'decor', 'popular', 9)
  const saleProducts = getProducts(products, 'decor', 'sale', 9)

  return (
    <Fragment>
      {/* hero slider */}
      <HeroSliderOne sliderData={heroSliderData} />

      {/* TODO: Decide */}
      <CategoryGrid />
      <br />
      {/* <hr />
      2<CategoryGridTwo />
      <hr />
      3<CategoryGridThree />
      <hr /> */}
      <CategoryGridFour />
      <br />
      {/* <hr />
      5<CategoryGridFive />
      <hr />
      6<CategoryGridSix />
      <hr /> */}

      {/* product tab */}
      <ProductTab
        newProducts={newProducts}
        popularProducts={popularProducts}
        saleProducts={saleProducts}
      />

      {/* Best Selling Producta */}
      <AccessoriesContent />

      {/* image cta */}
      <ImageCta
        image={imageCtaData.image}
        tags={imageCtaData.tags}
        title={imageCtaData.title}
        url={imageCtaData.url}
      />
    </Fragment>
  )
}

export default Home
