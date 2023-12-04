import { useSelector } from 'react-redux';

import { Fragment, useEffect } from 'react';
import { CategoryGrid } from '../components/Category';
import { ImageCta } from '../components/Cta';
import { HeroSliderOne } from '../components/HeroSlider';
import BestSellingContent from '../components/HomeContent/AccessoriesContent';
import { ProductTab } from '../components/ProductTab';
import heroSliderData from '../data/hero-sliders/hero-slider-one.json';
import imageCtaData from '../data/image-cta/image-cta-one.json';
import { getProducts } from '../lib/product';

export default function Home(props) {
  const { data } = props;

  const { products } = useSelector((state) => state.product);
  const newProducts = getProducts(products, 'decor', 'new', 9);
  const popularProducts = getProducts(products, 'decor', 'popular', 9);
  const saleProducts = getProducts(products, 'decor', 'sale', 9);

  useEffect(() => {});

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
      {/* <CategoryGridFour /> */}
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
      <BestSellingContent />

      {/* image cta */}
      <ImageCta
        image={imageCtaData.image}
        tags={imageCtaData.tags}
        title={imageCtaData.title}
        url={imageCtaData.url}
      />
    </Fragment>
  );
}

/* export async function getServerSideProps() {
  const url = `${process.env.PUBLIC_URL}/api/product?slug=prd_1`;
  console.log({ url });
  const res = await fetch(url);
  console.log({ res: await res.json() });
  // console.log({ env: process.env });

  return {
    props: {
      data: {
        heroSliderData,
        newProducts: [],
        popularProducts: [],
        saleProducts: [],
        besrSellingProducts: [],
      },
    },
  };
} */
