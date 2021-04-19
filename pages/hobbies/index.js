import React from "react";
import Head from 'next/head'
import ModeContent from "../../components/homecontent/ModeContent";
import BasicLayout from "../../components/layout/BasicLayout";
import HeroSliderBasic from "../../components/heroslider/HeroSliderBasic";
import ElectronicsContent from "../../components/homecontent/ElectronicsContent";
import HobbiesContent from "../../components/homecontent/HobbiesContent";

export default function ElectronicsHome() {
    return (
        <div>
            <Head>
                <title>Azoolo | Hobbies</title>
                <link rel="icon" href=""/>
            </Head>

            <main>
                <BasicLayout>
                    {/*<HeroSliderBasic sliderData={heroSliderData}/>*/}

                    <HobbiesContent/>

                </BasicLayout>
            </main>

        </div>
    )
}
