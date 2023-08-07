import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
    IoIosArrowDown,
    IoIosCart,
    IoIosHeartEmpty,
    IoIosMenu,
    IoIosSearch,
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoYoutube,
    IoMdPerson
} from "react-icons/io";

import { CartContext } from "../../contexts/cartContext";
import { CurrencyContext, CurrencyKey, CurrencyLabel } from "../../contexts/currencyContext";
import { LanguageContext, LanguageKey, LanguageLabel } from "../../contexts/languageContext";
import AboutOverlay from "./elements/AboutOverlay";
import CartOverlay from "./elements/CartOverlay";
import MobileMenu from "./elements/MobileMenu";
import Navigation from "./elements/Navigation";
import SearchOverlay from "./elements/SearchOverlay";
import WishlistOverlay from "./elements/WishlistOverlay";

const BasicHeader = ({ aboutOverlay, wishlistItems }) => {
    const { currentLanguage, changeLanguage, languageData } = useContext(LanguageContext);
    const { currentCurrency, changeCurrency } = useContext(CurrencyContext);
    const { cartItems } = useContext(CartContext);

    const { header } = languageData;

    const [scroll, setScroll] = useState(0);
    const [headerTop, setHeaderTop] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [offCanvasAboutActive, setOffCanvasAboutActive] = useState(false);
    const [offCanvasSearchActive, setOffCanvasSearchActive] = useState(false);
    const [offCanvasCartActive, setOffCanvasCartActive] = useState(false);
    const [offCanvasWishlistActive, setOffCanvasWishlistActive] = useState(false);
    const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] = useState(
        false
    );

    useEffect(() => {
        const header = document.querySelector("header");
        setHeaderTop(header.offsetTop);
        setHeaderHeight(header.offsetHeight);
        window.addEventListener("scroll", handleScroll);
        scroll > headerTop
            ? (document.body.style.paddingTop = `${headerHeight}px`)
            : (document.body.style.paddingTop = 0);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    return (
        <React.Fragment>
            <header
                className={`topbar-shadow ${scroll > headerTop ? "is-sticky" : ""}`}
            >
                <div className="header-top-area border-bottom--grey space-pt--10 space-pb--10 d-none d-lg-block">
                    <Container className="wide">
                        <div className="header-top">
                            <div className="header-top__left">
                                <div className="language-change change-dropdown">
                                    <span>{LanguageLabel[currentLanguage]}</span> <IoIosArrowDown />
                                    <ul>
                                        <li>
                                            <button
                                                onClick={() => changeLanguage(LanguageKey.TUNISIAN)}>{LanguageLabel.TUNISIAN}
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => changeLanguage(LanguageKey.FRENCH)}>{LanguageLabel.FRENCH}
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => changeLanguage(LanguageKey.ENGLISH)}>{LanguageLabel.ENGLISH}
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <span className="header-separator">|</span>
                                <div className="currency-change change-dropdown">
                                    <span>{currentCurrency}</span> <IoIosArrowDown />
                                    <ul>
                                        <li>
                                            <button onClick={() => changeCurrency(CurrencyKey.TND)}>{CurrencyLabel.TND}</button>
                                        </li>
                                        <li>
                                            <button onClick={() => changeCurrency(CurrencyKey.EUR)}>{CurrencyLabel.EUR}</button>
                                        </li>
                                    </ul>
                                </div>
                                <span className="header-separator">|</span>
                                <div className="order-online-text">
                                    {header.topHeader?.ORDER_ONLINE || 'Order Online'}
                                    <span className="number">(+216) 12 345678</span>
                                </div>
                            </div>
                            <div className="header-top__right">
                                <div className="signup-link">
                                    <Link
                                        href="/account/login"
                                        as={process.env.PUBLIC_URL + "/account/login"}
                                    >
                                        <a>{header.topHeader?.REGISTER_LOGIN || 'Signup / Login'}</a>
                                    </Link>
                                </div>
                                <span className="header-separator">|</span>
                                <div className="top-social-icons">
                                    <ul>
                                        <li>
                                            <a href="https://www.twitter.com" target="_blank">
                                                <IoLogoTwitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com" target="_blank">
                                                <IoLogoFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com" target="_blank">
                                                <IoLogoInstagram />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com" target="_blank">
                                                <IoLogoYoutube />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="header-bottom-area">
                    <Container className="wide">
                        <div
                            className="header-content d-flex align-items-center justify-content-between position-relative space-py-mobile-only--30">
                            {/* logo */}
                            <div className="header-content__logo space-pr--15">
                                <Link href="/" as={process.env.PUBLIC_URL + "/"}>
                                    <a>
                                        <img
                                            src={process.env.PUBLIC_URL + "/assets/images/azoolo-logo.png"}
                                            className="img-fluid"
                                            alt="azoolo_logo"
                                        />
                                    </a>
                                </Link>
                            </div>

                            {/* navigation */}
                            <Navigation />

                            {/* icons */}
                            <div className="header-content__icons space-pl--15">
                                <ul className="d-none d-lg-block">
                                    <li>
                                        <button
                                            onClick={() => {
                                                setOffCanvasSearchActive(true);
                                                document
                                                    .querySelector("body")
                                                    .classList.add("overflow-hidden");
                                            }}
                                        >
                                            <IoIosSearch />
                                        </button>
                                    </li>
                                    <li>
                                        <Link
                                            href="/account/login"
                                            as={process.env.PUBLIC_URL + "/account/login"}
                                        >
                                            <a>
                                                <IoMdPerson />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                setOffCanvasWishlistActive(true);
                                                document
                                                    .querySelector("body")
                                                    .classList.add("overflow-hidden");
                                            }}
                                        >
                                            <IoIosHeartEmpty />
                                            {wishlistItems?.length >= 1 ? (
                                                <span className="count">
                                                    {wishlistItems.length ? wishlistItems.length : ""}
                                                </span>
                                            ) : (
                                                ""
                                            )}
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                setOffCanvasCartActive(true);
                                                document
                                                    .querySelector("body")
                                                    .classList.add("overflow-hidden");
                                            }}
                                        >
                                            <IoIosCart />
                                            {cartItems?.length >= 1 ? (
                                                <span className="count">
                                                    {cartItems.length ? cartItems.length : ""}
                                                </span>
                                            ) : (
                                                ""
                                            )}
                                        </button>
                                    </li>
                                </ul>

                                <ul className="d-block d-lg-none">
                                    <li>
                                        <Link
                                            href="/wishlist"
                                            as={process.env.PUBLIC_URL + "/wishlist"}
                                        >
                                            <a>
                                                <IoIosHeartEmpty />
                                                {wishlistItems?.length >= 1 ? (
                                                    <span className="count">
                                                        {wishlistItems.length ? wishlistItems.length : ""}
                                                    </span>
                                                ) : (
                                                    ""
                                                )}
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/cart"
                                            as={process.env.PUBLIC_URL + "/cart"}
                                        >
                                            <a>
                                                <IoIosCart />
                                                {cartItems?.length >= 1 ? (
                                                    <span className="count">
                                                        {cartItems.length ? cartItems.length : ""}
                                                    </span>
                                                ) : (
                                                    ""
                                                )}
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <button onClick={() => setOffCanvasMobileMenuActive(true)}>
                                            <IoIosMenu />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>

            {/* about overlay */}
            {aboutOverlay === false ? (
                ""
            ) : (
                <AboutOverlay
                    activeStatus={offCanvasAboutActive}
                    getActiveStatus={setOffCanvasAboutActive}
                />
            )}
            {/* search overlay */}
            <SearchOverlay
                activeStatus={offCanvasSearchActive}
                getActiveStatus={setOffCanvasSearchActive}
            />

            {/* cart overlay */}
            <CartOverlay
                activeStatus={offCanvasCartActive}
                getActiveStatus={setOffCanvasCartActive}
            />

            {/* wishlist overlay */}
            <WishlistOverlay
                activeStatus={offCanvasWishlistActive}
                getActiveStatus={setOffCanvasWishlistActive}
            />
            {/* Mobile Menu */}
            <MobileMenu
                activeStatus={offCanvasMobileMenuActive}
                getActiveStatus={setOffCanvasMobileMenuActive}
            />
        </React.Fragment>
    );
};

export default BasicHeader;
