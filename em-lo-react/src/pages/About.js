import React from "react";
import Breadcrumbs from "../components/breadcrumbs";
import ContactBlock from "../components/contact-block";
import Footer from "../components/footer";
import SeoText from "../components/seo-text"
import Testimonials from "../components/testimonials";

const About = () => {

return ( 
    <>
        <Breadcrumbs/>
        <SeoText />
        <Testimonials/>
        <ContactBlock />
        <Footer />
    </>
    );
};

export default About;