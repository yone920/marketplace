import React, { Component } from 'react'
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions';
import { withRouter } from 'react-router-dom'

class Navbar extends Component {

    // Controls login button
    loginButton = () => {
        return localStorage.token ? null : <li ><a onClick={this.handleClick}>Login</a></li>;
    }
    handleClick = event => {
        this.props.history.push('./login')
    }

    // Controls signup button
    signUpButton = () => {
        return localStorage.token ? null : <li ><a onClick={this.handleSignUpClick}>Signup</a></li>;
    }
    handleSignUpClick = event => {
        this.props.history.push('./signup')
    }

    // Controls logout button
    signOutButton = () => {
        return localStorage.token ? <li ><a onClick={this.handleSignOutClick}>SignOut</a></li> : null ;
    }
    handleSignOutClick = event => {
        localStorage.clear()
        this.props.logoutUser()
        this.props.history.push('./')
        // this.props.clearCurrentUser()
    }

    


    render() {
        return (
            <div>
                <ul className="navbar">
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">Profile</a></li>
                    {this.loginButton()}
                    {this.signUpButton()}
                    
                    {this.props.current_user.name ? <li className="username">Welcome {this.props.current_user.name}</li> : null }
                    {this.signOutButton()}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    current_user: state
})

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))