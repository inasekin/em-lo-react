import React from 'react';

const ContactBlock = () => {
        return (
            <>
            <section className="map-block section">
                <div className="map-block__contacts-wrapper">
                    <div className="_container">
                        <div className="map-block__contacts">
                            <div className="map-block__title text--color-underline text--uppercase">Contact Information
                            </div>
                            <div className="map-block__content">
                                <p>Telephone: <b><a href="#">020 7359</a></b></p>
                                <p>E-mail: <b><a href="#">info@emergency-locksmith-24.co.uk</a></b></p>
                            </div> <a href="" className="btn btn--primary mb-3"><b>Find me on the map</b></a>
                            <form action="">
                                <div className="map-block__contact-form contact-form">
                                    <div className="contact-form__line-text-input mb-3"> <input className="input" type="text"
                                            name="contact-form-text" id="contact-form-text"/> </div> <input
                                        className="contact-form__input input mb-3" type="text" name="contact-form-name"
                                        id="contact-form-name" placeholder="Your name"/> <input
                                        className="contact-form__input input mb-3" type="tel" name="contact-form-phone"
                                        id="contact-form-phone" placeholder="Your phone"/> <input type="submit"
                                        value="Call" className="contact-form__submit btn btn--primary"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div width="100%">
                        <iframe scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Liverpool,%20United%20Kingdom+(Emergency%20Locksmith%2024)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameBorder="0">
                            </iframe>
                    </div>
                    </div>
            </section>
            </>
        );
    };
export default ContactBlock;