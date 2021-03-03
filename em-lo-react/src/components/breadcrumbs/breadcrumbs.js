import React from "react";

const Breadcrumbs = ({ title_breadcrumbs, second_title_breadcrumbs, title_of_breadcrumbs }) => {

    if(second_title_breadcrumbs === "") {
        console.log(0);
        second_title_breadcrumbs = " "
    } else {
        console.log(1)
        second_title_breadcrumbs = `\0 -- ${second_title_breadcrumbs}`
    }

return ( 
    <section className="page-header section section--orange-bg">
        <div className="_container">
            <div className="page-header__wrapper">
                <h1 className="page-header__title">
                    {title_of_breadcrumbs}
                </h1>
                <div className="page-header__breadcrumbs breadcrumbs">
                    <ul className="breadcrumbs__items">
                        <li className="breadcrumbs__item">
                            <a href="/">Home - </a>
                        </li>
                        <li className="breadcrumbs__item">
                            <a href="/">{`- ${title_breadcrumbs}`}</a>
                        </li>
                        <li className="breadcrumbs__item">
                            <a href="/">{second_title_breadcrumbs}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    );
};

export default Breadcrumbs;