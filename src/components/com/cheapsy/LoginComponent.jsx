import React, { Component } from 'react';
import AuthenticatedService from './common/AuthenticatedService.js'
class LoginComponent extends Component {

    constructor() {

        super();
        this.state = {

            username: ' ',
            password: '',
            hasLoginFailed: false,
            showLoginSuccess: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    loginClicked() {
        AuthenticatedService.executeBasicAuthentication(this.state.username,this.state.password)
        .then(  
           () => { 
               console.log('inside loginClicked then');
        AuthenticatedService.registerSuccessfulLogin(this.state.username,this.state.password);
        this.props.history.push(`/welcome/${this.state.username}`)
           })
        .catch( ()=>{
            console.log('inside loginClicked catch');
            this.setState({
                showLoginSuccess: false,
                hasLoginFailed: true
            })
        })

    }

    render() {
        return (
            <div>
                <br/>
                {this.state.hasLoginFailed && <div>Invalid Credential</div>}
                {this.state.showLoginSuccess &&  <div>Successful</div>}
                    User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
             Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button onClick={this.loginClicked}>Login</button>
                </div>
      
        );
    }
}


export default LoginComponent;