import {useEffect, useState} from "react";
import Link from "next/link";
import {Col, Container, Row} from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import {SlideDown} from "react-slidedown";
import BasicLayout from "../../../components/layout/BasicLayout";
import {getSortedProducts} from "../../../lib/product";
import BreadcrumbOne from "../../../components/Breadcrumb/BreadcrumbOne";
import ShopHeader from "../../../components/Shop/ShopHeader";
import ShopFilter from "../../../components/Shop/ShopFilter";
import ShopSidebar from "../../../components/Shop/ShopSidebar";
import ShopProducts from "../../../components/Shop/ShopProducts";
import productsFake from "../../../data/products.json";

const SubCategoryPage = ({ products }) => {
    const [layout, setLayout] = useState("grid three-column");
    const [sortType, setSortType] = useState("");
    const [sortValue, setSortValue] = useState("");
    const [filterSortType, setFilterSortType] = useState("");
    const [filterSortValue, setFilterSortValue] = useState("");
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);

    const pageLimit = 20;

    const getLayout = (layout) => {
        setLayout(layout);
    };

    const getSortParams = (sortType, sortValue) => {
        setSortType(sortType);
        setSortValue(sortValue);
    };

    const getFilterSortParams = (sortType, sortValue) => {
        setFilterSortType(sortType);
        setFilterSortValue(sortValue);
    };

    useEffect(() => {
        let sortedProducts = getSortedProducts(products, sortType, sortValue);
        const filterSortedProducts = getSortedProducts(
            sortedProducts,
            filterSortType,
            filterSortValue
        );
        sortedProducts = filterSortedProducts;
        setSortedProducts(sortedProducts);
        setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
    }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

    return (
        <BasicLayout>
            {/* breadcrumb */}
            <BreadcrumbOne
                pageTitle="Test"
                backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
            >
                <ul className="breadcrumb__list">
                    <li>
                        <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                            <a>Home</a>
                        </Link>
                    </li>

                    <li>test</li>
                </ul>
            </BreadcrumbOne>
            <div className="shop-page-content">
                {/* shop page header */}
                <ShopHeader
                    getLayout={getLayout}
                    getFilterSortParams={getFilterSortParams}
                    productCount={products.length}
                    sortedProductCount={currentData.length}
                    shopTopFilterStatus={shopTopFilterStatus}
                    setShopTopFilterStatus={setShopTopFilterStatus}
                    layoutClass="wide"
                />

                {/* shop header filter */}
                <SlideDown closed={shopTopFilterStatus ? false : true}>
                    <ShopFilter products={products} getSortParams={getSortParams} />
                </SlideDown>

                {/* shop page body */}
                <div className="shop-page-content__body space-mt--r130 space-mb--r130">
                    <Container className="wide">
                        <Row>
                            <Col
                                lg={3}
                                className="order-2 order-lg-1 space-mt-mobile-only--50"
                            >
                                {/* shop sidebar */}
                                <ShopSidebar
                                    products={products}
                                    getSortParams={getSortParams}
                                />
                            </Col>

                            <Col lg={9} className="order-1 order-lg-2">
                                {/* shop products */}
                                <ShopProducts layout={layout} products={currentData} />

                                {/* shop product pagination */}
                                <div className="pro-pagination-style">
                                    <Paginator
                                        totalRecords={sortedProducts.length}
                                        pageLimit={pageLimit}
                                        pageNeighbours={2}
                                        setOffset={setOffset}
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                        pageContainerClass="mb-0 mt-0"
                                        pagePrevText="«"
                                        pageNextText="»"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </BasicLayout>
    );
};

export async function getServerSideProps({params: {subCateg}}) {
    // const res = await getData(`product/${id}`);

    const products = await productsFake;

    return {
        props: {
            products: products,
        },
    }
}

export default SubCategoryPage;
