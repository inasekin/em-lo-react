import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
import defaultBcg from "../img/area-image.jpg";
import Banner from "../components/banner";
import ListOfAreas from "../components/list-of-areas/list-of-areas"
import Footer from "../components/footer";


import { Link } from "react-router-dom";
import { AreaContext } from "../context";
import ContactBlock from "../components/contact-block";
import DropDownText from "../components/drop-down-text";


export default class SingleArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = AreaContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
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
      images,
      url
    } = area;
    const [main, ...defaultImages] = images;

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
          <Banner title={`${name}`} 
            features1="24/7, 365 Days a Year" 
            features2="From £ 39" features3="At your door in 20 min" telefone="020 8059 5259">
          </Banner>

          <div className="container">
          <DropDownText titleText={name} text={textcontent}/>
          </div>
          <ListOfAreas></ListOfAreas>
          <ContactBlock/>
          <Footer></Footer>
        </>
    );
  }
}
