import React from 'react';
import some_icons from '../../img/some-icons.png';

const Footer = () => {
        return (
            <footer className="footer section ">
                <div className="footer__content ">
                    <div className="row">
                        <div className="footer-info col-lg-4 col-sm-12">
                            <p>Emergency Locksmith 24<br/> 020 8059 5259 <br/> info@emergency-locksmith-24.co.uk</p>
                            <div className="footer__logo">
                                <img src={some_icons} alt="xxx" className="footer-logo__img"/>
                            </div>
                            <p>© 2020 Emergency-locksmith-24.co.uk</p>
                        </div>
                        <div className="footer-adress col-lg-4 col-sm-12">
                            <p>Our office:</p>
                            <p>179 Queens Dr, Liverpool L15 6XS</p>
                            <div className="sitemap-a">
                                <a href="">Sitemap</a>
                                <a href="">Disclaimer</a>
                            </div>

                        </div>
                        <div className="footer-services col-lg-4 col-sm-12">
                            <ul className="row">
                                <li className="col-6">Emergency locksmith service </li>
                                <li className="col-6">Domestic locksmith</li>
                                <li className="col-6">Commercial locksmith</li>
                                <li className="col-6">Lock repair</li>
                                <li className="col-6">Lock change</li>
                                <li className="col-6"> Lock installation </li>
                                <li className="col-6">Burglary repairs</li>
                                <li className="col-6">Locked out service</li>
                                <li className="col-6"> Key copy </li>
                                <li className="col-6">Safe locksmith</li>
                                <li className="col-6">Window lock repair </li>
                                <li className="col-6">Window lock change</li>
                                <li className="col-6"> Window lock installation </li>
                                <li className="col-6">Garage door lock repair</li>
                                <li className="col-6">Garage door lock change</li>
                                <li className="col-6">Garage door lock installation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };
export default Footer;