import React, { Component } from 'react'
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions';
import { withRouter } from 'react-router-dom'

class Navbar extends Component {

    // Controls login button
    loginButton = () => {
        return localStorage.token ? null : <button  onClick={this.handleClick}>Login</button>;
    }
    handleClick = event => {
        this.props.history.push('./login')
    }

    // Controls signup button
    signUpButton = () => {
        return localStorage.token ? null : <button  onClick={this.handleSignUpClick}>Signup</button> ;
    }
    handleSignUpClick = event => {
        this.props.history.push('./signup')
    }

    // Controls logout button
    signOutButton = () => {
        return localStorage.token ?  <button  onClick={this.handleSignOutClick}>SignOut</button>
     : null ;
    }
    handleSignOutClick = event => {
        localStorage.clear()
        this.props.logoutUser()
        this.props.history.push('./')
        // this.props.clearCurrentUser()
    }

    handleCartClick = event => {
        this.props.history.push('./cart')
    }

    handleHomeClick = event => {
        this.props.history.push('./')
    }
    


    render() {
        return (
            <div className="navbar">
                {/* <ul className="navbar"> */}
                    {/* <li><a href=""> className="active" onClick={this.handleHomeClick}>Home</a></ li> */}
                    <button className="active" onClick={this.handleHomeClick}>Homee</button>
                    {/* <li><a href="">Profile</a></li> */}
                    {this.loginButton()}
                    {this.signUpButton()}
                    
                    {this.props.current_site_user.name ? <p className="username">Welcome {this.props.current_site_user.name}</p> : null }
                    {this.signOutButton()}
                    {/* <li><a href=""> onClick={this.handleCartClick} href="#">Cart</a></li> */}
                    <button onClick={this.handleCartClick} >Cartt</button>

                {/* </ul> */}
                {/* <div className="categories-nav-bar"></div> */}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    current_site_user: state.current_site_user
})

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))