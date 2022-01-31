import React from "react";
import Head from 'next/head'
import BasicLayout from "../components/layout/BasicLayout";
import HeroSliderBasic from "../components/heroslider/HeroSliderBasic";
import heroSliderData from "../data/hero-sliders/hero-slider-one.json";
import CountdownTimer from "../components/Countdown/CountdownTimer";
import CategoryGrid from "../components/categorygrid/CategoryGrid";
import CategoryGridThree from "../components/categorygrid/CategoryGridThree";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Azoolo | Marketplace</title>
                <link rel="icon" href=""/>
            </Head>

            <main>
                <BasicLayout>
                    <HeroSliderBasic sliderData={heroSliderData}/>

                    <CountdownTimer
                        title="Deal of the day"
                        backgroundImage="/assets/images/countdown/bg-countdown-2.jpg"
                        dateTime="April 1, 2021 12:00:00"
                        url="/shop/left-sidebar"
                        buttonText="Only €€"
                        spaceBottomClass="space-mb--r100"
                    />

                    <CategoryGrid spaceBottomClass="space-mb--r100"/>

                    <CategoryGridThree spaceBottomClass="space-mb--r100"/>

                </BasicLayout>
            </main>

        </div>
    )
}
