import React, { Component } from 'react';

export default class ContactForm extends Component {
    render() {

        return(
            <section className="contacts section">
                <div className="_container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="contacts__items">
                                <div className="contacts__item">
                                    <div className="contacts__title">Contact info</div>
                                    <a className="contacts__link" href="#">info@emergency-locksmith-24.co.uk</a>
                                    <a className="contacts__link" href="#">020 8059 5259</a>
                                </div>
                                <div className="contacts__item">
                                    <div className="contacts__title">Mailing address</div>
                                    <div className="contacts__link" href="#">Emergency Locksmith 24</div>
                                    <div className="contacts__link" href="#">179 Queens Dr, Liverpool L15 6XS<br/>United Kingdom</div>
                                </div>
                                <div className="contacts__item">
                                    <div className="contacts__title">Company Reg. Number:</div>
                                    <div className="contacts__link" href="#">11494148</div>
                                </div>
                                <div className="contacts__item">
                                    <div className="contacts__title">VAT Number:</div>
                                    <div className="contacts__link" href="#">305-2934-37</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="contacts__form contact-form">
                                <form action="" className="form">
                                    <div className="form__line">
                                        <label>Your Name (required)</label>
                                        <input type="text" className="input contact-form__input"/>
                                    </div>
                                    <div className="form__line">
                                        <label>Your Phone (required)</label>
                                        <input type="text" className="input contact-form__input"/>
                                    </div>
                                    <div className="form__line">
                                        <label>Your Email</label>
                                        <input type="email" className="input contact-form__input"/>
                                    </div>
                                    <div className="form__line">
                                        <label>Subject</label>
                                        <input type="text" className="input contact-form__input"/>
                                    </div>
                                    <div className="form__line">
                                        <label>Your Message</label>
                                        <textarea className="input contact-form__input"></textarea>
                                    </div>
                                    <div className="form__line">
                                        <input type="submit" className="form__button contact-form__submit btn btn--primary"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}