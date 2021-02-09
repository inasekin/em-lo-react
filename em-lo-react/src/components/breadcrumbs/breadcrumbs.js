import React from "react";

const Breadcrumbs = ({ title_breacrumbs }) => {

return ( 
    <section className="page-header section section--orange-bg">
        <div className="_container">
            <div className="page-header__wrapper">
                <h1 className="page-header__title">
                    {title_breacrumbs}
                </h1>
                <div className="page-header__breadcrumbs breadcrumbs">
                    <ul className="breadcrumbs__items">
                        <li className="breadcrumbs__item">
                            <a href="/">Home </a>
                        </li>
                        <li className="breadcrumbs__item">
                            <a href="/">{title_breacrumbs}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    );
};

export default Breadcrumbs;