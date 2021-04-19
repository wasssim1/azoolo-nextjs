import React from "react";
import Head from 'next/head'
import ModeContent from "../../components/homecontent/ModeContent";
import BasicLayout from "../../components/layout/BasicLayout";
import HeroSliderBasic from "../../components/heroslider/HeroSliderBasic";

export default function ModeHome() {
    return (
        <div>
            <Head>
                <title>Azoolo | Mode</title>
                <link rel="icon" href=""/>
            </Head>

            <main>
                <BasicLayout>
                    {/*<HeroSliderBasic sliderData={heroSliderData}/>*/}

                    <ModeContent spaceBottomClass="space-mb--50" />

                </BasicLayout>
            </main>

        </div>
    )
}
