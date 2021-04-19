import {Row} from "react-bootstrap";
import ProductGridTwoWrapper from "../ProductThumb/ProductGridTwoWrapper";

const ShopProductsNoSpace = ({products, layout}) => {
    return (
        <div className="shop-products">
            <Row className={`no-gutters ${layout}`}>
                <ProductGridTwoWrapper products={products}/>
            </Row>
        </div>
    );
};

export default ShopProductsNoSpace;
