import { useContext } from "react";
import { IoIosClose } from "react-icons/io";

import { CurrencyContext, CurrencyKey, CurrencyLabel } from "../../../contexts/currencyContext";
import { LanguageContext, LanguageKey, LanguageLabel } from "../../../contexts/languageContext";
import MobileMenuNav from "./MobileMenuNav";
import MobileMenuSearch from "./MobileMenuSearch";
import MobileMenuWidgets from "./MobileMenuWidgets";

const MobileMenu = ({ activeStatus, getActiveStatus }) => {
  const { currentLanguage, changeLanguage, languageData } = useContext(LanguageContext);
    const { currentCurrency, changeCurrency } = useContext(CurrencyContext);

  return (
    <div className={`offcanvas-mobile-menu ${activeStatus ? "active" : ""}`}>
      <div
        className="offcanvas-mobile-menu__overlay-close"
        onClick={() => getActiveStatus(false)}
      />
      <div className="offcanvas-mobile-menu__wrapper">
        <button
          className="offcanvas-mobile-menu__close"
          onClick={() => getActiveStatus(false)}
        >
          <IoIosClose />
        </button>
        <div className="offcanvas-mobile-menu__content-wrapper">
          <div className="offcanvas-mobile-menu__content">
            {/* mobile search */}
            <MobileMenuSearch />

            {/* mobile nav menu */}
            {/* TODO: Fix navigation */}
            {/* <MobileMenuNav getActiveStatus={getActiveStatus} /> */}

            <div className="offcanvas-mobile-menu__middle">
              <div className="lang-curr-style space-mb--20">
                <span className="title">Choose Language</span>
                <select onChange={(e) => changeLanguage(e.target.value)} value={currentLanguage}>
                  <option value={LanguageKey.TUNISIAN}>{LanguageLabel.TUNISIAN}</option>
                  <option value={LanguageKey.FRENCH}>{LanguageLabel.FRENCH}</option>
                  <option value={LanguageKey.ENGLISH}>{LanguageLabel.ENGLISH}</option>
                </select>
              </div>
              <div className="lang-curr-style">
                <span className="title">Choose Currency</span>
                <select onChange={(e) => changeCurrency(e.target.value)} value={currentCurrency}>
                  <option value={CurrencyKey.TND}>{CurrencyLabel.TND}</option>
                  <option value={CurrencyKey.EUR}>{CurrencyLabel.EUR}</option>
                </select>
              </div>
            </div>

            {/* mobile widgets */}
            <MobileMenuWidgets />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
