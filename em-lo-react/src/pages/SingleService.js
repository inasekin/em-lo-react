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
        console.log(this.props);
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
        const {
        name,
        description,
        textcontent,
        title,
        url
        } = service;

        return (
            <>
            <MetaTags>
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
                <title>{title}</title>
                <meta id="meta-description" name="description" content={description} />
                <meta property="og:url" content={url}/>
                <meta property="og:type" content="page"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
            </MetaTags>
            <Breadcrumbs title_breadcrumbs="All Services" second_title_breadcrumbs={`-- ${name}`}/>
            <div className="container">
            <DropDownText titleText={name} text={textcontent}/>
            </div>
            <Advantages />
            <Testimonials />
            <ContactForm />
            <Footer></Footer>
            </>
        );
    }
    }