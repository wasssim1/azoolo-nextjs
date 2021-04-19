import React, {createContext, useEffect, useState} from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = (props) => {
    const [currentCurrency, setCurrentCurrency] = useState(CURRENCY_DATA.TND);

    useEffect(() => {
        const cc = localStorage.getItem('current-currency');
        if (cc) {
            setCurrentCurrency(cc);
        }
    }, []);

    const changeCurrency = (currency) => {
        localStorage.setItem('current-currency', currency);
        setCurrentCurrency(currency);
    };

    return (
        <CurrencyContext.Provider value={{
            ...props,
            currentCurrency,
            changeCurrency,
        }}>
            {props.children}
        </CurrencyContext.Provider>
    )
};

export const CURRENCY_DATA = {
    TND: 'TND',
    EUR: 'EUR',
};
