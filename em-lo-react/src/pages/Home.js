import React from "react";
import Footer from '../components/footer';
import Banner from '../components/banner';
import Advantages from '../components/advantages';
import Callback from '../components/callback';
import ContactBlock from '../components/contact-block';
import Testimonials from "../components/testimonials";
import DropDownText from "../components/drop-down text/drop-down-text";


const Home = () => {

    return ( 
        <>
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