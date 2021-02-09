import React, { Component } from 'react';

import Header from '../header';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Areas from '../../pages/Areas';
import Blog from '../../pages/Blog';
import Contact from '../../pages/Contact';
import Price from '../../pages/Price';
import Services from '../../pages/Services';
import SingleArea from '../../pages/SingleArea';
import Error from '../../pages/Error';

import {Route, Switch} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Switch>
                    <Route  exact path='/' component={Home}/>
                    <Route  exact path='/about' component={About}/>
                    <Route  exact path='/areas' component={Areas}/>
                    <Route  exact path='/blog' component={Blog}/>
                    <Route  exact path='/contact' component={Contact}/>
                    <Route  exact path='/price' component={Price}/>
                    <Route  exact path='/services' component={Services}/>
                    <Route  exact path='/areas/:slug' component={SingleArea}/> 
                    <Route  component={Error}/> 
                </Switch>
            </div>

        );
    }
}