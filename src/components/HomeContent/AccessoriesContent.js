import { Col, Container, Row } from 'react-bootstrap';
import { IoIosAdd } from 'react-icons/io';
import { SectionTitleThree } from '../../components/SectionTitle';
import Anchor from '../anchor';

const BestSellingContent = () => {
  return (
    <div className="content-wrapper space-mb--r100 space-mt--r100">
      <Container className="wide">
        <Row>
          <Col lg={1} xl={3} className="d-none d-xl-block">
            <p className="rotate-title rotate-title--left">AZOOLO</p>
          </Col>
          <Col lg={10} xl={6} className="mx-auto">
            <SectionTitleThree
              title="Artciles populaires"
              subtitle="Les articles en tandance..."
            />
          </Col>
          <Col lg={1} xl={3} className="d-none d-xl-block">
            <p className="rotate-title rotate-title--right">FASHION</p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center">
          <Col
            lg={5}
            md={10}
            className="offset-lg-1 offset-md-2 space-mb--r100"
          >
            <div className="accessories-single-category">
              <Anchor path="/shop/listing" className="banner-hover" />
              <span className="number">01/</span>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/images/category/banner-bestseller-1.jpg'
                }
                className="img-fluid"
                alt=""
              />
              <div className="accessories-single-category__content">
                <p className="name">Minimal Leather Watch</p>
                <p className="price">
                  <span className="main-price discounted">100.00 TND</span>
                  <span className="discounted-price">80.00 TND</span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={8} className="offset-lg-1 offset-md-2 space-mb--r100">
            <div className="accessories-single-category">
              <Anchor path="/shop/listing" className="banner-hover" />
              <span className="number">02/</span>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/images/category/banner-bestseller-2.jpg'
                }
                className="img-fluid"
                alt=""
              />
              <div className="accessories-single-category__content">
                <p className="name">Hoho Bag</p>
                <p className="price">
                  <span className="main-price">100.00 TND</span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={8} className="offset-lg-1 offset-md-3 space-mb--r100">
            <div className="accessories-single-category">
              <Anchor path="/shop/listing" className="banner-hover" />
              <span className="number">03/</span>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/images/category/banner-bestseller-3.jpg'
                }
                className="img-fluid"
                alt=""
              />
              <div className="accessories-single-category__content">
                <p className="name">Dark denim shorts</p>
                <p className="price">
                  <span className="main-price discounted">80.00 TND</span>
                  <span className="discounted-price">60.00 TND</span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={5} md={11} className="offset-lg-1 space-mb--r100">
            <div className="accessories-single-category">
              <Anchor path="/shop/listing" className="banner-hover" />
              <span className="number">04/</span>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/images/category/banner-bestseller-4.jpg'
                }
                className="img-fluid"
                alt=""
              />
              <div className="accessories-single-category__content">
                <p className="name">Pink sneakers</p>
                <p className="price">
                  <span className="main-price discounted">100.00 TND</span>
                  <span className="discounted-price">80.00 TND</span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={9} md={10} className="space-mb--r100">
            <div className="accessories-single-category">
              <Anchor path="/shop/listing" className="banner-hover" />
              <span className="number">05/</span>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/images/category/banner-bestseller-5.jpg'
                }
                className="img-fluid"
                alt=""
              />
              <div className="accessories-single-category__content">
                <p className="name">The Linen Chambray Shirt</p>
                <p className="price">
                  <span className="main-price discounted">100.00 TND</span>
                  <span className="discounted-price">90.00 TND</span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={8} className="offset-lg-1 offset-md-2 space-mb--r100">
            <div className="accessories-single-category">
              <Anchor path="/shop/listing" className="banner-hover" />
              <span className="number">06/</span>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/images/category/banner-bestseller-6.jpg'
                }
                className="img-fluid"
                alt=""
              />
              <div className="accessories-single-category__content">
                <p className="name">Pastel Bag</p>
                <p className="price">
                  <span className="main-price discounted">100.00 TND</span>
                  <span className="discounted-price">90.00 TND</span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={8} className="offset-lg-2 offset-md-1 space-mb--r100">
            <div className="accessories-single-category">
              <Anchor path="/shop/listing" className="banner-hover" />
              <span className="number">07/</span>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/images/category/banner-bestseller-7.jpg'
                }
                className="img-fluid"
                alt=""
              />
              <div className="accessories-single-category__content">
                <p className="name">Frame Sunglass</p>
                <p className="price">
                  <span className="main-price discounted">90.00 TND</span>
                  <span className="discounted-price">80.00 TND</span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={9} md={8} className="offset-lg-3 offset-md-3 space-mb--r100">
            <div className="accessories-single-category">
              <Anchor path="/shop/listing" className="banner-hover" />
              <span className="number">08/</span>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/images/category/banner-bestseller-8.jpg'
                }
                className="img-fluid"
                alt=""
              />
              <div className="accessories-single-category__content">
                <p className="name">High-waist trousers</p>
                <p className="price">
                  <span className="main-price discounted">90.00 TND</span>
                  <span className="discounted-price">80.00 TND</span>
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={5}
            md={10}
            className="offset-lg-1 offset-md-2 space-mb--r100"
          >
            <div className="accessories-single-category">
              <Anchor path="/shop/listing" className="banner-hover" />
              <span className="number">09/</span>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/images/category/banner-bestseller-9.jpg'
                }
                className="img-fluid"
                alt=""
              />
              <div className="accessories-single-category__content">
                <p className="name">The Cotton Two-Pocket Shirt</p>
                <p className="price">
                  <span className="main-price discounted">90.00 TND</span>
                  <span className="discounted-price">80.00 TND</span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={8} className="offset-lg-1 offset-md-2 space-mb--r100">
            <div className="accessories-single-category">
              <Anchor path="/shop/listing" className="banner-hover" />
              <span className="number">10/</span>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/images/category/banner-bestseller-10.jpg'
                }
                className="img-fluid"
                alt=""
              />
              <div className="accessories-single-category__content">
                <p className="name">TID Canvas 001</p>
                <p className="price">
                  <span className="main-price">100.00 TND</span>
                </p>
              </div>
            </div>
          </Col>
          <Col lg={12} className="text-center">
            <Anchor
              path="/shop/listing"
              className="lezada-button lezada-button--medium lezada-button--icon--left"
            >
              <IoIosAdd />
              Plus d'articles
            </Anchor>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BestSellingContent;
