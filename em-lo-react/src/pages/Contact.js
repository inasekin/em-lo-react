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
                <title>Contact - 24/4 locksmith services in Liverpool</title>
                <meta id="meta-description" name="description" content="Contact. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259" />
            </MetaTags>
            <Banner title="Emergency Locksmith 24" features1="24/7, 365 Days a Year" 
            features2="From £ 39" features3="At your door in 20 min" telefone="020 8059 5259">
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