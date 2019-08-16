import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../stylesheet/navbar.scss'
import { Menu } from 'semantic-ui-react'


class CategoryList extends Component {
    
    handleClick = event => {
        this.props.history.push(`/categories/${this.props.category.id}`)
    }
    
    render() {
        

        return (
            <div className="home-sidebar">
                {/* <ul key={this.props.category.id} onClick={this.handleClick}>
                    <li>{this.props.category.name}</li>
                </ul> */}
                
                <div className="ui secondary vertical pointing menu">
                    <a key={this.props.category.id} onClick={this.handleClick} className="active item">
                    {this.props.category.name}
                    </a>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories
})


export default connect(mapStateToProps)(CategoryList)