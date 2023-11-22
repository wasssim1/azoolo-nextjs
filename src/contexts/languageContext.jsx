import React, { createContext, useEffect, useState } from "react";
import langData_EN from "./languageData/langData_EN";
import langData_FR from "./languageData/langData_FR";
import langData_TN from "./languageData/langData_TN";

export const LanguageContext = createContext<any>({});

export const LanguageProvider = (props) => {
    const [currentLanguage, setCurrentLanguage] = useState(LanguageKey.ENGLISH);
    const [languageData, setLanguageData] = useState(langData.ENGLISH);

    useEffect(() => {
        const cl = localStorage.getItem('current-language');
        if (cl) {
            setCurrentLanguage(cl);
            setLanguageData(langData[cl]);
        } else {
            localStorage.setItem('current-language', currentLanguage);
        }
    }, []);

    const changeLanguage = (language) => {
        localStorage.setItem('current-language', language);
        setCurrentLanguage(language);
        setLanguageData(langData[language]);
    };

    return (
        <LanguageContext.Provider value={{
            ...props,
            currentLanguage,
            changeLanguage,
            languageData,
        }}>
            {props.children}
        </LanguageContext.Provider>
    )
};

export const LanguageKey = {
    TUNISIAN: 'TUNISIAN',
    ENGLISH: 'ENGLISH',
    FRENCH: 'FRENCH',
}

export const LanguageLabel = {
    TUNISIAN: 'Tounsi',
    FRENCH: 'Français',
    ENGLISH: 'English',
};

export const langData = {
    ENGLISH: langData_EN,
    FRENCH: langData_FR,
    TUNISIAN: langData_TN,
};
