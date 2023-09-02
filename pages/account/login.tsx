import Head from "next/head";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

import BasicLayout from "../../components/layout/BasicLayout";

const LoginPage = () => {
  return (
    <>
     <Head>
        <title>Azoolo | Login</title>
      </Head>
    <BasicLayout>
      <div className="login-area space-mt--r130 space-mb--r130">
        <Container>
          <Row>
            <Col className="space-mb-mobile-only--50">
              <div className="lezada-form login-form">
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">Login</h2>
                        <p>Great to have you back!</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--60">
                      <input
                        type="text"
                        placeholder="Username or email address"
                        required
                      />
                    </Col>
                    <Col lg={12} className="space-mb--60">
                      <input type="password" placeholder="Password" required />
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <button className="lezada-button lezada-button--medium">
                        login
                      </button>
                    </Col>
                    <Col>
                      <input type="checkbox" />{" "}
                      <span className="remember-text">Remember me</span>
                      <a href="#" className="reset-pass-link">
                        Lost your password?
                      </a>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
          <div>Not a member? <Link href={'register'}>Join us.</Link> </div>
        </Container>
      </div>
    </BasicLayout>
    </>
  );
};

export default LoginPage;
