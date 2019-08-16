import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../stylesheet/navbar.scss'
import ProductList from './ProductList'
import { grabACategory } from '../redux/actions';


class CategoryPage extends Component {

    componentDidMount() {
            this.props.grabACategory(this.props.location.pathname)
        }
        
        
        mapOverProducts = () => {  
            if  (this.props.category.products) {
            return this.props.category.products.map((product) => {
                return <ProductList key={product.id} history={this.props.history} product={product} />
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
        category: state.category
    })

    const mapDispatchToProps = dispatch => ({
        grabACategory: (category_id) => dispatch(grabACategory(category_id))
    }) 

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)