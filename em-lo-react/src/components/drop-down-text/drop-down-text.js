import React from 'react';

const DropDownText = ({text, titleText}) => {

    return (
        <section className="content-more section">
            <div className="_container">
                <h2 className="block-title text--align-center">{titleText}</h2>
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