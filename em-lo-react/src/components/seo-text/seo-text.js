import React from "react";

const SeoText = ({ seoText }) => {

return (
    <>
        <section className="Who-block section">
            <div className="_container">
                <h2 className="block-title text--align-center">Who are we?</h2>
                <p>{seoText}</p>
            </div>
        </section>
    </>

    );
};

export default SeoText;