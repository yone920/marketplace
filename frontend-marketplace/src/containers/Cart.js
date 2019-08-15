import React, { Component } from 'react'
import {connect} from 'react-redux';
import CartItem from '../components/CartItem'

class Cart extends Component {

    mapOverCartItems = () => {        
        return this.props.cart.map((item) => {
            return <CartItem history={this.props.history} item={item} />
        })
    }


    render() {        
        return (
            <div>
                <h3>This is Cart</h3>
              {this.mapOverCartItems()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
})


export default connect(mapStateToProps)(Cart)