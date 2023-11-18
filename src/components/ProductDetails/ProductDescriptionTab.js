import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

const ProductDescriptionTab = ({ product }) => {
  return (
    <div className="product-description-tab space-pt--r100 space-mt--r100 border-top--grey">
      <Tab.Container defaultActiveKey="description">
        <Nav
          variant="pills"
          className="product-description-tab__navigation text-center justify-content-center space-mb--50"
        >
          <Nav.Item>
            <Nav.Link eventKey="description">Description</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="additionalInfo">Détail</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews">
              Avis {product.ratingCount ? `(${product.ratingCount})` : ''}
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="description">
            <div className="product-description-tab__details">
              {product.fullDescription}
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="additionalInfo">
            <div className="product-description-tab__additional-info">
              <table className="shop-attributes">
                <tbody>
                  <tr>
                    <th>Taille</th>
                    <td>
                      <p>L, M, S, XS</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Couleur</th>
                    <td>
                      <p>Noir, Bleu, Rouge</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="reviews">
            <div className="product-description-tab__review">
              <h2 className="review-title space-mb--20">
                {product.ratingCount ? product.ratingCount : ''} avis sur{' '}
                {product.name}
              </h2>
              {/*=======  single review  =======*/}
              {product.ratings?.map((review) => (
                <div className="single-review">
                  <div className="single-review__image">
                    <img
                      src={process.env.PUBLIC_URL + review.user?.avatar}
                      className="img-fluid"
                      alt="reviewer_avatar"
                    />
                  </div>
                  <div className="single-review__content">
                    {/*=======  rating  =======*/}
                    <div className="single-review__rating">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStarOutline />
                    </div>

                    {/*=======  username and date  =======*/}
                    <p className="username">
                      {review.user?.fullName}{' '}
                      <span className="date">/ {review.date}</span>
                    </p>

                    {/*=======  message  =======*/}
                    <p className="message">{review.reviewText}</p>
                    {/*=======  End of message  =======*/}
                  </div>
                </div>
              ))}

              <h2 className="review-title space-mb--20">Ajouter votre avis</h2>
              <p className="text-center">
                Votre adresse email ne sera pas publiée. Les champs requis sont
                indiqués *
              </p>
              {/*=======  review form  =======*/}
              <div className="lezada-form lezada-form--review">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-lg-6 space-mb--20">
                      <input type="text" placeholder="Name *" required />
                    </div>
                    <div className="col-lg-6 space-mb--20">
                      <input type="email" placeholder="Email *" required />
                    </div>
                    <div className="col-lg-12 space-mb--20">
                      <span className="rating-title space-mr--20">
                        Votre évaluation
                      </span>
                      <span className="product-rating">
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                        <IoIosStarOutline />
                      </span>
                    </div>
                    <div className="col-lg-12 space-mb--20">
                      <textarea
                        cols={30}
                        rows={10}
                        placeholder="Your review *"
                        defaultValue={''}
                      />
                    </div>
                    <div className="col-lg-12 text-center">
                      <button
                        type="submit"
                        className="lezada-button lezada-button--medium"
                      >
                        Publier
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/*=======  End of review form  =======*/}
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  )
}

export default ProductDescriptionTab
