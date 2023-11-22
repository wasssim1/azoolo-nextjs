import clsx from 'clsx'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoIosClose } from 'react-icons/io'
import { Tooltip } from 'react-tippy'

const AboutOverlay = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={clsx('about-overlay', activeStatus && 'active')}>
      <div
        className="about-overlay__close"
        onClick={() => {
          getActiveStatus(false)
          document.querySelector('body').classList.remove('overflow-hidden')
        }}
      />
      <div className="about-overlay__content">
        <button
          className="about-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false)
            document.querySelector('body').classList.remove('overflow-hidden')
          }}
        >
          <IoIosClose />
        </button>
        <div className="about-overlay__content-container d-flex flex-column justify-content-between h-100">
          <div className="about-overlay__widget-wrapper">
            <div className="about-widget">
              <h2 className="about-widget__title">Qui sommes-nous?</h2>
              <p>
                Chez Azoolo, nous mettons fortement l'accent sur la simplicité,
                la qualité et l'utilité des produits de mode plutôt que sur
                d'autres facteurs. Nos articles de mode ne sont jamais démodés.
                Ils ne sont pas éphémères comme les vêtements de mode normaux.
              </p>
            </div>
          </div>
          <div className="about-overlay__contact-widget">
            <p className="email">
              <a href="mailto:contact@azoolo.com">contact@azoolo.com</a>
            </p>
            <p className="phone">(+216) 123456</p>
            <div className="social-icons">
              <ul>
                <li>
                  <Tooltip
                    title="Twitter"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.twitter.com" target="_blank">
                      <FaTwitter />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    title="Facebook"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.facebook.com" target="_blank">
                      <FaFacebookF />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    title="Instagram"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.instagram.com" target="_blank">
                      <FaInstagram />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    title="Youtube"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.youtube.com" target="_blank">
                      <FaYoutube />
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutOverlay
