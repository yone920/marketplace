import React, { Component } from 'react';
import { connect } from 'react-redux';
import { grabSingleProduct } from '../redux/actions';




class ProductList extends Component {


    handleClick = () => {
        this.props.grabSingleProduct(this.props)
        this.props.history.push("/product")
        console.log(this.props)
    }

    render() {
        
        return (
            <div onClick={this.handleClick}>
                <ul>
                    <li>
                    {this.props.product.name}
                    </li>
                </ul>
                
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    grabSingleProduct: (singleProduct) => dispatch(grabSingleProduct(singleProduct))
})



export default connect(null, mapDispatchToProps)(ProductList);