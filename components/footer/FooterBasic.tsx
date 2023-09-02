import React, {useEffect, useState} from "react";
import Link from "next/link";
import {Col, Container, Row} from "react-bootstrap";
import {FaFacebookF, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import {IoIosArrowRoundUp} from "react-icons/io";
import {animateScroll} from "react-scroll";
import {Tooltip} from "react-tippy";

const FooterBasic = () => {
    const [scroll, setScroll] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        setTop(100);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    return (
        <footer className="space-pt--100 space-pb--100 border-top--grey text-center">
            <Container>
                <Row>
                    <Col lg={12}>
                        {/*=======  footer navigation  =======*/}
                        <nav className="footer-nav-container footer-nav-container--horizontal space-mb--50">
                            <ul>
                                <Link href="/about-us" as={process.env.PUBLIC_URL + "/about-us"}>
                                    <li>
                                        <a>ABOUT US</a>
                                    </li>
                                </Link>
                                <Link href="/store-location" as={process.env.PUBLIC_URL + "/location"}>
                                    <li>
                                        <a>STORE LOCATION</a>
                                    </li>
                                </Link>
                                <Link href="/contact" as={process.env.PUBLIC_URL + "/contact"}>
                                    <li>
                                        <a>CONTACT</a>
                                    </li>
                                </Link>
                                <Link href="/support" as={process.env.PUBLIC_URL + "/support"}>
                                    <li>
                                        <a>SUPPORT</a>
                                    </li>
                                </Link>
                                <Link href="/associate" as={process.env.PUBLIC_URL + "/associate"}>
                                    <li>
                                        <a>BECOME ASSOIATE</a>
                                    </li>
                                </Link>
                                <Link href="/faqs" as={process.env.PUBLIC_URL + "/faqs"}>
                                    <li>
                                        <a>FAQS</a>
                                    </li>
                                </Link>
                            </ul>
                        </nav>

                        {/*=======  social icons  =======*/}
                        <div className="footer-social-icons space-mb--50">
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
                                            <FaTwitter/>
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
                                            <FaFacebookF/>
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
                                            <FaInstagram/>
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
                                            <FaYoutube/>
                                        </a>
                                    </Tooltip>
                                </li>
                            </ul>
                        </div>

                        {/*=======  copyright text  =======*/}
                        <div className="footer-copyright-text">
                            &copy; {new Date().getFullYear() + " "}
                            <a href="https://www.azoolo.com" target="_blank">
                                Azoolo
                            </a>
                            . All Rights Reserved | <span>(+216) 12 345 678</span> |
                            contact@azoolo.com
                        </div>
                    </Col>
                </Row>
            </Container>
            <button
                className={`scroll-top ${scroll > top ? "show" : ""}`}
                onClick={() => scrollToTop()}
            >
                <IoIosArrowRoundUp/>
            </button>
        </footer>
    );
};

export default FooterBasic;
