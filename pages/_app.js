import React from "react";
import Head from "next/head";
import {ToastProvider} from "react-toast-notifications";
import '../styles/globals.css'
import "../assets/scss/styles.scss";
import {CartProvider} from "../contexts/cartContext";
import {CurrencyProvider} from "../contexts/currencyContext";
import {LanguageProvider} from "../contexts/languageContext";

function MyApp({Component, pageProps}) {
    return (
        <React.Fragment>
            <Head>
                <title/>
                <link rel="icon" href={process.env.PUBLIC_URL + "/favicon.ico"}/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <ToastProvider placement="bottom-left">
                <LanguageProvider>
                    <CurrencyProvider>
                        <CartProvider>
                            <Component {...pageProps} />
                        </CartProvider>
                    </CurrencyProvider>
                </LanguageProvider>
            </ToastProvider>
        </React.Fragment>
    );
}

export default MyApp
