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
        <Breadcrumbs title_of_breadcrumbs="About us" title_breadcrumbs=" About us" second_title_breadcrumbs=""/>
        <SeoText seoText="Our locksmith company offers the residents of Liverpool and the surrounding areas on-site services for skilful opening and repair of locking systems. We can fix devices of any model and manufacturer. Our advantages are reasonable prices, deep knowledge of locking mechanisms and a high quality of work. The clients are always satisfied with the locksmith services provided. Each member of our crew has many years of experience in dealing with locks. THE INDISPUTABLE ADVANTAGES OF OUR LOCKSMITH SERVICES • Comprehensive preliminary diagnostics that identify the cause of the breakdown and all hidden defects. • Availability of all the necessary original components supplied by trusted partners. • Full restoration of the lock's functionality. • Call out of a locksmith to any place in the city. • High-quality door components." />
        <ContactForm/>
        <Footer />
    </>
    );
};

export default About;