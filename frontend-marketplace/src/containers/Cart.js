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
                <h3>This is Cart</h3>


                <table className="ui single fixed striped table">
                    {/* <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Total Working Hours</th>
                            <th>Total Work Done</th>
                            <th>Task Progress</th>
                            <th>Update Progress</th>
                        </tr>
                    </thead> */}
                    {this.mapOverCartItems()}
                </table>
                     {this.totalPrice()}
                   

                    {/* {this.mapOverCartItems()} */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.current_site_user
})


export default connect(mapStateToProps)(Cart)