import React, { Component } from 'react'
import {connect} from 'react-redux';

class CategoryList extends Component {
    
    handleClick = event => {
        this.props.history.push(`/categories/${this.props.category.id}`)
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


export default connect(mapStateToProps)(CategoryList)