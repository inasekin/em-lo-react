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
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
                <title>All locksmith services - 24/4 locksmith services in Liverpool</title>
                <link rel="canonical" href="https://emergency-locksmith-24.co.uk/services/" />
                <meta id="meta-description" name="description" content="All locksmith services. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259" />
                <meta property="og:url" content="https://emergency-locksmith-24.co.uk/services/"/>
                <meta property="og:type" content="page"/>
                <meta property="og:title" content="All locksmith services - 24/4 locksmith services in Liverpool"/>
                <meta property="og:description" content="All locksmith services. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259"/>
            </MetaTags>           
            <Breadcrumbs title_of_breadcrumbs="All services" title_breadcrumbs=" All services" second_title_breadcrumbs=""/>
            <DropDownText titleText="Service title" text="Some text here"/>
            <Advantages />
            <Testimonials />
            <ContactBlock />
            <Footer />
        </>
    );
};
export default Services;