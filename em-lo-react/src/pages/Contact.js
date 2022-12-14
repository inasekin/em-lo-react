import React from "react";
import Banner from '../components/banner';
import Footer from "../components/footer";
import ContactForm from "../components/contact-form";
import Testimonials from "../components/testimonials";
import MapInteractive from "../components/map-interactive/map-interactive";
import ContactBlock from "../components/contact-block";
import MetaTags from 'react-meta-tags';

const Contact = () => {

    return ( 
        <>
            <MetaTags>
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
                <title>Contact - 24/4 locksmith services in Liverpool</title>
                <link rel="canonical" href="https://emergency-locksmith-24.co.uk/contact/" />
                <meta id="meta-description" name="description" content="Contact. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8058 7698" />
                <meta property="og:url" content="https://emergency-locksmith-24.co.uk/contact/"/>
                <meta property="og:type" content="page"/>
                <meta property="og:title" content="Contact - 24/4 locksmith services in Liverpool"/>
                <meta property="og:description" content="Contact. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8058 7698"/>
            </MetaTags>
            <Banner title="Contact Emergency Locksmith 24" features1="24/7, 365 Days a Year"
            features2="From £ 39" features3="At your door in 20 min">
            </Banner>
            <ContactForm />
            <Testimonials />
            <MapInteractive />
            <ContactBlock/>
            <Footer/>
        </>
    );
};
export default Contact;