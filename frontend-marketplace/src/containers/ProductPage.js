import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';

class ProductPage extends Component {

    state = {
        product: this.props.product.product,
        user: this.props.user,
        quantity: 0
    }

    handleChange = event => {
        this.setState({quantity: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addToCart(this.state)
    }

    render() {
         
        return (
            <div>
            <h3>{this.props.product.product.name}</h3>
            {/* <button onClick={this.handleClick}>Add To Cart</button> */}
            <form onSubmit={this.handleSubmit}>
                <button type="submit">Add To Cart</button>
                <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}></input>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    product: state.product,
    user: state.current_site_user
})

const mapDispatchToProps = dispatch => ({
    addToCart: (singleProduct) => dispatch(addToCart(singleProduct))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)