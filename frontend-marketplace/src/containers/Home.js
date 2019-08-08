
import React, { Component } from 'react'

export default class Home extends Component {

    
    loginButton = () => {
        return localStorage.token ? null : <button onClick={this.handleLoginClick}>Login</button>;
    }

    signUpButton = () => {
        return localStorage.token ? null : <button onClick={this.handleSignUpClick}>Signup</button>;
    }
    signOutButton = () => {
        return localStorage.token ? <button onClick={this.handleSignOutClick}>Signout</button> : null ;
    }
    
    handleLoginClick = event => {
        this.props.history.push('./login')
    }

    handleSignUpClick = event => {
        this.props.history.push('./signup')
    }
    handleSignOutClick = event => {
        localStorage.clear()
        this.props.history.push('./')
        this.props.clearCurrentUser()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <p>Home Page</p>
                <h3>Welcome {this.props.currentUser.name}</h3>
                {this.loginButton()}
                {this.signUpButton()}
                {this.signOutButton()}
            </div>
        )
    }
}
