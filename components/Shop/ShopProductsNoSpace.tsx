import {Row} from "react-bootstrap";
import ProductGridTwoWrapper from "../ProductThumb/ProductGridTwoWrapper";

const ShopProductsNoSpace = ({products, layout}) => {
    return (
        <div className="shop-products">
            <Row className={`no-gutters ${layout}`}>
                <ProductGridTwoWrapper products={products} bottomSpace={undefined} addToCart={undefined} addToWishlist={undefined} deleteFromWishlist={undefined} addToCompare={undefined} deleteFromCompare={undefined} cartItems={undefined} wishlistItems={undefined} compareItems={undefined}/>
            </Row>
        </div>
    );
};

export default ShopProductsNoSpace;
