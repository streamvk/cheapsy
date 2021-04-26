import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import HomeComponent from './HomeComponent'
import ErrorComponent from './ErrorComponent'
import ProductsComponent from './product/ProductsComponent'
import FooterComponent from './common/FooterComponent';
import HeaderComponent from './common/HeaderComponent';
import LogoutComponent from './LogoutComponent';
import AuthenticatedRoute from './common/AuthenticatedRoute.jsx';

class CheapsyApp extends Component {

    render() {

        return (
            <div className="CheapsyApp">

                <Router>
                    <>
                    <HeaderComponent/>
                       <Switch>
                            <Route exact    path="/" component={HomeComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/products" component={ProductsComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <Route  component={ErrorComponent} />
                       /</Switch>
                       <FooterComponent/>
                    </>
                </Router>
            </div>

        );
    }
}

export default CheapsyApp;