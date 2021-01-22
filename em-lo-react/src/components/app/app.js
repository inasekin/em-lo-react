import React, { Component } from 'react';

import Header from '../header';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Areas from '../../pages/Areas';
import Blog from '../../pages/Blog';
import Contact from '../../pages/Contact';
import Prices from '../../pages/Prices';
import Services from '../../pages/Services';

import {Route, Switch} from 'react-router-dom';

export default class App extends Component {
    render() {


        return (
            <div classNameName="wrapper">
                <Header />
                <Switch>
                    <Route  exact path='/' component={Home}/>
                    <Route  exact path='/about' component={About}/>
                    <Route  exact path='/' component={Areas}/>
                    <Route  exact path='/' component={Blog}/>
                    <Route  exact path='/contact' component={Contact}/>
                    <Route  exact path='/' component={Prices}/>
                    <Route  exact path='/' component={Services}/>
                </Switch>
            </div>

        );
    }
}