import React from "react";

const Breadcrumbs = () => {

return ( 
    <section class="page-header section section--orange-bg">
        <div class="_container">
            <div class="page-header__wrapper">
                <h1 class="page-header__title">
                    Title {}
                </h1>
                <div class="page-header__breadcrumbs breadcrumbs">
                    <ul class="breadcrumbs__items">
                        <li class="breadcrumbs__item">
                            <a href="#">Main /</a>
                        </li>
                        <li class="breadcrumbs__item">
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