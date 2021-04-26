import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router';
import AuthenticatedService from './AuthenticatedService.js'

 class HeaderComponent extends Component {

    render() {

        let isLoggedIn = AuthenticatedService.isUserLoggedIn();
        console.log(isLoggedIn);
        return (

            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                   <div> <a className="navbar-brand">Cheapsy</a></div>
                    <ul className="navbar-nav">
                    {  isLoggedIn && <li className="nav-link"><Link to="/">Home</Link></li> }
                    {  isLoggedIn && <li className="nav-link"><Link to="/products">Products</Link></li> }
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        { !isLoggedIn && <li className="nav-link"><Link to="/login">Login</Link></li> }
                        {  isLoggedIn &&  <li className="nav-link" onClick={AuthenticatedService.logout}><Link to="/logout">Logout</Link></li> }
                    </ul>
                </nav>
            </header>

        )
    }
}

export default withRouter(HeaderComponent);