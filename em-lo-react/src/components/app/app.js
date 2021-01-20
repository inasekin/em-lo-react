import React, { Component } from 'react';

import Header from '../header';
import Footer from '../footer';

import './app.css';

export default class App extends Component {
    render() {


        return (
            <div classNameName="wrapper">
                <Header />
                <main className="page">
                    <section className="welcome-block section">
                        <div className="welcome-block__background">
                            <picture>
                                <source srcset="img/welcome-block-bg.webp" type="image/webp"></source><img src="img/welcome-block-bg.png"
                                    alt=""/></picture>
                        </div>
                        <div className="_container">
                            <div className="welcome-block__wrapper">
                                <h1 className="welcome-block__title">EMERGENCY LOCKSMITH IN LONDON</h1>
                                <div className="welcome-block__items">
                                    <div className="welcome-block__item">24/7, 365 Days a Year</div>
                                    <div className="welcome-block__item">From £ 39</div>
                                    <div className="welcome-block__item">At your door in 15-25min</div>
                                </div>
                                <div className="welcome-block__callback"> <a href="tel:02080595259" className="btn btn--secondary">Call
                                        us 020 8059 5259</a> </div>
                            </div>
                        </div>
                    </section>
                    <section className="services section section--orange-bg">
                        <div className="_container">
                            <h2 className="block-title">Our services</h2>
                            <div className="services__items">
                                <div className="row">
                                    <div className="services__item col-md-4">Emergency locksmith</div>
                                    <div className="services__item col-md-4">Lock Change</div>
                                    <div className="services__item col-md-4">Emergency Lockout</div>
                                    <div className="services__item col-md-4">Lock Installation</div>
                                    <div className="services__item col-md-4">Lock Upgrade Of All Locks</div>
                                    <div className="services__item col-md-4">Lock Opening</div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="testimonials section">
                        <div className="_container">
                            <div className="testimonials__items">
                                <div className="testimonials__item">
                                    <div className="testimonial">
                                        <div className="testimonial__header">
                                            <div className="testimonial__author">Hollie Newton</div>
                                            <div className="testimonial__date">8.14.2020</div>
                                            <div className="testimonial__rating rating"></div>
                                        </div>
                                        <div className="testimonial__body">
                                            <p>Excellent service from phone call to man coming to open the door, couldn't have
                                                been more helpful to resolve my problem . Recommended </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonials__item">
                                    <div className="testimonial">
                                        <div className="testimonial__header">
                                            <div className="testimonial__author">Hollie Newton</div>
                                            <div className="testimonial__date">8.14.2020</div>
                                            <div className="testimonial__rating rating"></div>
                                        </div>
                                        <div className="testimonial__body">
                                            <p>Excellent service from phone call to man coming to open the door, couldn't have
                                                been more helpful to resolve my problem . Recommended </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="callback-block section section--orange-bg">
                        <div className="_container">
                            <div className="callback-block__wrapper">
                                <div className="callback-block__text">Call us: 020 8059 5259 or</div>
                                <div className="callback-block__form-wrapper">
                                    <form action="">
                                        <div className="callback-block__form"> <input className="callback-block__input input"
                                                type="text" name="callback-name" id="callback-name" placeholder="Your name"/>
                                            <input className="callback-block__input input" type="tel" name="callback-phone"
                                                id="callback-phone" placeholder="Your phone"/> <input type="submit" value="Send"
                                                className="callback-block__submit btn btn--transparent"/> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content-more section">
                        <div className="_container">
                            <div className="content-more__wrapper">
                                <div className="content-more__content">
                                    <p><b>Türe öffnen</b><br/> Been saved by this service on two separate occasions when we
                                        managed stupidly to lock ourselves out. The service was quick, super friendly and very
                                        affordable. Thanks! Highly recommend to anyone looking for an excellent locksmith. </p>
                                    <p><b>John Singh</b> Really brilliant service, i called after locking myself out my house on
                                        a Sunday evening and Bijan came immediately to help me! He arrived 7 mins after i called
                                        and managed to open my door in less than 5 mins with no damage at all. </p>
                                    <p><b>Lucy Bruton</b> A very good experience. I had a problem with front door lock. I
                                        emailed a photo of the problem. Fast response and was told it was a issue that I could
                                        fix rather than paying for a call out and they would help over the phone if I h. </p>
                                    <p><b>Türe öffnen</b><br/>								Können Sie in Ihr eigenes Haus nicht geraten oder klemmt die Tür und Sie sind eingesperrt und kommen deswegen zu spät zur Arbeit? Der Schlüsseldienst Berlin bietet Lösungen für alle Probleme, die mit Schloss und Schlüssel auftauchen, mit sehr kurzer Anfahrtszeit und zu besonders günstigem Preis.								</p>								<p><b>Türe öffnen</b>								Täglich helfen wir unseren dankbaren Kunden aus schwierigen Situationen heraus. Niemand ist davor versichert, dass er sich mal vor der geschlossenen Tür wiederfindet. Wenn Sie mal in so eine Situation geraten, und sie die Schlüssel verloren haben oder das Schloss kaputt ist, zögern Sie nicht und rufen Sie unser Schlüsselnotdienst. Unsere Mitarbeiter kommen stets gut ausgerüstet zu Ihnen, um qualitative Arbeit zu leisten.								Obwohl alle Schlüssel und Schlösser sich voneinander stark unterscheiden, können wir in 95% aller Fälle die Tür schadenfrei öffnen. Noch bevor der Meister anfängt zu arbeiten, erfahren Sie von Ihm, was genau gemacht werden muss. Er erklärt, was repariert oder gewechselt werden muss, und nennt Ihnen auch sogleich den Preis. Somit können Sie den Prozess vollständig kontrollieren, denn wir sind für Ehrlichkeit mit den Kunden.								</p>								<p><b>Schlösser reparieren</b>								Die Gründe dafür, wieso die Tür nicht aufgeht, können verschieden sein. Ein einfacher, aber nicht seltener Grund ist, dass das Schloss einfach klemmt. Unser Fachmann findet die Ursache sofort, schlägt Ihnen die schnellste und für Sie günstigste Lösung vor. So kann das Schloss öfters ganz einfach repariert werden, ohne dass man es gleich ganz wechseln muss.								</p> 
                                </div>
                                <div className="content-more__more">
                                    <div className="content-more__more-icon">
                                        <picture>
                                            <source srcset="img/icons/more.webp" type="image/webp"/><img src="img/icons/more.png"
                                                alt=""/></picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="locations-block section">
                        <div className="_container">
                            <h2 className="block-title text--align-center">Locksmith location</h2>
                            <div className="locations-block__items">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="locations-block__item location">
                                            <div className="location__name text--color-underline">London</div>
                                            <div className="location__district">
                                                <div className="location__district-name">West London</div>
                                                <ul className="location__towns">
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                </ul>
                                            </div>
                                            <div className="location__district">
                                                <div className="location__district-name">North-west London</div>
                                                <ul className="location__towns">
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="locations-block__item location">
                                            <div className="location__name text--color-underline">London</div>
                                            <div className="location__district">
                                                <div className="location__district-name">West London</div>
                                                <ul className="location__towns">
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                </ul>
                                            </div>
                                            <div className="location__district">
                                                <div className="location__district-name">North-west London</div>
                                                <ul className="location__towns">
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="locations-block__item location">
                                            <div className="location__name text--color-underline">London</div>
                                            <div className="location__district">
                                                <div className="location__district-name">West London</div>
                                                <ul className="location__towns">
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                </ul>
                                            </div>
                                            <div className="location__district">
                                                <div className="location__district-name">North-west London</div>
                                                <ul className="location__towns">
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-3">
                                        <div className="locations-block__item location">
                                            <div className="location__name text--color-underline">London</div>
                                            <div className="location__district">
                                                <div className="location__district-name">West London</div>
                                                <ul className="location__towns">
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                </ul>
                                            </div>
                                            <div className="location__district">
                                                <div className="location__district-name">North-west London</div>
                                                <ul className="location__towns">
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                    <li className="location__town"> <a className="location__link" href="#">Euston
                                                            w12</a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text--align-center"> <a href="#" className="btn btn--primary">More...</a> </div>
                        </div>
                    </section>
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
                </main>
                <Footer />
            </div>

        );
    }
}