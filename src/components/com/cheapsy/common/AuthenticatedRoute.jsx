import React, { Component } from 'react';
import { Redirect,  Route } from 'react-router-dom';
import AuthenticatedService from './AuthenticatedService'


class AuthenticatedRoute extends Component{

    render(){
        
            if(AuthenticatedService.isUserLoggedIn()){
               return  <Route {...this.props}/>
            }else{
               return <Redirect to = "/login"/>
            }
        
    }
}

export default AuthenticatedRoute;