import { Col, Container, Row } from 'react-bootstrap'
import {
  getIndividualColors,
  getProductsIndividualSizes,
  setActiveSort,
} from '../../lib/product'

const ShopFilter = ({ products, getSortParams }) => {
  const colors = getIndividualColors(products)
  const sizes = getProductsIndividualSizes(products)

  return (
    <div className="shop-advance-filter">
      <Container className="space-pt--50 space-pb--50">
        <Row>
          <Col lg={3} md={6} className="space-mb-mobile-only--30">
            <div className="single-filter-widget">
              <h2 className="single-filter-widget__title">Couleur</h2>
              {colors.length > 0 ? (
                <ul className="single-filter-widget__list single-filter-widget__list--color">
                  {colors.map((color, i) => {
                    return (
                      <li key={i}>
                        <button
                          onClick={(e) => {
                            getSortParams('color', color.colorName)
                            setActiveSort(e)
                          }}
                          style={{ backgroundColor: color.colorCode }}
                        ></button>
                      </li>
                    )
                  })}
                  <li>
                    <button
                      onClick={(e) => {
                        getSortParams('color', '')
                        setActiveSort(e)
                      }}
                    >
                      x
                    </button>
                  </li>
                </ul>
              ) : (
                'Aucune couleur trouvée'
              )}
            </div>
          </Col>
          <Col lg={3} md={6} className="space-mb-mobile-only--30">
            <div className="single-filter-widget">
              <h2 className="single-filter-widget__title">Taille</h2>
              {sizes.length > 0 ? (
                <ul className="single-filter-widget__list single-filter-widget__list--size">
                  <li>
                    <button
                      onClick={(e) => {
                        getSortParams('size', '')
                        setActiveSort(e)
                      }}
                    >
                      Toutes les tailles
                    </button>
                  </li>
                  {sizes.map((size, i) => {
                    return (
                      <li key={i}>
                        <button
                          onClick={(e) => {
                            getSortParams('size', size)
                            setActiveSort(e)
                          }}
                        >
                          {size}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              ) : (
                'Aucune taille trouvée'
              )}
            </div>
          </Col>
          <Col lg={3} md={6} className="space-mb-mobile-only--30">
            <div className="single-filter-widget">
              <h2 className="single-filter-widget__title">Prix</h2>
              <input type="range" min={5} max={300} step={0.5}></input>
            </div>
          </Col>
          <Col lg={3} md={6} className="space-mb-mobile-only--30">
            <div className="single-filter-widget">
              <h2 className="single-filter-widget__title">Type</h2>
              <ul className="single-filter-widget__list">
                <li>
                  <button>Type 1</button>
                </li>
                <li>
                  <button>Type 2</button>
                </li>
                <li>
                  <button>Type 3</button>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ShopFilter
