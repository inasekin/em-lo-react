import React from "react";
import Breadcrumbs from "../components/breadcrumbs";
import Footer from "../components/footer";
import SeoText from "../components/seo-text"
import MetaTags from 'react-meta-tags';
import ContactForm from "../components/contact-form";

const About = () => {

return ( 
    <>
        <MetaTags>
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
            <title>About us - 24/4 locksmith services in Liverpool</title>
            <meta id="meta-description" name="description" content="About us. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259" />
            <meta property="og:url" content="https://emergency-locksmith-24.co.uk/about/"/>
            <meta property="og:type" content="page"/>
            <meta property="og:title" content="About us - 24/4 locksmith services in Liverpool"/>
            <meta property="og:description" content="About us. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259"/>
        </MetaTags>
        <Breadcrumbs title_breadcrumbs=" About us"/>
        <SeoText />
        <ContactForm />
        <Footer />
    </>
    );
};

export default About;