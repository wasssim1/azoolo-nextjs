import clsx from 'clsx'
import { Col, Container, Row } from 'react-bootstrap'
import { IoMdFunnel } from 'react-icons/io'

const ShopHeader = ({
  shopTopFilterStatus,
  setShopTopFilterStatus,
  getFilterSortParams,
  productCount,
  layoutClass,
  listMode,
}) => {
  return (
    <div className="shop-header">
      <Container className={clsx(layoutClass)}>
        <Row className="align-items-center">
          <Col md={5} className="text-center text-md-start">
            {/* Showing {sortedProductCount} of {productCount} result */}
            {productCount} articles
          </Col>

          <Col md={7}>
            <div className="shop-header__filter-icons justify-content-center justify-content-md-end">
              <div className="single-icon filter-dropdown">
                <select
                  onChange={(e) =>
                    getFilterSortParams('filterSort', e.target.value)
                  }
                >
                  <option value="default">Trier par défaut</option>
                  <option value="priceHighToLow">Prix décroissant</option>
                  <option value="priceLowToHigh">Prix croissant</option>
                </select>
              </div>

              <div className="single-icon advance-filter-icon">
                <button
                  onClick={() => setShopTopFilterStatus(!shopTopFilterStatus)}
                  className={shopTopFilterStatus ? 'active' : ''}
                >
                  <IoMdFunnel /> Filtrer
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ShopHeader
