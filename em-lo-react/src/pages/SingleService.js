import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
import DropDownText from "../components/drop-down-text";
import Footer from "../components/footer";

import { Link } from "react-router-dom";
import { ServiceContext } from "../context-service";
import Advantages from "../components/advantages";
import ContactForm from "../components/contact-form";
import Testimonials from "../components/testimonials";
import Breadcrumbs from "../components/breadcrumbs";

export default class SingleService extends Component {
    constructor(props) {
        super(props);
        this.state = {
        slug: this.props.match.params.slug
        };
    }
    static contextType = ServiceContext;



    // componentDidMount() {
    //   console.log(this.props);
    // }

    render() {
        const { getService } = this.context;
        const service = getService(this.state.slug);


        if (!service) {
        return (
            <div className="error">
            
            <h3> No such service could be found...</h3>
            <Link to="/services" className="btn-primary">
                back to services
            </Link>
            </div>
        );
        }

        let {
        name,
        description,
        textcontent,
        title,
        url
        } = service;

        if (url === "https://emergency-locksmith-24.co.uk/services/window-lock-repair/")
        {
            window.onload = function() {
                console.log(123)
                content();

                function content() {
                    document.getElementById("content-service").innerHTML =  '<h2 class="block-title">Window Lock Change Fitting and Installation in Liverpool</h2>' +
                        '<p class="text-center">Want to upgrade your window locking mechanism and protect your home from burglars?<br/>' +
                        'Do you want to protect children from falling out of the window opening?<br/>' +
                        'Is your window mechanism defective and would you like to replace it?<br/>' +
                        'We will help you choose and install reliable window locks.<br/></p>' +
                        '<p class="text-center">CALL US NOW</p>' +
                        '<p class="mt-50">The UPVC window opening system is not perfect. This makes it easy for burglars to enter the house. ' +
                        'Also, if you have small children in your home, it is no secret that they are very curious and like to play with various mechanisms such as window handles. ' +
                        'Installing locks on windows will not only help to protect your home from break-in but also make your home safer for your children.</p>' +
                        '<h2 class="block-title">Our Services</h2>' +
                        '<p>We provide window lock installation services all over Liverpool. ' +
                        'Our <a href="https://emergency-locksmith-24.co.uk/" class="site-link">professional locksmith</a> will help you with the choice of the type of window lock and will install it in a matter of minutes.</p>' +
                        '<p>We also provide window upgrade services:</p>' +
                        '<ul>' +
                        '<li>●\treplacement of the basic set of window hardware for advanced ones;</li>' +
                        '<li>●\tinstallation of anti-burglary sets;</li>' +
                        '<li>●\tinstallation of the step ventilation system;</li>' +
                        '<li>●\tinstallation of children\'s locks;</li>' +
                        '<li>●\tcomplete replacement of outdated hardware;</li>' +
                        '</ul>' +
                        '<p class="mt-50">We can install different types of Window Lock and Restrictors such as: </p>' +
                        '<div class="row text-center mt-50">' +
                        '<div class="col-sm-6">' +
                        '   <ul>' +
                        '       <li>✔\tJackloc Window, Door Restrictors</li>' +
                        '       <li>✔\tASEC Lockable</li>' +
                        '       <li>✔\tASEC Mini Locking Cables</li>' +
                        '       <li>✔\tChubb UPVC Locks</li>' +
                        '   </ul>' +
                        '</div>' +
                        '<div class="col-sm-6">' +
                        '   <ul>' +
                        '       <li>✔\tERA Keyless Sash Fasteners</li>' +
                        '       <li>✔\tPatio Door Locks</li>' +
                        '       <li>✔\tTiton Alliance</li>' +
                        '       <li>✔\tYale and ERA </li>' +
                        '   </ul>' +
                        '</div>' +
                        '</div>' +
                        '<p class="mt-50">We install cable lock on the following most common types of sash windows:</p>' +
                        '<ul>' +
                        '   <li>✔\tWooden sash windows</li>' +
                        '   <li>✔\tUPVC sash windows</li>' +
                        '   <li>✔\tSoftwood sash windows</li>' +
                        '   <li>✔\tVictorian sash windows</li>' +
                        '   <li>✔\tGeorgian sash windows</li>' +
                        '   <li>✔\tSliding sash windows</li>' +
                        '   <li>✔\tWooden timber sash windows</li>' +
                        '</ul>' +
                        '<h2 class="block-title">Our advantages:</h2>' +
                        '<ul>' +
                        '   <li>✔\tfast arrival in 30 minutes, because we cover all areas of Liverpool </li>' +
                        '   <li>✔\tover 10 years experience in the market</li>' +
                        '   <li>✔\t40 qualified recommended locksmiths</li>' +
                        '   <li>✔\tguaranteed quality</li>' +
                        '   <li>✔\tall types of locks, doors and windows</li>' +
                        '   <li>✔\tno damage</li>' +
                        '   <li>✔\tbest prices</li>' +
                        '</ul>' +
                        '<h2 class="block-title">When is the installation of locks on windows especially necessary?</h2>' +
                        '<p>Any windows of ground or first floors, basement windows that do not have a lock, are quite easy to open for robbers using force or tools. Installing a qualitative mechanism will protect your home from burglary and theft.</p>' +
                        '<p>We also recommend installing locks on all windows in your home if you have children. A UPVC window lock is a conventional designation of several limiters installed to fix the window sash in a certain position. The installation of such devices allows the opening of windows for daily ventilation but prevents children from falling outside, going out onto the cornice or balcony. The locks are fixed to any type of frame, consisting of plastic, wood, at the same time, their installation is possible both on already installed and on new window systems.</p>' +
                        '<p>The main function of window locks is to protect the child. The kid will not be able to open the sash without a key, which excludes a fall.</p>' +
                        '<p>Choosing locks for plastic windows, you should take into account the features of the window structure, its size and type of opening. Many manufacturers produce devices in a variety of colours, which allows you to choose the most appropriate option according to the colour of the window frame and the design of your home.</p>' +
                        '<h2 class="block-title">When do you need to replace the window hardware?</h2>' +
                        '<p>Window fittings are the most important elements of any window. It is responsible for burglary resistance, heat and air circulation in your home. Every part of the mechanism has its lifespan and is designed for a certain amount of opening and closing cycles, after which it inevitably fails and needs to be replaced. Wear is also affected by improper installation and lack of maintenance. Due to heavy contamination and lack of grease, the fittings become unusable much faster.</p>' +
                        '<p style="font-weight: 700;">Evidence of broken window fittings:</p>' +
                        '<ul>' +
                        '   <li>●\theavy movement of the window handle, the handle turns with a screech;</li>' +
                        '   <li>●\tthe sash does not recline to the upper ventilation;</li>' +
                        '   <li>●\tthe window does not close;</li>' +
                        '   <li>●\tthe hinge or other locking elements are broken;</li>' +
                        '   <li>●\tthe flap is jammed in one position;</li>' +
                        '   <li>●\tdistortion and strong sagging of the sash.</li>' +
                        '</ul>' +
                        '<h2 class="block-title">Do you need an urgent replacement of your window hardware?</h2>' +
                        '<p>If your sash does not open, the handle is broken off, or there are other problems with the window mechanism, but there is no time to wait? We offer urgent replacement services of hardware. Any malfunction will be fixed as soon as possible. We also provide a guarantee for services and parts.</p>' +
                        '<p>Call us now to make an inquiry, and we will offer you the best prices! Within an hour, our professional locksmith will arrive with the necessary components for quick and qualitative elimination of the problem. </p>' +
                        '<a href="tel:02080595259" class="site-link">02080595259</a>'
                        ;
                }
            }
        }

        if (url === "https://emergency-locksmith-24.co.uk/services/garage-door-lock-repair/" ||
            url === "https://emergency-locksmith-24.co.uk/services/garage-door-lock-change/" ||
            url === "https://emergency-locksmith-24.co.uk/services/garage-door-lock-installation/")
        {
            window.onload = function() {
                console.log(123)
                content();

                function content() {
                    document.getElementById("content-service").innerHTML = '<h2 class="block-title">Garage door locksmith</h2>' +
                        '<p>We offer prompt services for emergency garage opening, repairing and replacing garage locks. Our craftsmen provide 24-hour qualified assistance and will be able to open the doors of any garage.</p>' +
                        '<h2 class="block-title">Emergency opening of a garage lock</h2>' +
                        '<p>Have an unexpected situation? Can\'t open your garage and need a car urgently? Unfortunately, such situations occasionally happen, regardless of the garage doors and locks quality. </p>' +
                        '<p>The main causes of garage door breakage are:</p>' +
                        '<ul>' +
                        '   <li>●\tjammed garage lock;</li>' +
                        '   <li>●\tjammed or skewed garage door;</li>' +
                        '   <li>●\tyou have lost your keys or they have been stolen;</li>' +
                        '   <li>●\tthe lock is frozen because of the extremely cold weather;</li>' +
                        '</ul>' +
                        '<p>Any attempt to open the garage lock yourself will lead to inevitable damage to garage doors, hinges, or the lock itself. Our professional locksmith will help you to open the garage quickly and without any damage. </p>' +
                        '<p>But in case of opening your garage by our specialist, you will need to provide documents confirming the ownership or rental of the garage. Besides, if you have a car in the garage, you will need documents for it, and identity documents also. After you have presented the documents, our locksmith will open the garage doors as quickly as possible and without damage using the most modern professional tools.</p>' +
                        '<p>Emergency opening of your garage by a professional will save you from wasting time and repairing the garage after self-opening. Our locksmiths are highly experienced and will help you open the garage 24/7.</p>' +
                        '<h2 class="block-title mt-50">Garage door locks repair</h2>' +
                        '<p>The load and external impact on garage locks is much greater than on ordinary home locks because there is a constant influence of the environment; distortions of garage doors due to temperature changes and precipitation or burglar break-in, and many other factors.</p>' +
                        '<p>Never try to repair the lock yourself (this can lead to a complete breakdown of the lock mechanisms), or replace it yourself (this will also have consequences, the door can be damaged). </p>' +
                        '<p>By contacting our specialists, your problem will be solved guaranteed within an hour. The locksmith will arrive to you within 30 minutes, and no more than the same time will take him to carry out repair work. He will have all the necessary tools with him. </p>' +
                        '<h2 class="block-title mt-50">Garage door locks installation</h2>' +
                        '<p>The garage lock has certain differences from traditional models and it is extremely important to install the device correctly, its protective properties will depend on it. A high-quality lock, which is correctly installed, and which can be opened from the inside, for example, only with a key, will become a trap for a burglar. Even if he manages to enter the garage through the roof, he cannot simply exit through the door. </p>' +
                        '<p>Besides, such construction is adapted to harsh weather conditions, and also has some protection against external force action. That is why it is especially important to install it correctly. </p>' +
                        '<p>Our specialists have extensive experience in the installation of locking mechanisms of any type, they know how to fix the structure correctly and provide maximum security for your property.</p>' +
                        '<p>Call us now to make an inquiry, and we will offer you the best prices!</p>' +
                        '<a href="tel:02080595259" class="site-link">02080595259</a>'
                }
            }
        }

        return (
            <>
            <MetaTags>
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
                <title>{title}</title>
                <link rel="canonical" href={url} />
                <meta id="meta-description" name="description" content={description} />
                <meta property="og:url" content={url}/>
                <meta property="og:type" content="page"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
            </MetaTags>
            <Breadcrumbs title_of_breadcrumbs={name} title_breadcrumbs=" All services " second_title_breadcrumbs={name}/>
            <div className="container">
            <DropDownText text={textcontent}/>
            </div>
            <Advantages />
            <Testimonials />
            <ContactForm />
            <Footer/>
            </>
        );
    }
    }