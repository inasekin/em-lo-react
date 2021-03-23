import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
import defaultBcg from "../img/area-image.jpg";
import Banner from "../components/banner";
import ListOfAreas from "../components/list-of-areas/list-of-areas"
import Footer from "../components/footer";


import { Link } from "react-router-dom";
import { AreaContext } from "../context";
import ContactBlock from "../components/contact-block";


export default class SingleArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = AreaContext;

  render() {
    const { getArea } = this.context;
    const area = getArea(this.state.slug);

    if (!area) {
      return (
        <div className="error">
          
          <h3> No such area could be found...</h3>
          <Link to="/areas" className="btn-primary">
            back to areas
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
    } = area;

      const primaryText = {
          color: 'red'
      };

      const mainUrl = {
          siteUrl: 'https://emergency-locksmith-24.co.uk'
      }

    return (
        <>
          <MetaTags>
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
            <title>{title}</title>
              <link rel="canonical" href={mainUrl.siteUrl + url} />
            <meta id="meta-description" name="description" content={description} />
            <meta property="og:url" content={mainUrl.siteUrl + url}/>
            <meta property="og:type" content="page"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
          </MetaTags>
          <Banner title={`${name}`} 
            features1="24/7, 365 Days a Year" 
            features2="From £ 39" features3="At your door in 20 min" telefone="020 8059 5259">
          </Banner>

          <div className="container">
          <section className="content-more section">
              <div className="_container">
                  <h2 className="block-title text--align-center title-uppercase">RELIABLE LOCKSMITHS IN {textcontent}</h2>
                  <div className="content-more__wrapper">
                      <div className="content-more__content">
                          <p>You can reach us day or night by calling <span style={primaryText}> 020 8059 5259</span></p>
                          <p>We are a local
                               {textcontent}
                              locksmith crew providing services around the clock in order to
                              meet your locking and security needs. Emergency assistance is available around the
                              clock, including weekends, for performing after burglary repairs or gaining a damage-
                              free entry to a locked home, car or business premises in the event of a lockout.</p>
                          <p>A qualified and highly experienced locksmith
                               {textcontent}
                              will be with you within just 20
                              minutes from the moment of your call. He’ll arrive with professional-grade tools and all
                              the necessary parts for completing tasks of any complexity. You can rest assured
                              knowing that your property's security is in the hands of a competent local locksmith. We
                              offer a wide range of services at competitive prices! Speak with the manager for more
                              information on locksmiths
                               {textcontent}
                              offers.</p>
                          <h2 className="title-uppercase">AFFORDABLE
                               {textcontent}
                              LOCKSMITH</h2>
                          <p>We strive to make sure that every resident can afford Locksmiths
                               {textcontent}
                              services and
                              offer some of the most competitive prices in the area for securing the premises,
                              installation of safes, locks modernization and more. Regardless of circumstances and
                              the complexity of work, we aim to beat the prices of competing local companies.
                              Locksmiths
                               {textcontent}
                              provides best quality services for the money. We only use products
                              manufactured to high-security standards that serve our clients for many years! Any work
                              is guaranteed, and all products come with a manufacturer’s warranty</p>
                          <h2 className="title-uppercase">FAST LOCKSMITHS
                               {textcontent}</h2>
                          <p>Our rapid response to an emergency, efficiency and unbeatable prices will leave even
                              the most demanding clients fully satisfied. We take pride in our work and act as a team
                              to meet your desires and security requirements. Positive feedback from the clients is the
                              best advertisement for Locksmiths
                               {textcontent}
                              . Our experience and knowledge of locking
                              systems allow us to select and implement the best possible solutions for our clients.
                              Turning to us, you can be confident in the favourable resolution of all your lock-related
                              problems. Contact us today, and see for yourself! Call
                              <span style={primaryText}> 020 8059 5259</span>
                              at any time.</p>
                      </div>
                      <div className="content-more__more">
                          <a href="/" className="btn btn--primary">More...</a>
                      </div>
                  </div>
              </div>
          </section>
          </div>
          <ListOfAreas />
          <ContactBlock/>
          <Footer />
        </>
    );
  }
}
