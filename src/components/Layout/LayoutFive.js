import { Fragment } from 'react'
import { FooterTwo } from '../Footer'
import { HeaderFive } from '../Header'
import ScrollToTop from '../scroll-to-top'

const LayoutFive = ({ children }) => {
  return (
    <Fragment>
      <HeaderFive aboutOverlay={true} />
      {children}
      <FooterTwo />
      <ScrollToTop />
    </Fragment>
  )
}

export default LayoutFive
