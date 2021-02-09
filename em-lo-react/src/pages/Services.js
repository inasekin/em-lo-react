import React from "react";
import Advantages from "../components/advantages";
import Breadcrumbs from "../components/breadcrumbs";
import ContactBlock from "../components/contact-block";
import DropDownText from "../components/drop-down-text";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import MetaTags from 'react-meta-tags';

const Services = () => {

    return ( 
        <> 
            <MetaTags>
                <title>All locksmith services - 24/4 locksmith services in Liverpool</title>
                <meta id="meta-description" name="description" content="All locksmith services. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259" />
            </MetaTags>           
            <Breadcrumbs title_breacrumbs=" All services"/>
            <DropDownText />
            <Advantages />
            <Testimonials />
            <ContactBlock />
            <Footer />
        </>
    );
};
export default Services;