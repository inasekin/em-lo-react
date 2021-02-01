import React from "react";
import AreasList from "../components/areas-list/areas-list";
import Breadcrumbs from "../components/breadcrumbs";
import ContactBlock from "../components/contact-block";
import DropDownText from "../components/drop-down text";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";

const Areas = () => {
        return ( 
            <>
                <Breadcrumbs/>
                <AreasList />
                <DropDownText/>
                <Testimonials/>
                <ContactBlock/>
                <Footer/>
            </>
        );
};

export default Areas;