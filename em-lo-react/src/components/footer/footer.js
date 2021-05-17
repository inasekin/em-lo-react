import React from 'react';
import some_icons from '../../img/some-icons.png';
import { Link } from "react-router-dom";

import items from "../../data-service";

const Footer = () => {
        return (
            <footer className="footer section ">
                <div className="footer__content ">
                    <div className="row">
                        <div className="footer-info col-lg-4 col-sm-12">
                            <p>Emergency Locksmith 24<br/> 020 8058 7698 <br/> info@emergency-locksmith-24.co.uk</p>
                            <div className="footer__logo">
                                <img src={some_icons} alt="xxx" className="footer-logo__img"/>
                            </div>
                            <p>© 2020 Emergency-locksmith-24.co.uk</p>
                        </div>
                        <div className="footer-adress col-lg-4 col-sm-12">
                            <p>Our office:</p>
                            <p>179 Queens Dr, Liverpool L15 6XS</p>
                            <div className="sitemap-a">
                                <Link to="/sitemap">Sitemap</Link>
                                <Link to="/disclaimer">Disclaimer</Link>
                            </div>

                        </div>
                        <div className="footer-services col-lg-4 col-sm-12">
                            <ul className="row">
                                {items.map(item => 
                                <li key={item.id + "_" + Math.random()} className="col-6">
                                    <a href={item.fields.url} key={item.id}>
                                        {item.fields.name}
                                    </a>
                                </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };
export default Footer;