import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions';


class CartItem extends Component {

    handleClick = event => {
        this.props.removeFromCart(this.props.item.id)
    }

    render() {    
        console.log(this.props)
            
        return (
            <Fragment>
                <tbody >
                    <tr key={this.props.item.id}>
                    <td>{this.props.item.product.image}</td>
                    <td>{this.props.item.product.name}</td>
                    <td>Qty: {this.props.item.quantity}</td>
                    <td>${this.props.item.item_price}</td>
                    <td><button onClick={this.handleClick}>Remove</button></td>
                    </tr>
                </tbody>
            </Fragment>
            //     <h5>{this.props.item.product.name}</h5>
            //     <button onClick={this.handleClick()}>Remove from Cart</button>
            // </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    removeFromCart: (item_id) => dispatch(removeFromCart(item_id))

})

export default connect(null, mapDispatchToProps)(CartItem)

// mapStateToProps, mapDispatchToProps