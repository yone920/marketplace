import React, { Component } from 'react'
import {connect} from 'react-redux';
import {userLoginFetch} from '../redux/actions';


class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        
        event.preventDefault()
        this.props.userLoginFetch(this.state)
        this.props.history.push('/')
      
        // this.props.grabLoginInfo(this.state)
    }
    render() {                
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}  placeholder='Email'/>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}  placeholder='password' />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login)