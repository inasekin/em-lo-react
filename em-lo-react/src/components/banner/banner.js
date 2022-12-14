import React from "react";

const Banner = ({ features1, title, features2, features3 }) => {
    return (
        <section className="welcome-block section">
            <div className="_container">
                <div className="welcome-block__wrapper">
                    <h1 className="welcome-block__title">{title}</h1>
                    <div className="welcome-block__items">
                        <div className="welcome-block__item">{features1}</div>
                        <div className="welcome-block__item">{features2}</div>
                        <div className="welcome-block__item">{features3}</div>
                    </div>
                    <div className="welcome-block__callback"> <a href="tel:+442080595259"
                    className="btn btn--secondary">Call us 020 8059 5259</a> </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;