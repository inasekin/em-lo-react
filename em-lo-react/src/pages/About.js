import React from "react";
import Breadcrumbs from "../components/breadcrumbs";
import ContactBlock from "../components/contact-block";
import Footer from "../components/footer";
import SeoText from "../components/seo-text"
import Testimonials from "../components/testimonials";
import MetaTags from 'react-meta-tags';

const About = () => {

return ( 
    <>
        <MetaTags>
            <title>About us - 24/4 locksmith services in Liverpool</title>
            <meta id="meta-description" name="description" content="About us. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259" />
        </MetaTags>
        <Breadcrumbs title_breacrumbs=" About us"/>
        <SeoText />
        <Testimonials/>
        <ContactBlock />
        <Footer />
    </>
    );
};

export default About;