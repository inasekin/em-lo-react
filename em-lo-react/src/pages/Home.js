import React from "react";
import Footer from '../components/footer';
import Banner from '../components/banner';
import Advantages from '../components/advantages';
import Callback from '../components/callback';
import MapInteractive from '../components/map-interactive';
import ContactBlock from '../components/contact-block';
import Testimonials from "../components/testimonials";
import DropDownText from "../components/drop-down-text/drop-down-text";

import MetaTags from 'react-meta-tags';

const Home = () => {
    return ( 
        <>
            <MetaTags>
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
                <title>Locksmith in Liverpool - 24/4 locksmith services in Liverpool</title>
                <meta id="meta-description" name="description" content="Locksmith in Liverpool. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259" />
                <meta property="og:url" content="https://emergency-locksmith-24.co.uk/"/>
                <meta property="og:type" content="page"/>
                <meta property="og:title" content="Locksmith in Liverpool - 24/4 locksmith services in Liverpool"/>
                <meta property="og:description" content="Locksmith in Liverpool. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259"/>
            </MetaTags>
            <main className="page">
                    <Banner title="Emergency Locksmith 24" features1="24/7, 365 Days a Year" 
                    features2="From £ 39" features3="At your door in 20 min" telefone="020 8059 5259">
                    </Banner>
                    <Advantages />
                    <Testimonials/>
                    <Callback/>
                    <DropDownText titleText="Locksmith in Liverpool" text="Some text here"/>
                    <MapInteractive />
                    <ContactBlock />
            </main>
            <a href="#content" className="back-to-top"></a>
            <Footer />
        </>
    );
};
export default Home;