import React, { Component, Fragment } from 'react'
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
import { connect } from 'react-redux'
import {getProfileFetch} from './redux/actions';
import Navbar from './components/Navbar';

class App extends Component {

  // state = {
  //   current_user: {}
  // }

  // clearCurrentUser = () => {
  //   this.setState({
  //     current_user: {}
  //   })
  // }

  componentDidMount() {
    if (localStorage.token) {
      this.props.getProfileFetch()

    }
  
}



  render() {
    console.log(this.props)
    
    return (
        <Fragment>

          <Navbar />
        <Switch>
  
          {/* <Route path='/login' component={Login}/> */}

          <Route 
            path='/login' 
            render={(routerProps) => {
              return (
                <Login 
                  {...routerProps}
                  
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
                  
                  clearCurrentUser={this.clearCurrentUser}
                />
              )
            }}
          />

        
          <Route component={OhhPageNotFount} />
        </Switch>
      </Fragment>
    )
  }
}

// const mapStateToProps = (state, props) => {
//     return { current_user: state.current_user}
// }

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, mapDispatchToProps)(App) 