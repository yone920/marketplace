import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions';


class CartItem extends Component {

    handleClick = event => {
        this.props.removeFromCart(this.props.item.id)
    }

    returnImage = () => {
        return `../img/${parseInt(this.props.item.product.main_image)}.jpg`
    }

    render() {    
        console.log(this.props)
            
        return (
            <Fragment>
                <div key={this.props.item.id} className="cart-item">
                    <div className="cart-item-image">
                        <img src={this.returnImage()} alt="A banana that looks like a bird"></img>
                    </div>
                    <div className="cart-item-details">
                        <div className="cart-item-name">
                            <h3>{this.props.item.product.name}</h3>
                        </div>
                        <div className="cart-item-remove">
                            <button onClick={this.handleClick}>Remove</button>
                        </div>
                    </div>
                    <div className="cart-item-price-qty">
                        <div className="cart-item-price">
                            <h2>${this.props.item.item_price}</h2>
                        </div>
                        <div className="cart-item-qty">
                            <p>Qty: {this.props.item.quantity}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    removeFromCart: (item_id) => dispatch(removeFromCart(item_id))

})

export default connect(null, mapDispatchToProps)(CartItem)

// mapStateToProps, mapDispatchToProps