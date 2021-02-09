import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../img/area-image.jpg";
import PropTypes from "prop-types";
import { memo } from "react";


const AreasItem = memo(({ area }) => {
    const { name, slug, images, textcontent } = area;
    // console.log(name);
    return (      
        <div className="areas-block__item col-sm-6 col-md-4">
            <Link to={`/areas/${slug}`} className="btn-primary room-link">
            <div className="areas-block__img">
            <img src={images[0] || defaultImg} alt="xxx" />
            </div>
            <h6>₹{name}</h6>
            <p>{textcontent}</p>
            </Link>
        </div>
    );
});

AreasItem.propTypes = {
    area: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        textcontent: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
};
export default AreasItem;