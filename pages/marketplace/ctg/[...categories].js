import Link from "next/link";
import {useRouter} from "next/router";
import {Col, Container, Row} from "react-bootstrap";
import BasicLayout from "../../components/layout/BasicLayout";
import BreadcrumbOne from "../../components/Breadcrumb/BreadcrumbOne";
import {categoriesIndexer} from "../../lib/categoriesIndexer";
import SectionTitle from "../../components/sectiontitle/SectionTitle";
import CategoryGridThree from "../../components/categorygrid/CategoryGridThree";
import CategorySlider from "../../components/categorygrid/CategorySlider";
import categoryData from "../../data/categories/category-one.json";
import ProductGridWrapper from "../../components/ProductThumb/ProductGridWrapper";
import React from "react";
import productsFake from "../../data/products.json";
// import {SectionTitle} from "../../components/SectionTitle";
// import {CategoryGrid, CategoryGridTwo, CategorySlider} from "../../components/Category";
// import categoryData from "../../data/categories/category-one.json";

const MarketplaceCat = ({products}) => {
    const router = useRouter();
    const {categories} = router.query;

    return (
        <BasicLayout>
            {/* breadcrumb */}
            <BreadcrumbOne
                pageTitle={categoriesIndexer(categories?.[0])}
                backgroundImage="/assets/images/backgrounds/breadcrumb-bg-2.jpg"
            >
                <ul className="breadcrumb__list">

                    <li>
                        <Link href={`/marketplace/${categories?.[0]}/${categories?.[1]}`}
                              as={`${process.env.PUBLIC_URL}/marketplace/${categories?.[0]}/${categories?.[1]}`}>
                            <a>{categoriesIndexer(categories?.[1])}</a>
                        </Link>
                    </li>

                    {categories?.length > 2 && <li>{categoriesIndexer(categories[2])}</li>}
                </ul>
            </BreadcrumbOne>
            <div className="element-wrapper space-mt--r130 space-mb--r130">
                <SectionTitle title="Style 01" subtitle="This is where to find your satisfactory products"/>
                {/*/!* category grid *!/*/}

                {/*/!* category slider *!/*/}
                {
                    categories && categories.length < 3 ?
                        <>
                            {
                                categories.length < 2 ?
                                    <CategorySlider
                                        categoryData={categoryData}
                                        spaceBottomClass="space-mb--r100"
                                    />
                                    :
                                    <CategoryGridThree spaceBottomClass="space-mb--r100"/>
                            }
                        </>
                        :
                        <Container>
                            <Row>
                                <ProductGridWrapper
                                    products={products}
                                    column={4}
                                    bottomSpace="space-mb--r50"
                                />
                                <Col lg={12} className="text-center">
                                    <Link
                                        href="/shop/left-sidebar"
                                        as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                                    >
                                        <a className="lezada-loadmore-button">
                                            {/*<IoIosAdd/>*/}
                                            + SEE MORE ...
                                        </a>
                                    </Link>
                                </Col>
                            </Row>
                        </Container>
                }

            </div>
        </BasicLayout>
    );
};

export async function getServerSideProps({params: {categ}}) {
    // const res = await getData(`product/${id}`);

    const products = await productsFake;
    console.log(products.length)

    return {
        props: {
            products: products,
        },
    }
}

export default MarketplaceCat;
