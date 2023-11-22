import { Work_Sans } from '@next/font/google'
import Head from 'next/head'
import { Fragment, useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Preloader from '../components/Preloader'
import products from '../data/products.json'
import { wrapper } from '../store'
import { setProducts } from '../store/slices/product-slice'

import 'swiper/swiper-bundle.min.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'
import '../assets/scss/styles.scss'
import { LayoutFive } from '../components/Layout'

const workSans = Work_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  useEffect(() => {
    store.dispatch(setProducts(products))
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Azoolo | Marketplace</title>
        <link rel="icon" href={process.env.PUBLIC_URL + '/favicon.ico'} />
      </Head>
      <style jsx global>
        {`
          :root {
            --ff-body: ${workSans.style.fontFamily};
          }
        `}
      </style>
      <Provider store={store}>
        <PersistGate persistor={store.__persistor} loading={<Preloader />}>
          <LayoutFive>
            <Component {...props.pageProps} />
          </LayoutFive>
        </PersistGate>
      </Provider>
    </Fragment>
  )
}

export default MyApp
