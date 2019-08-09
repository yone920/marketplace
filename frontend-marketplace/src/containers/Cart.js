import React, { Component } from 'react'
import {connect} from 'react-redux';

class Cart extends Component {


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
                <h3>This is Cart</h3>
                <h3>Welcome {this.props.current_user ? this.props.current_user.name : ""}</h3>
                {this.loginButton()}
                {this.signUpButton()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    current_user: state
})


export default connect(mapStateToProps)(Cart)