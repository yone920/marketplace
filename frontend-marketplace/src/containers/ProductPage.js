import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';
import { grabSingleProduct } from '../redux/actions'

class ProductPage extends Component {

    state = {
        quantity: 1
    }

    componentDidMount() {
        this.props.grabSingleProduct(this.props.location.pathname)
    }

    handleChange = event => {
        this.setState({quantity: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addToCart({...this.state, user: this.props.user, product: this.props.product})        
    }

    render() {
         
        return (
            <div>
            <h3>{this.props.product.name}</h3>
            <h3>{this.props.product.price_in_cents}</h3>
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
    addToCart: (singleProduct) => dispatch(addToCart(singleProduct)),
    grabSingleProduct:(product_id) => dispatch(grabSingleProduct(product_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)