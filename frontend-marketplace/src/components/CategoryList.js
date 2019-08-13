import React, { Component } from 'react'
import {connect} from 'react-redux';
import { grapSingleCategoy } from '../redux/actions'

class CategoryList extends Component {
    
    handleClick = event => {
        this.props.grapSingleCategoy(this.props.category)
        this.props.history.push("/category")
    }
    
    render() {
        

        return (
            <div >
                <ul key={this.props.category.id} onClick={this.handleClick}>
                    <li>{this.props.category.name}</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories
})

const mapDispatchToProps = dispatch => ({
    grapSingleCategoy: (singleCategory) => dispatch(grapSingleCategoy(singleCategory))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)