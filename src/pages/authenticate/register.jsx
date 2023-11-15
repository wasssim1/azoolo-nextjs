import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const RegisterPage = () => {
    return (
        <>
            <Head>
                <title>Azoolo | Register</title>
            </Head>
            {/* TODO: Add layout */}
            <Fragment>
                <div className="login-area space-mt--r130 space-mb--r130">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col>
                                <div className="lezada-form login-form--register">
                                    <form>
                                        <Row>
                                            <Col lg={12}>
                                                <div className="section-title--login text-center space-mb--50">
                                                    <h2 className="space-mb--20">Register</h2>
                                                    <p>If you don't have an account, register now!</p>
                                                </div>
                                            </Col>
                                            <Col lg={6} className="space-mb--30">
                                                <label htmlFor="regEmail">
                                                    First Name <span className="required">*</span>
                                                </label>
                                                <input type="text" id="regEmail" required />
                                            </Col>
                                            <Col lg={6} className="space-mb--30">
                                                <label htmlFor="regEmail">
                                                    Last Name <span className="required">*</span>
                                                </label>
                                                <input type="text" id="regEmail" required />
                                            </Col>
                                            <Col lg={12} className="space-mb--30">
                                                <label htmlFor="regEmail">
                                                    Email Address <span className="required">*</span>
                                                </label>
                                                <input type="text" id="regEmail" required />
                                            </Col>
                                            <Col lg={12} className="space-mb--50">
                                                <label htmlFor="regPassword">
                                                    Password <span className="required">*</span>
                                                </label>
                                                <input type="password" id="regPassword" required />
                                            </Col>
                                            <Col lg={12} className="space-mb--50">
                                                <label htmlFor="regPassword">
                                                    Repeat Password <span className="required">*</span>
                                                </label>
                                                <input type="password" id="regPassword" required />
                                            </Col>
                                            <Col lg={12} className="text-center">
                                                <button className="lezada-button lezada-button--medium" type="submit">
                                                    register
                                                </button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <div>Already a member? <Link href={'login'}>Sign In.</Link> </div>
                    </Container>
                </div>
            </Fragment>
        </>
    );
};

export default RegisterPage;
