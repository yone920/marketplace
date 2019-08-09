import React, { Component } from 'react'
import {connect} from 'react-redux';
import {userPostFetch} from '../redux/actions';

class SignUp extends Component {
    
    state = {
        name: "",
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
        this.props.userPostFetch(this.state)
        this.props.history.push('/')
        // fetch('http://localhost:3000/signup', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type':'application/json',
        //         'Accept':'application/json'
        //       },
        //       body: JSON.stringify(this.state)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if (data.token) {
        //         localStorage.token = data.token
        //         this.props.history.goBack()
        //     }
        // });
        
    }
    render() {
        console.log(this.props)
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}  placeholder='Name'/>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange}  placeholder='Email'/>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}  placeholder='password' />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { user: state }
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})


export default connect(null, mapDispatchToProps)(SignUp)