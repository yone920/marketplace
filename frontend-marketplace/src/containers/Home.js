import React, { Component } from 'react'
import {logoutUser} from '../redux/actions';
import {connect} from 'react-redux';
import CategoryList from '../components/CategoryList'


class Home extends Component {

    

    mapOverCategories = () => {        
        return this.props.categories.categories.map((category) => {
            return <CategoryList key={category.id} history={this.props.history} category={category} />
        })
    }

   
    
    render() {        
        return (
            <div>
                {this.mapOverCategories()}
            </div>
        )
    }
}

    const mapStateToProps = state => ({
        current_site_user: state,
        categories: state.categories
    })

    const mapDispatchToProps = dispatch => ({
        logoutUser: () => dispatch(logoutUser())

    })


export default connect(mapStateToProps, mapDispatchToProps)(Home)