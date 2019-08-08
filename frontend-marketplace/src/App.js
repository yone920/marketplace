import React, { Component } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import ProductPage from './containers/ProductPage'
import CategoryPage from './containers/CategoryPage'
import Cart from './containers/Cart'
import CheckOut from './containers/CheckOut'
import ReportPage from './containers/ReportPage'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './containers/Profile';
import OhhPageNotFount from './components/OhhPageNotFount'
import { createStore } from 'redux'

console.log(createStore)

const store = createStore((preveState) => {
    return { current_user: "Yonas", foo: "bar"}
})
debugger

export default class App extends Component {

  state = {
    current_user: {}
  }

  clearCurrentUser = () => {
    this.setState({
      current_user: {}
    })
  }

  componentDidMount() {
    if (localStorage.token) {
      fetch('http://localhost:3000/profile', {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(res => res.json())
      .then(profileData => this.setState({current_user: profileData}
))

    }
  }



  render() {
    console.log(this.state.current_user)
    
    return (
        <Switch>
          {/* <Route path='/login' component={Login}/> */}

          <Route 
            path='/login' 
            render={(routerProps) => {
              return (
                <Login 
                  {...routerProps}
                  currentUser={this.state.current_user}
                />
              )
            }}
          />

          <Route 
            path='/profile' 
            render={(routerProps) => {
              return (
                <Profile 
                  {...routerProps}
                  hello="chesse"
                />
              )
            }}
          />

          <Route path='/signup' component={SignUp} />

          <Route 
            path='/category' 
            render={(routerProps) => {
              return (
                <CategoryPage 
                  {...routerProps}
                  currentUser={this.state.current_user}
                />
              )
            }}
          />


          <Route 
            path='/product' 
            render={(routerProps) => {
              return (
                <ProductPage 
                  {...routerProps}
                  currentUser={this.state.current_user}
                />
              )
            }}
          />


          <Route 
            path='/cart' 
            render={(routerProps) => {
              return (
                <Cart 
                  {...routerProps}
                  currentUser={this.state.current_user}
                />
              )
            }}
          />

          <Route path='/checkout' component={CheckOut} />
          <Route path='/report' component={ReportPage} />

          <Route exact
            path='/' 
            render={(routerProps) => {
              return (
                <Home 
                  {...routerProps}
                  currentUser={this.state.current_user}
                  clearCurrentUser={this.clearCurrentUser}
                />
              )
            }}
          />

        
          <Route component={OhhPageNotFount} />
        </Switch>
    )
  }
}


