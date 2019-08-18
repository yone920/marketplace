import React, { Component } from 'react'
import {connect} from 'react-redux';
import CartItem from '../components/CartItem'
import '../stylesheet/cart.scss'


class Cart extends Component {


    
    current_order() {
        if (this.props.user.orders) {
            return this.props.user.orders.find(order => { 
                console.log(order)
                return this.props.user.current_order === order.id
            })
        }
    }

    totalPrice() {
        if (this.props.user.orders) {
           return <h3>Total Price: {this.current_order().total_price}</h3>
        }
    }

    
    mapOverCartItems = () => {   
        if (this.current_order()) {     
        return this.current_order().order_items.map((item) => {
            return <CartItem key={item.id} history={this.props.history} item={item} />
        })
    }
    }
    
    render() {  
        // const order = this.current_order()
        // debugger
        // const order_items = order.order_items
        // console.log(order_items)
        return (
            <div className="cart-container">
                <div className="cart-section">
                    <h3>My Cart</h3>
                        {this.mapOverCartItems()}
                    <div className="cart-summary-div">
                        <div className="total-price">
                            {this.totalPrice()}
                        </div>
                        <div className="checkout-button">
                            <button>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.current_site_user
})


export default connect(mapStateToProps)(Cart)