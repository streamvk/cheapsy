import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import HelloWorldService from './api/HelloWorldService.js';

class WelcomeComponent extends Component {

    constructor() {
        super();
        this.state = {
            welcomeMessage: ''
        }
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.retrieveMessage = this.retrieveMessage.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    render() {

        return (

            <>
                <h1>Welcome</h1>
                <div>

                    Hey {this.props.match.params.name}. Please do order from <Link to="/products">here</Link>
                    <div className="container">
                        Click here to get message from backend
                    <button onClick={this.retrieveMessage} className="btn btn-success"> Say Hello</button>

                    </div>
                </div>
                <div className="container"> {this.state.welcomeMessage}</div>

            </>
        )
    }

    retrieveMessage() {

      HelloWorldService.executeHelloWorldService()
     .then(response => this.handleSuccessfulResponse(response))

    // HelloWorldService.getProductById(1)
   // .then(response => this.handleSuccessfulResponse(response))
    //.catch(error => this.handleError(error))

    }

    handleSuccessfulResponse(response) {
        this.setState({ welcomeMessage : response.data.description })
    }

    handleError(error){
        this.setState({welcomeMessage : error.response.data.status})
    }
}

export default WelcomeComponent;