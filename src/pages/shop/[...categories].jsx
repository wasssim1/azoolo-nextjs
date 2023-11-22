import { Fragment, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Paginator from "react-hooks-paginator";
import { SlideDown } from "react-slidedown";

import { BreadcrumbOne } from "../../components/Breadcrumb";
import ShopFilter from "../../components/Shop/ShopFilter";
import ShopHeader from "../../components/Shop/ShopHeader";
import ShopProducts from "../../components/Shop/ShopProducts";
import ShopSidebar from "../../components/Shop/ShopSidebar";
import Anchor from "../../components/anchor";
import productsFake from "../../data/products.json";
import { getSortedProducts } from "../../lib/product";

const SubCategoryPage = ({ categories, products }) => {
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
        <Fragment>
            {/* breadcrumb */}
            <BreadcrumbOne
                pageTitle={[...categories].slice(-1)}
                backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
            >
                <ul className="breadcrumb__list">
                    <li>
                        <Anchor path="/">
                            Acceuil
                        </Anchor>
                    </li>

                    {categories.map((categ, idx) => (
                        <li>
                            {/* <Anchor path={`/shop/${[...categories.slice()]}`}> */}
                            {categ}
                            {/* </Anchor> */}
                        </li>
                    ))}

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
                    listMode={undefined}
                />

                {/* shop header filter */}
                <SlideDown closed={shopTopFilterStatus ? false : true}>
                    <ShopFilter products={products} getSortParams={getSortParams} />
                </SlideDown>

                {/* shop page body */}
                <div className="shop-page-content__body space-mt--r130 space-mb--r130">
                    <Container>
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
        </Fragment>
    );
};

export async function getServerSideProps({ params: { categories } }) {
    // const res = await getData(`product/${id}`);

    console.log({ categories });

    /**
     * TODO:
     * validate categories on server
     * if not valid -> set a flag and render category not found warning message and redirect to 404
    return {
        notFound: true,
    };
     */

    const products = await productsFake;

    return {
        props: {
            categories,
            products,
        },
    }
}

export default SubCategoryPage;
