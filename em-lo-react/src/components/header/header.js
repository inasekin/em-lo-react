import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__content ">
                    <div className="site-logo header__site-logo">
                        <Link to="/">
                            <img src={logo} className="site-logo__image" alt="logo" />
                        </Link>
                    </div>
                    <button className="icon-menu btn btn--secondary">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="navbar header__navbar">
                        <ul className="navbar__wrapper">
                            <li className="navbar__item active">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="navbar__item ">
                                <Link to="/about"  className="navbar__link">About us</Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/services"  className="navbar__link">All services</Link>
                            </li>
                            <li className="navbar__item ">
                                <Link to="/prices"  className="navbar__link">Prices</Link>
                            </li>
                            <li className="navbar__item ">
                                <Link to="/areas"  className="navbar__link">Areas we cover</Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/blog"  className="navbar__link">Blog</Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/contact"  className="navbar__link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header__callback">
                        <a href="tel:02080595259" className="btn btn--secondary">020 8059 5259</a>
                    </div>
                </div>
            </header>
        );
    }
};

