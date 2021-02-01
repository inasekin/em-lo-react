import React from "react";
import Breadcrumbs from "../components/breadcrumbs";
import AreasContainer from "../components/areas-container";
import DropDownText from "../components/drop-down text";
import Testimonials from "../components/testimonials";
import ContactBlock from "../components/contact-block";
import Footer from "../components/footer";


const Areas = () => {
        return ( 
            <>
                <Breadcrumbs/>
                <AreasContainer />
                <DropDownText/>
                <Testimonials/>
                <ContactBlock/>
                <Footer/>
            </>
        );
};

export default Areas;