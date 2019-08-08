import React, { Component } from 'react'

export default class Login extends Component {

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
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
              },
              body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            if (data.token) {
                localStorage.token = data.token
                
                this.props.history.goBack()
            }
        });
        // this.props.grabLoginInfo(this.state)
    }
    render() {  
        console.log(this.props)
              
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
