import clsx from 'clsx'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

import { SubscribeEmailTwo } from '../Newsletter'

const FooterTwo = ({ footerBgClass }) => {
  return (
    <footer
      className={clsx(
        'space-pt--100 space-pb--50',
        footerBgClass ? footerBgClass : 'bg-color--grey',
      )}
    >
      <Container className="wide">
        <Row>
          <Col className="footer-single-widget space-mb--50">
            {/* logo */}
            <div className="logo space-mb--35">
              <img
                src={
                  process.env.PUBLIC_URL + footerBgClass ===
                  'bg-color--blue-two'
                    ? '/assets/images/logo-alt.png'
                    : '/assets/images/logo.png'
                }
                className="img-fluid"
                alt=""
              />
            </div>

            {/*=======  copyright text  =======*/}
            <div className="footer-single-widget__copyright">
              &copy; {new Date().getFullYear() + ' '}
              <a href="https://www.hasthemes.com" target="_blank">
                Azoolo
              </a>
              <span>Tous droits réservés</span>
            </div>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title">À propos</h5>
            <nav className="footer-single-widget__nav">
              <ul>
                <li>
                  <a href="/">Qui sommes-nous?</a>
                </li>
                <li>
                  <a href="/">Service clients</a>
                </li>
                <li>
                  <a href="/">Contactez-Nous</a>
                </li>
                <li>
                  <a href="/">Devenir Azoolo-Partner</a>
                </li>
              </ul>
            </nav>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title">Liens utiles</h5>
            <nav className="footer-single-widget__nav">
              <ul>
                <li>
                  <a href="/">Politique de retour</a>
                </li>
                <li>
                  <a href="/">Suivre mon colis</a>
                </li>
                <li>
                  <a href="/">Guides des tailles</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
                <li>
                  <a href="/">FAQs</a>
                </li>
              </ul>
            </nav>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <h5 className="footer-single-widget__title">SUIVEZ-NOUS SUR</h5>
            <nav className="footer-single-widget__nav footer-single-widget__nav--social">
              <ul>
                <li>
                  <a href="https://www.twitter.com">
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com">
                    <FaFacebookF /> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com">
                    <FaYoutube /> Youtube
                  </a>
                </li>
              </ul>
            </nav>
          </Col>

          <Col className="footer-single-widget space-mb--50">
            <div className="footer-subscribe-widget">
              <h2 className="footer-subscribe-widget__title">S'abonner.</h2>
              <p className="footer-subscribe-widget__subtitle">
                Abonnez-vous à notre newsletter pour recevoir des nouvelles sur
                nos promos et offres.
              </p>
              {/* email subscription */}
              <SubscribeEmailTwo mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterTwo
