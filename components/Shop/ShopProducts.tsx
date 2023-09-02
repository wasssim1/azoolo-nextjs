import { Row } from "react-bootstrap";
import ProductGridListWrapper from "../ProductThumb/ProductGridListWrapper";
const ShopProducts = ({ products, layout }) => {
  return (
    <div className="shop-products">
      <Row className={layout}>
        <ProductGridListWrapper
          products={products}
          bottomSpace="space-mb--50" addToWishlist={undefined} deleteFromWishlist={undefined} addToCompare={undefined} deleteFromCompare={undefined} wishlistItems={undefined} compareItems={undefined} column={undefined}        />
      </Row>
    </div>
  );
};

export default ShopProducts;
