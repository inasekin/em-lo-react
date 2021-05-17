import React from 'react';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Advantages from '../components/advantages';
import Callback from '../components/callback';
import MapInteractive from '../components/map-interactive';
import ContactBlock from '../components/contact-block';
import Testimonials from '../components/testimonials';

import MetaTags from 'react-meta-tags';

const Home = () => {

    const primaryText = {
        color: 'red'
    };

    const tretiaryHeading = {
      fontSize: 23,
      fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 60
    };

    return ( 
        <>
            <MetaTags>
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
                <title>Locksmith in Liverpool - 24/4 locksmith services in Liverpool</title>
                <link rel="canonical" href="https://emergency-locksmith-24.co.uk/" />
                <meta id="meta-description" name="description" content="Locksmith in Liverpool. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8058 7698" />
                <meta property="og:url" content="https://emergency-locksmith-24.co.uk/"/>
                <meta property="og:type" content="page"/>
                <meta property="og:title" content="Locksmith in Liverpool - 24/4 locksmith services in Liverpool"/>
                <meta property="og:description" content="Locksmith in Liverpool. ✅24 hours a day, 7 days a week locksmith services in Liverpool. ✅High rated locksmiths. ✅Call Locksmiths now. ☎ 020 8058 7698"/>
            </MetaTags>
            <main className="page">
                    <Banner title="Emergency Locksmith Liverpool 24" features1="24/7, 365 Days a Year"
                    features2="From £ 39" features3="At your door in 20 min">
                    </Banner>
                    <Advantages />
                    <Testimonials/>
                    <Callback/>
                    <section className="content-more section">
                        <div className="_container">
                            <h2 className="block-title text--align-center"><a href="tel:+442080587698" style={primaryText}>CALL 020 8058 7698</a> FOR LOCKSMITH SERVICES</h2>
                            <div className="content-more__wrapper">
                                <div className="content-more__content">
                                    <div className="content-more__text">
                                        Our locksmith company offers the residents of <span style={primaryText}>Liverpool</span> and the surrounding areas on-site services for skilful opening and repair of locking systems. We can fix devices of any model and manufacturer. Our advantages are reasonable prices, deep knowledge of locking mechanisms and a high quality of work. The clients are always satisfied with the locksmith services provided. Each member of our crew has many years of experience in dealing with locks.

                                        THE INDISPUTABLE ADVANTAGES OF OUR LOCKSMITH SERVICES
                                        •	Comprehensive preliminary diagnostics that identify the cause of the breakdown and all hidden defects.
                                        •	Availability of all the necessary original components supplied by trusted partners.
                                        •	Full restoration of the lock's functionality.
                                        •	Call out of a locksmith to any place in the city.
                                        •	High-quality door components.
                                        <h3 style={tretiaryHeading}>DOOR OPENING</h3>
                                        All types of a door opening in <span style={primaryText}>Liverpool</span>. We will gain entry quickly, safely and with minimal damage. If necessary, the locks can be repaired or replaced. Call our 24-hour dispatch centre if your lock is jammed and you need a qualified locksmith to open the front door. During the call, provide the address, and if you know, give information on the cause of a breakdown, type of a lock and model of a door. Such details will allow the locksmith to quickly open your door and replace broken parts in the shortest possible time.

                                        Clients need to present documents confirming the ownership of residential or non-residential premises. Otherwise, the provision of services is possible only in the presence of a representative of the authorities. Our crew consists of qualified specialists. Therefore, by turning to us, you can be sure that the integrity of the door and locking mechanisms will be preserved. After assessing the situation and the degree of damage, the locksmith will choose the most technologically advanced method for gaining entry, which allows keeping the appearance of the door as much as possible.

                                        <h3 style={tretiaryHeading}>DOOR LOCK REPAIR</h3>
                                        <p>Restoration work is usually required immediately after the emergency lock opening. Our locksmith crew arrives on-site with a full arsenal of new locks and accessories. Depending on the degree of damage, it may be necessary to replace the profile cylinder, insert a new plate, completely change the locking mechanism or repair the door hardware. Sometimes, the opening of a reinforced door lock requires the skill and perseverance of more than one master. The locksmith will offer to purchase the necessary components to replace the lock after an emergency opening. A new lock will be installed based on your requirements, suitable for the specific type of door.

                                        The ability to open the lock and repair it afterwards is one of the main advantages of our locksmith services. We carry out a full cycle of restoration work, up to rekeying the locking mechanism. The availability of high-quality materials allows us to restore the integrity of the door structure after emergency door opening, and carry out all related work such as door insulation, replacement of hinges, strengthening the structure, installation of decorative panels, etc.

                                            We give a guarantee for all services provided, as well as components purchased from us. Only professionals, specialists with relevant experience and knowledge should be entrusted with repairs, opening door locks and restoration work; we offer nothing less. The availability of qualified locksmith personnel, modern tools and high-quality components allows us to carry out an emergency opening of locks in <span style={primaryText}>Liverpool</span> and provide other services at the highest level:</p>
                                        <ul>
                                            <li>● Replacement of worn parts.</li>
                                            <li>● Gain of entry.</li>
                                            <li>● Restoration work.</li>
                                            <li>● Improvement of door structures.</li>
                                            <li>● Decorative design.</li>
                                        </ul>

                                        <h3 style={tretiaryHeading}>LOCK INSTALLATION</h3>
                                        <p>Our crew has been working with steel doors and locking devices for over 20 years. We offer a door lock replacement in case of its breakage or loss of keys. If your standard lock does not inspire confidence, the locksmith can install reinforced door locks or insert additional locking mechanisms. The options for installing an additional lock on the door in a new place have numerous combinations. It can be both the installation of door locks of a conventional model, and the installation of various secret-blockers, including electronic invisible locks.

                                            One of our locksmith company's advantages is a huge selection of locks and accessories; everything that is needed for replacement is always readily available. At your request, the locks on metal, wooden and plastic doors can be replaced with locking systems that have various protective armour plates and blockers of access to the keyhole. In addition to replacing the lock on the door, we can offer improvements or additions to existing locks of different secret functions. Call us today! Our locksmith crew can replace locks, increase the reliability of the entire structure and perform all types of repair work.</p>

                                    </div>
                                </div>
                                <div className="content-more__more">
                                    <a href="#" className="btn btn--primary">More...</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <MapInteractive />
                    <ContactBlock />
            </main>
            <a href="#content" className="back-to-top"></a>
            <Footer />
        </>
    );
};
export default Home;