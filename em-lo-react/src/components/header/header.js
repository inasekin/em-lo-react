import React from 'react';

const Header = () => {
        return (
            <header className="header">
                <div className="header__content _container">
                    <div className="header__right">
                        <div className="site-logo header__site-logo">
                            <picture>
                                <img className="site-logo__image"
                                    src="img/logo.png" alt="" />
                            </picture>
                        </div>
                    </div>
                    <div className="header__left"> <button className="icon-menu btn btn--secondary"> <span></span> <span></span>
                            <span></span> </button>
                        <div className="navbar header__navbar">
                            <ul className="navbar__wrapper">
                                <li className="navbar__item active"> <a href="#" className="navbar__link">Home</a> </li>
                                <li className="navbar__item"> <a href="#" className="navbar__link">Our services</a> </li>
                                <li className="navbar__item"> <a href="#" className="navbar__link">Locations</a> </li>
                                <li className="navbar__item"> <a href="#" className="navbar__link">Contact us</a> </li>
                            </ul>
                        </div>
                        <div className="header__callback"> 
                            <a href="tel:02080595259" className="btn btn--secondary">020 8059 5259</a> 
                        </div>
                    </div>
                </div>
            </header>
        );
    };
export default Header;


