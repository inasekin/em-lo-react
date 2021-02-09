import React from "react";
import Footer from '../components/footer';
import Banner from '../components/banner';
import Advantages from '../components/advantages';
import Callback from '../components/callback';
import ContactBlock from '../components/contact-block';
import Testimonials from "../components/testimonials";
import DropDownText from "../components/drop-down-text/drop-down-text";

import MetaTags from 'react-meta-tags';

const Home = () => {
    return ( 
        <>
            <MetaTags>
                <title>Locksmith in Liverpool - 24/4 locksmith services in Liverpool</title>
                <meta id="meta-description" name="description" content="Locksmith in Liverpool. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8059 5259" />
            </MetaTags>
            <main className="page">
                    <Banner title="Emergency Locksmith 24" features1="24/7, 365 Days a Year" 
                    features2="From £ 39" features3="At your door in 20 min" telefone="020 8059 5259">
                    </Banner>
                    <Advantages />
                    <Testimonials/>
                    <Callback/>
                    <DropDownText/>
                    <section className="areas-block section ">
                        <div className="_container">
                            <h2 className="block-title text--align-center">Areas we cover</h2>
                        </div>
                    </section>
                    <ContactBlock />
            </main>
            <a href="#content" className="back-to-top"></a>
            <Footer />
        </>
    );
};
export default Home;