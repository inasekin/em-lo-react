import React from "react";
import Breadcrumbs from "../components/breadcrumbs";
import AreasContainer from "../components/areas-container";
import DropDownText from "../components/drop-down-text";
import Testimonials from "../components/testimonials";
import ContactBlock from "../components/contact-block";
import Footer from "../components/footer";
import MetaTags from 'react-meta-tags';

const Areas = () => {
    return ( 
        <div>
            <MetaTags>
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
                <title>Areas we cover - 24/4 locksmith services in Liverpool</title>
                <meta id="meta-description" name="description" content="We cover all postcodes in Liverpool. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259" />
                <meta property="og:url" content="https://emergency-locksmith-24.co.uk/areas/"/>
                <meta property="og:type" content="page"/>
                <meta property="og:title" content="Areas - 24/4 locksmith services in Liverpool"/>
                <meta property="og:description" content="Areas. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259"/>
            </MetaTags>
            <Breadcrumbs title_breadcrumbs="Areas we cover"/>
            <AreasContainer/>
            <DropDownText  titleText="Areas title" text="Some text here"/>
            <Testimonials/>
            <ContactBlock/>
            <Footer/>
        </div>
        );
};

export default Areas;