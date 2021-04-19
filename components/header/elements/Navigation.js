import Link from "next/link";
import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io";
import {useContext} from "react";
import {LanguageContext} from "../../../contexts/languageContext";

const Navigation = () => {
    const {currentLanguage, languageData} = useContext(LanguageContext);
    const {header} = languageData;

    const {CATEGORY_1, CATEGORY_2, CATEGORY_3, CATEGORY_4, CATEGORY_5, CATEGORY_6} = header.navigation;

    return (
        <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
            <ul>


                <li>
                    <Link href={`/${CATEGORY_1.key}`}
                          as={process.env.PUBLIC_URL + `/${CATEGORY_1.key}`}>
                        <a>{CATEGORY_1.value}</a>
                    </Link>
                    <IoIosArrowDown/>
                    <ul className="sub-menu sub-menu--mega sub-menu--mega--column-5">
                        <li className="sub-menu--mega__title">
                            <Link href={`/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_1.key}`}
                                  as={process.env.PUBLIC_URL + `/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_1.key}`}
                            >
                                <a>{CATEGORY_1.SUBS.GROUP_1.value}</a>
                            </Link>
                            <ul className="sub-menu--mega__list">
                                {CATEGORY_1.SUBS.GROUP_1.elements.map((el) =>
                                    <li key={el.key}>
                                        <Link
                                            href={`/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_1.key}/`}
                                            as={process.env.PUBLIC_URL + `/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_1.key}/${el.key}`}
                                        >
                                            <a>{el.value}</a>
                                        </Link>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/home-preview/decor.jpg"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </li>
                                )}
                            </ul>
                        </li>
                        <li className="sub-menu--mega__title">
                            <Link href={`/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_2.key}`}
                                  as={process.env.PUBLIC_URL + `/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_2.key}`}
                            >
                                <a>{CATEGORY_1.SUBS.GROUP_2.value}</a>
                            </Link>
                            <ul className="sub-menu--mega__list">
                                {CATEGORY_1.SUBS.GROUP_2.elements.map((el) =>
                                    <li key={el.key}>
                                        <Link
                                            href={`/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_2.key}/`}
                                            as={process.env.PUBLIC_URL + `/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_2.key}/${el.key}`}
                                        >
                                            <a>{el.value}</a>
                                        </Link>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/home-preview/decor.jpg"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </li>
                                )}
                            </ul>
                        </li>
                        <li className="sub-menu--mega__title">
                            <Link href={`/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_3.key}`}
                                  as={process.env.PUBLIC_URL + `/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_3.key}`}
                            >
                                <a>{CATEGORY_1.SUBS.GROUP_3.value}</a>
                            </Link>
                            <ul className="sub-menu--mega__list">
                                {CATEGORY_1.SUBS.GROUP_3.elements.map((el) =>
                                    <li key={el.key}>
                                        <Link
                                            href={`/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_3.key}/`}
                                            as={process.env.PUBLIC_URL + `/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_3.key}/${el.key}`}
                                        >
                                            <a>{el.value}</a>
                                        </Link>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/home-preview/decor.jpg"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </li>
                                )}
                            </ul>
                        </li>
                        <li className="sub-menu--mega__title">
                            <Link href={`/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_4.key}`}
                                  as={process.env.PUBLIC_URL + `/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_4.key}`}
                            >
                                <a>{CATEGORY_1.SUBS.GROUP_4.value}</a>
                            </Link>
                            <ul className="sub-menu--mega__list">
                                {CATEGORY_1.SUBS.GROUP_4.elements.map((el) =>
                                    <li key={el.key}>
                                        <Link
                                            href={`/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_4.key}/`}
                                            as={process.env.PUBLIC_URL + `/${CATEGORY_1.key}/${CATEGORY_1.SUBS.GROUP_4.key}/${el.key}`}
                                        >
                                            <a>{el.value}</a>
                                        </Link>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/home-preview/decor.jpg"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </li>
                                )}
                            </ul>
                        </li>
                        <li>
                            <div className="sub-menu--mega__image">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/menu-image/menu-element.png"
                                    }
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </li>
                    </ul>
                </li>


                <li>
                    <Link
                        href={`/${header.navigation.CATEGORY_2.key}`}
                        as={process.env.PUBLIC_URL + `/${header.navigation.CATEGORY_2.key}`}
                    >
                        <a>{header.navigation.CATEGORY_2.value}</a>
                    </Link>
                    <IoIosArrowDown/>

                    <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
                        <li className="sub-menu--mega__title">
                            <Link href={`/${CATEGORY_2.key}/${CATEGORY_2.SUBS.GROUP_1.key}`}
                                  as={process.env.PUBLIC_URL + `/${CATEGORY_2.key}/${CATEGORY_2.SUBS.GROUP_1.key}`}
                            >
                                <a>{CATEGORY_2.SUBS.GROUP_1.value}</a>
                            </Link>
                            <ul className="sub-menu--mega__list">
                                {CATEGORY_2.SUBS.GROUP_1.elements.map((el) =>
                                    <li key={el.key}>
                                        <Link
                                            href={`/${CATEGORY_2.key}/${CATEGORY_2.SUBS.GROUP_1.key}/`}
                                            as={process.env.PUBLIC_URL + `/${CATEGORY_2.key}/${CATEGORY_2.SUBS.GROUP_1.key}/${el.key}`}
                                        >
                                            <a>{el.value}</a>
                                        </Link>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/home-preview/decor.jpg"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </li>
                                )}
                            </ul>
                        </li>
                        <li className="sub-menu--mega__title">
                            <Link href={`/${CATEGORY_2.key}/${CATEGORY_2.SUBS.GROUP_2.key}`}
                                  as={process.env.PUBLIC_URL + `/${CATEGORY_2.key}/${CATEGORY_2.SUBS.GROUP_2.key}`}
                            >
                                <a>{CATEGORY_2.SUBS.GROUP_2.value}</a>
                            </Link>
                            <ul className="sub-menu--mega__list">
                                {CATEGORY_2.SUBS.GROUP_2.elements.map((el) =>
                                    <li key={el.key}>
                                        <Link
                                            href={`/${CATEGORY_2.key}/${CATEGORY_2.SUBS.GROUP_2.key}/`}
                                            as={process.env.PUBLIC_URL + `/${CATEGORY_2.key}/${CATEGORY_2.SUBS.GROUP_2.key}/${el.key}`}
                                        >
                                            <a>{el.value}</a>
                                        </Link>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/home-preview/decor.jpg"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </li>
                                )}
                            </ul>
                        </li>
                        <li className="sub-menu--mega__title">
                            <Link href={`/${CATEGORY_2.key}/${CATEGORY_2.SUBS.GROUP_3.key}`}
                                  as={process.env.PUBLIC_URL + `/${CATEGORY_2.key}/${CATEGORY_2.SUBS.GROUP_3.key}`}
                            >
                                <a>{CATEGORY_2.SUBS.GROUP_3.value}</a>
                            </Link>
                            <ul className="sub-menu--mega__list">
                                {CATEGORY_2.SUBS.GROUP_3.elements.map((el) =>
                                    <li key={el.key}>
                                        <Link
                                            href={`/${CATEGORY_2.key}/${CATEGORY_2.SUBS.GROUP_3.key}/`}
                                            as={process.env.PUBLIC_URL + `/${CATEGORY_2.key}/${CATEGORY_2.SUBS.GROUP_3.key}/${el.key}`}
                                        >
                                            <a>{el.value}</a>
                                        </Link>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/home-preview/decor.jpg"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </li>
                                )}
                            </ul>
                        </li>
                        <li>
                            <div className="sub-menu--mega__image">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/menu-image/megamenu-shop.png"
                                    }
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </li>
                    </ul>
                </li>


                <li>
                    <Link
                        href={`/${header.navigation.CATEGORY_3.key}`}
                        as={process.env.PUBLIC_URL + `/${header.navigation.CATEGORY_3.key}`}
                    >
                        <a>{header.navigation.CATEGORY_3.value}</a>
                    </Link>
                    <IoIosArrowDown/>

                    <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
                        <li className="sub-menu--mega__title">
                            <Link href={`/${CATEGORY_3.key}/${CATEGORY_3.SUBS.GROUP_1.key}`}
                                  as={process.env.PUBLIC_URL + `/${CATEGORY_3.key}/${CATEGORY_3.SUBS.GROUP_1.key}`}
                            >
                                <a>{CATEGORY_3.SUBS.GROUP_1.value}</a>
                            </Link>
                            <ul className="sub-menu--mega__list">
                                {CATEGORY_3.SUBS.GROUP_1.elements.map((el) =>
                                    <li key={el.key}>
                                        <Link
                                            href={`/${CATEGORY_3.key}/${CATEGORY_3.SUBS.GROUP_1.key}/`}
                                            as={process.env.PUBLIC_URL + `/${CATEGORY_3.key}/${CATEGORY_3.SUBS.GROUP_1.key}/${el.key}`}
                                        >
                                            <a>{el.value}</a>
                                        </Link>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/home-preview/decor.jpg"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </li>
                                )}
                            </ul>
                        </li>

                        <li>
                            <div className="sub-menu--mega__image">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/menu-image/megamenu-shop.png"
                                    }
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </li>
                        <li className="sub-menu--mega__title">
                            <Link href={`/${CATEGORY_3.key}/${CATEGORY_3.SUBS.GROUP_2.key}`}
                                  as={process.env.PUBLIC_URL + `/${CATEGORY_3.key}/${CATEGORY_3.SUBS.GROUP_2.key}`}
                            >
                                <a>{CATEGORY_3.SUBS.GROUP_2.value}</a>
                            </Link>
                            <ul className="sub-menu--mega__list">
                                {CATEGORY_3.SUBS.GROUP_2.elements.map((el) =>
                                    <li key={el.key}>
                                        <Link
                                            href={`/${CATEGORY_3.key}/${CATEGORY_3.SUBS.GROUP_2.key}/`}
                                            as={process.env.PUBLIC_URL + `/${CATEGORY_3.key}/${CATEGORY_3.SUBS.GROUP_2.key}/${el.key}`}
                                        >
                                            <a>{el.value}</a>
                                        </Link>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/home-preview/decor.jpg"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </li>
                                )}
                            </ul>
                        </li>
                        <li>
                            <div className="sub-menu--mega__image">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/menu-image/megamenu-shop.png"
                                    }
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </li>
                    </ul>
                </li>


                <li>
                    <Link href={`/${CATEGORY_4.key}`}
                          as={process.env.PUBLIC_URL + `/${CATEGORY_4.key}`}>
                        <a>{CATEGORY_4.value}</a>
                    </Link>
                    <IoIosArrowDown/>
                    <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
                        <li className="sub-menu--mega__title">
                            <Link href={`/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_1.key}`}
                                  as={process.env.PUBLIC_URL + `/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_1.key}`}
                            >
                                <a>{CATEGORY_4.SUBS.GROUP_1.value}</a>
                            </Link>
                            <ul className="sub-menu--mega__list">
                                {CATEGORY_4.SUBS.GROUP_1.elements.map((el) =>
                                    <li key={el.key}>
                                        <Link
                                            href={`/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_1.key}/`}
                                            as={process.env.PUBLIC_URL + `/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_1.key}/${el.key}`}
                                        >
                                            <a>{el.value}</a>
                                        </Link>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/home-preview/decor.jpg"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </li>
                                )}
                            </ul>
                        </li>
                        <li className="sub-menu--mega__title">
                            <Link href={`/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_2.key}`}
                                  as={process.env.PUBLIC_URL + `/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_2.key}`}
                            >
                                <a>{CATEGORY_4.SUBS.GROUP_2.value}</a>
                            </Link>
                            <ul className="sub-menu--mega__list">
                                {CATEGORY_4.SUBS.GROUP_2.elements.map((el) =>
                                    <li key={el.key}>
                                        <Link
                                            href={`/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_2.key}/`}
                                            as={process.env.PUBLIC_URL + `/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_2.key}/${el.key}`}
                                        >
                                            <a>{el.value}</a>
                                        </Link>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/home-preview/decor.jpg"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </li>
                                )}
                            </ul>
                        </li>
                        <li className="sub-menu--mega__title">
                            <Link href={`/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_3.key}`}
                                  as={process.env.PUBLIC_URL + `/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_3.key}`}
                            >
                                <a>{CATEGORY_4.SUBS.GROUP_3.value}</a>
                            </Link>
                            <ul className="sub-menu--mega__list">
                                {CATEGORY_4.SUBS.GROUP_3.elements.map((el) =>
                                    <li key={el.key}>
                                        <Link
                                            href={`/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_3.key}/`}
                                            as={process.env.PUBLIC_URL + `/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_3.key}/${el.key}`}
                                        >
                                            <a>{el.value}</a>
                                        </Link>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL +
                                                "/assets/images/home-preview/decor.jpg"
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </li>
                                )}
                            </ul>
                        </li>
                        <li>
                            <div className="sub-menu--mega__image">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/menu-image/menu-element.png"
                                    }
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </li>
                    </ul>
                </li>


                <li className="position-relative">
                    <Link
                        href={`/${CATEGORY_6.key}`}
                        as={process.env.PUBLIC_URL + `/${CATEGORY_6.key}`}
                    >
                        <a style={{color: '#d3122a'}}>{CATEGORY_6.value}</a>
                    </Link>
                    <IoIosArrowDown/>
                    <ul className="sub-menu sub-menu--one-column">
                        {
                            CATEGORY_6.SUBS.map(sub =>
                            <li key={sub.key}>
                                <Link href={`/${CATEGORY_6.key}/${sub.key}`}
                                      as={process.env.PUBLIC_URL + `/${CATEGORY_6.key}/${sub.key}`}
                                >
                                    <a>{sub.value}</a>
                                </Link>
                            </li>
                            )
                        }
                    </ul>
                </li>


                <li>
                    <Link href={`/${CATEGORY_5.key}`}
                          as={process.env.PUBLIC_URL + `/${CATEGORY_5.key}`}>
                        <a style={{color: '#404969'}}>{CATEGORY_5.value}</a>
                    </Link>
                    <IoIosArrowDown/>
                    <ul className="sub-menu sub-menu--mega sub-menu--mega--column-4">
                        <li className="sub-menu--mega__title">
                            <Link href={`/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_1.key}`}
                                  as={process.env.PUBLIC_URL + `/${CATEGORY_4.key}/${CATEGORY_4.SUBS.GROUP_1.key}`}
                            >
                                <a>{CATEGORY_4.SUBS.GROUP_1.value}</a>
                            </Link>
                            <ul className="sub-menu--mega__list">
                                <div className="sub-menu--mega__image">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/assets/images/menu-image/menu-element.png"
                                        }
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                            </ul>
                        </li>
                        <li>
                            <div className="sub-menu--mega__image">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/menu-image/menu-element.png"
                                    }
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </li>
                        <li>
                            <div className="sub-menu--mega__image">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/menu-image/menu-element.png"
                                    }
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </li>
                        <li>
                            <div className="sub-menu--mega__image">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/menu-image/menu-element.png"
                                    }
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </li>
                    </ul>
                </li>


            </ul>
        </nav>
    );
};

export default Navigation;
