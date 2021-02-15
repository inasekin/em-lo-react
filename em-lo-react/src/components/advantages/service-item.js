import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

const ServiceItem = memo(({ service }) => {
    const { name, slug, url } = service;
    return (      
        <div className="services__item col-md-4">
            <a href={url} className="btn-primary service-link">
                {name}
            </a>
        </div>
        // <div className="col-sm-6 col-md-4 areas-block__item">
        //     <Link to={`/areas/${slug}`} className="btn-primary room-link">
        //     <div className="areas-block__img">
        //     <img src={images[0] || defaultImg} alt="xxx" />
        //     </div>
        //     <h3 className="areas-item-title">{name}</h3>
        //     <p>{textcontent}</p>
        //     </Link>
        // </div>
    );
});

ServiceItem.propTypes = {
    service: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired
    })
};
export default ServiceItem;

