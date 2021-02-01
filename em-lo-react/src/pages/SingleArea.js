import React, { Component } from "react";
import defaultBcg from "../img/area-image.jpg";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import { AreaContext } from "../context";

export default class SingleAres extends Component {
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
          <Banner title={`${name}`}>
            <Link to="/areas" className="btn-primary">
              <button>back to areas</button>
            </Link>
          </Banner>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="text">
              <p>{textcontent}</p>
          </div>
        </section>
      </>
    );
  }
}
