import React from "react";
import Footer from '../components/footer';
import Banner from '../components/banner';
import Advantages from '../components/advantages';
import Callback from '../components/callback';
import ContactBlock from '../components/contact-block';

const Home = () => {

    return ( 
        <>
            <main className="page">
                    <Banner title="Emergency Locksmith 24" features1="24/7, 365 Days a Year" 
                    features2="From £ 39" features3="At your door in 20 min" telefone="020 8059 5259">
                    </Banner>
                    <Advantages />
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
                    <Callback/>
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
                                            <source srcset="../img/icons/more.webp" type="image/webp"/><img src="../img/icons/more.png"
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
                    <ContactBlock />
            </main>
            <Footer />
        </>
    );
  
};
  
export default Home;