import React from "react";

const Breadcrumbs = () => {

return ( 
    <section className="page-header section section--orange-bg">
        <div className="_container">
            <div className="page-header__wrapper">
                <h1 className="page-header__title">
                    Title {}
                </h1>
                <div className="page-header__breadcrumbs breadcrumbs">
                    <ul className="breadcrumbs__items">
                        <li className="breadcrumbs__item">
                            <a href="/">Main </a>
                        </li>
                        <li className="breadcrumbs__item">
                            <a href="/">{}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    );
};

export default Breadcrumbs;