import React, { Component } from 'react'

export default class ProductPage extends Component {

    loginButton = () => {
        return localStorage.token ? null : <button onClick={this.handleClick}>Login</button>;
    }
    handleClick = event => {
        this.props.history.push('./login')
    }
    signUpButton = () => {
        return localStorage.token ? null : <button onClick={this.handleSignUpClick}>Signup</button>;
    }
    handleSignUpClick = event => {
        this.props.history.push('./signup')
    }
    

    render() {
        return (
            <div>
                <h3>This is Product page!!</h3>
                <h3>Welcome {this.props.currentUser.name}</h3>
                {this.loginButton()}
                {this.signUpButton()}
            </div>
        )
    }
}
