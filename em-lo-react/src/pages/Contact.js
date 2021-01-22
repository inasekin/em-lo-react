import React from "react";
import Banner from '../components/banner';
import Footer from "../components/footer";
import {Link} from 'react-router-dom'
import ContactForm from "../components/contact-form";
import Testimonials from "../components/testimonials";
import MapInteractive from "../components/map-interactive/map-interactive";
import ContactBlock from "../components/contact-block";

const Contact = () => {

    return ( 
        <>
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