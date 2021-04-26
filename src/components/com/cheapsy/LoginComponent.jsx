import React, { Component } from 'react';
import AuthenticatedService from './common/AuthenticatedService.js'
class LoginComponent extends Component {

    constructor() {

        super();
        this.state = {

            username: 'cheapsy',
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

        if (this.state.username === 'cheapsy' && this.state.password === 'dummy') {
            AuthenticatedService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)

            // this.setState({
            //     showLoginSuccess: true,
            //     hasLoginFailed: false
            // })
        }

        else {
            this.setState({
                showLoginSuccess: false,
                hasLoginFailed: true
            })
        }
    }

    render() {
        return (
            <div>
                <br/>
              { /* <ShowInvalidCredentialMessage hasLoginFailed={this.state.hasLoginFailed} />
                <LoginSuccessfulMessage showLoginSuccess={this.state.showLoginSuccess} />*/}
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