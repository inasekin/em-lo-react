import React from 'react';

const DropDownText = ({text}) => {

    return (
        <section className="content-more section">
            <div className="_container">
                <div className="content-more__wrapper">
                    <div className="content-more__content">
                        <p id="content-service">{text}</p>
                    </div>
                    <div className="content-more__more">
                        <a href="#" className="btn btn--primary">More...</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DropDownText;