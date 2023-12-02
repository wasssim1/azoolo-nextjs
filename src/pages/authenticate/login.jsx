import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import Anchor from '../../components/anchor';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Azoolo | S'identifier</title>
      </Head>
      {/* TODO: Add layout */}
      <div className="login-area space-mt--r130 space-mb--r130">
        <Container>
          <Row>
            <Col className="space-mb-mobile-only--50">
              <div className="lezada-form login-form">
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">S'identifier</h2>
                        <p>Super de vous revoir !</p>
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
                        S'identifier
                      </button>
                    </Col>
                    <Col>
                      {/* <input type="checkbox" />{' '}
                      <span className="remember-text">Remember me</span> */}
                      <a href="#" className="reset-pass-link">
                        Mot de passe oublié?
                      </a>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
          <br />
          <div>
            Je suis nouveau ici, <Anchor path={'/authenticate/register'}>S'inscrire.</Anchor>{' '}
          </div>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
