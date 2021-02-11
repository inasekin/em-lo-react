import React, { Component } from "react";
import MetaTags from 'react-meta-tags';
import defaultBcg from "../img/area-image.jpg";
import Banner from "../components/banner";
import ListOfAreas from "../components/list-of-areas/list-of-areas"
import Footer from "../components/footer";


import { Link } from "react-router-dom";
import { AreaContext } from "../context";


export default class SingleArea extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
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
      images
    } = area;
    const [main, ...defaultImages] = images;
    console.log(main);

    return (
        <>
          <MetaTags>
            <title>{title}</title>
            <meta id="meta-description" name="description" content={description} />
          </MetaTags>
          <Banner title={`${name}`} 
            features1="24/7, 365 Days a Year" 
            features2="From £ 39" features3="At your door in 20 min" telefone="020 8059 5259">
          </Banner>
          <Link to="/areas" className="btn-primary">
              <button>back to areas</button>
          </Link>
          <p className="single-area-text">{textcontent}</p>
          <ListOfAreas></ListOfAreas>
        {/* <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="text">
              <p>{textcontent}</p>
          </div>
        </section> */}
          <Footer></Footer>
        </>
    );
  }
}
