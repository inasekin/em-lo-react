import React from "react";
import Advantages from "../components/advantages";
import Breadcrumbs from "../components/breadcrumbs";
import ContactBlock from "../components/contact-block";
import DropDownText from "../components/drop-down text";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";

const Services = () => {

    return ( 
        <>            
            <Breadcrumbs />
            <DropDownText />
            <Advantages />
            <Testimonials />
            <ContactBlock />
            <Footer />
        </>
    );
};
export default Services;