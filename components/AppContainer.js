import React from 'react';
import Head from 'next/head';
import Header from "./Header";
import Footer from "./Footer";

const AppContainer = ({title, childeren}) =>{
    const RenderComponent = childeren;
    return(
        <>
            <Head>
                <title>{title || "Grinntech | Lithium-ion Battery Manufacturer"}</title>
                <link rel="canonical" href="https://www.grinntech.com/" />
                <link rel="stylesheet" href="/font-awesome-4.7.0/css/font-awesome.min.css"></link>
                <meta property="og:locale" content="en_US"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="Grinntech"></meta>
                <meta property="og:description" content="Leading on all fronts of battery design, Grinntech has a range of Lithium-ion batteries which sets new standards in Electrical safety, Energy density, Durability, Quality and Reliability."></meta>
                <meta property="og:url" content="https://www.grinntech.com/"></meta>
                <meta property="og:site_name" content="Grinntech"></meta>
                <meta property="og:image" content="https://www.grinntech.com/img/product/robin.webp"></meta>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="full-width min-h-screen">
                <RenderComponent />
            </main>
            <Footer />
        </>
    )
}

export default AppContainer;