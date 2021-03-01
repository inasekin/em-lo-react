import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

const ServiceItem = memo(({ service }) => {
    const { name, slug } = service;

    function refreshPage(e) {
        window.location.reload();
        e.preventDefault();
    }

    return (      
        <div className="services__item col-md-4"  onClick={ refreshPage }>
            <Link to={`/services/${slug}`} className="btn-primary service-link">
                {name}
            </Link>
        </div>
    );
});

ServiceItem.propTypes = {
    service: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired
    })
};
export default ServiceItem;

