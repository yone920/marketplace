import React, { Component } from 'react'
import {connect} from 'react-redux';

import '../stylesheet/navbar.scss'
import ProductList from './ProductList'

class CategoryPage extends Component {

    mapOverProducts = () => {  
        if  (this.props.category.products) {
        return this.props.category.products.map((product) => {
            return <ProductList history={this.props.history} product={product} />
        })
    }
    }


    render() {        
        return (
            <div>
                {this.mapOverProducts()}
                
            </div>
        )
    }
}


    const mapStateToProps = state => ({
        // current_site_user: state
        state: state,
        category: state.categories.category
    })

export default connect(mapStateToProps)(CategoryPage)