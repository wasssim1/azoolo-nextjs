import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import Anchor from '../../components/anchor';

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Azoolo | Register</title>
      </Head>
      {/* TODO: Add layout */}
      <div className="login-area space-mt--r130 space-mb--r130">
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <div className="lezada-form login-form--register">
                <form>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">S'inscrire</h2>
                        <p>Je suis nouveau ici!</p>
                      </div>
                    </Col>
                    <Col lg={6} className="space-mb--30">
                      <label htmlFor="regEmail">
                        Prénom <span className="required">*</span>
                      </label>
                      <input type="text" id="regEmail" required />
                    </Col>
                    <Col lg={6} className="space-mb--30">
                      <label htmlFor="regEmail">
                        Nom <span className="required">*</span>
                      </label>
                      <input type="text" id="regEmail" required />
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <label htmlFor="regEmail">
                        Adresse eMail <span className="required">*</span>
                      </label>
                      <input type="text" id="regEmail" required />
                    </Col>
                    <Col lg={12} className="space-mb--50">
                      <label htmlFor="regPassword">
                        Mot de passe <span className="required">*</span>
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
                      <button
                        className="lezada-button lezada-button--medium"
                        type="submit"
                      >
                        S'inscrire
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
          <br />
          <div>
            Déjà inscrit?{' '}
            <Anchor path={'/authenticate/login'}>S'identifier.</Anchor>{' '}
          </div>
        </Container>
      </div>
    </>
  );
};

export default RegisterPage;
