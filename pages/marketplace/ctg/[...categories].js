import Link from "next/link";
import {useRouter} from "next/router";
import {Col, Container, Row} from "react-bootstrap";
import BasicLayout from "../../../components/layout/BasicLayout";
import BreadcrumbOne from "../../../components/Breadcrumb/BreadcrumbOne";
import {CATEGORIES_LIST, categoriesIndexer} from "../../../lib/categoriesIndexer";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import CategorySlider from "../../../components/categorygrid/CategorySlider";
import categoryData from "../../../data/categories/category-one.json";
import ProductGridWrapper from "../../../components/ProductThumb/ProductGridWrapper";
import React, {Fragment} from "react";
import productsFake from "../../../data/products.json";
import {SEE_MORE_LABEL} from "../../../config/productLabels";
import {MARKETPLACE_CATEGORY_URL} from "../../../config/staticNavigation";
// import {SectionTitle} from "../../components/SectionTitle";
// import {CategoryGrid, CategoryGridTwo, CategorySlider} from "../../components/Category";
// import categoryData from "../../data/categories/category-one.json";

const MarketplaceCat = ({products, subCategories}) => {
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
                        <Link href={`${MARKETPLACE_CATEGORY_URL}/${categories?.[0]}/${categories?.[1]}`}
                              as={`${process.env.PUBLIC_URL}${MARKETPLACE_CATEGORY_URL}/${categories?.[0]}/${categories?.[1]}`}>
                            <a>{categoriesIndexer(categories?.[1])}</a>
                        </Link>
                    </li>

                    {categories?.length > 2 && <li>{categoriesIndexer(categories[2])}</li>}
                </ul>
            </BreadcrumbOne>
            <div className="element-wrapper space-mt--r130 space-mb--r130">
                {/*/!* category grid *!/*/}

                {
                    categories && categories.length < 3 ?
                        <>
                            {
                                categories.length < 2 ?
                                    // category sliders
                                    <>
                                        {
                                            subCategories && subCategories.map(subCat => (
                                                <Fragment>
                                                    <SectionTitle title={subCat.value}
                                                                  subtitle="This is where to find your satisfactory products"/>
                                                    <CategorySlider
                                                        categoryData={categoryData}
                                                        spaceBottomClass="space-mb--r100"
                                                    />
                                                </Fragment>
                                            ))
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
                                                        + {SEE_MORE_LABEL} ...
                                                    </a>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </Container>
                            }
                        </>
                        :
                        null
                }

            </div>
        </BasicLayout>
    );
};

export async function getServerSideProps({params: {categories}}) {
    // const res = await getData(`product/${id}`);

    console.log(categories)

    if (categories.length === 2) {
        const products = await productsFake;
        console.log(products.length)

        return {
            props: {
                products: products,
            },
        }
    }

    if (categories.length === 1) {
        const subCategories = Object.values(CATEGORIES_LIST).filter(f => categories[0] === f.parent)
        console.log(subCategories)

        return {
            props: {
                subCategories: subCategories,
            },
        }
    }

    return {
        props: {
            products: [],
        },
    }
}

export default MarketplaceCat;
