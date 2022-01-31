import { Container, Row, Col } from "react-bootstrap";
import { MdViewComfy, MdApps, MdList } from "react-icons/md";
import { IoMdFunnel } from "react-icons/io";
import { setActiveLayout } from "../../lib/product";

const ShopHeader = ({
  shopTopFilterStatus,
  setShopTopFilterStatus,
  getFilterSortParams,
  sortedProductCount,
  productCount,
  getLayout,
  layoutClass,
  listMode
}) => {
  return (
    <div className="shop-header">
      <Container className={layoutClass ? layoutClass : ""}>
        <Row className="align-items-center">
          <Col md={5} className="text-center text-md-left">
            Il y a {sortedProductCount} du {productCount} en total
          </Col>

          <Col md={7}>
            <div className="shop-header__filter-icons justify-content-center justify-content-md-end">
              <div className="single-icon filter-dropdown">
                <select
                  onChange={(e) =>
                    getFilterSortParams("filterSort", e.target.value)
                  }
                >
                  <option value="default">Par Défaut</option>
                  <option value="priceHighToLow">Prix décroissant</option>
                  <option value="priceLowToHigh">Prix croissant</option>
                </select>
              </div>

              <div className="single-icon grid-icons d-none d-lg-block">
                <button
                    onClick={(e) => {
                      getLayout("grid four-column");
                      setActiveLayout(e);
                    }}
                >
                  <MdViewComfy />
                </button>

                <button
                    className="active"
                    onClick={(e) => {
                    getLayout("grid three-column");
                    setActiveLayout(e);
                  }}
                >
                  <MdApps />
                </button>

                {listMode === false ? (
                  ""
                ) : (
                  <button
                    onClick={(e) => {
                      getLayout("list");
                      setActiveLayout(e);
                    }}
                  >
                    <MdList />
                  </button>
                )}
              </div>

              <div className="single-icon advance-filter-icon">
                <button
                  onClick={() => setShopTopFilterStatus(!shopTopFilterStatus)}
                  className={shopTopFilterStatus ? "active" : ""}
                >
                  <IoMdFunnel /> Filtrer
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopHeader;
