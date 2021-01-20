import React from 'react';

const ContactBlock = () => {
        return (
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
                </div> <iframe className="map-block__map-wrapper"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sru!4v1604675510818!5m2!1sru!2sru"
                    width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false"
                    tabindex="0"></iframe>
                <div className="map-block__map-wrapper">						<picture><source srcset="img/map.webp" type="image/webp"/><img src="img/map.png" alt=""/></picture>					</div>
            </section>
        );
    };
export default ContactBlock;