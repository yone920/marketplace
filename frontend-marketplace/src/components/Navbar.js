import React, { Component } from 'react'
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    // Controls login button
    loginButton = () => {
        return localStorage.token ? null : <li><Link href=" " onClick={this.handleClick}>Login</Link></li>;
    }
    handleClick = event => {
        this.props.history.push('/login')
    }

    // Controls signup button
    signUpButton = () => {
        return localStorage.token ? null : <li><Link href=" "  onClick={this.handleSignUpClick}>Signup</Link></li> ;
    }
    handleSignUpClick = event => {
        this.props.history.push('/signup')
    }

    // Controls logout button
    signOutButton = () => {
        return localStorage.token ?      <li><Link href=" " onClick={this.handleSignOutClick}>SignOut</Link></li>
     : null ;
    }
    handleSignOutClick = event => {
        localStorage.clear()
        this.props.logoutUser()
        this.props.history.push('/')
        // this.props.clearCurrentUser()
    }

    handleCartClick = event => {
        this.props.history.push('/cart')
    }

    handleHomeClick = event => {
        this.props.history.push('/')
    }
    


    render() {
        return (
            <div className="navbar2">
                <ul>
                    <li><Link onClick={this.handleHomeClick}>Home</Link></li>
                    {this.loginButton()}
                    {this.signUpButton()}
                    {this.signOutButton()}
                    {/* <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li> */}
                    {this.props.current_site_user.name ? <li><Link  className="username" href=" ">Welcome {this.props.current_site_user.name}</Link></li> : null }
                    {/* <li><a href=" " onClick={this.handleHomeClick}>Home</a></li> */}
                    <li><Link className=""  onClick={this.handleCartClick}>Cart</Link></li>
                </ul>
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