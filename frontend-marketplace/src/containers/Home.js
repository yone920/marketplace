import React, { Component } from 'react'
import {logoutUser} from '../redux/actions';
import {connect} from 'react-redux';
import CategoryList from '../components/CategoryList'
import '../stylesheet/home.scss'


class Home extends Component {

    

    mapOverCategories = () => {   
        if  (this.props.categories.categories) { 
        return this.props.categories.categories.map((category) => {
            return <CategoryList key={category.id} history={this.props.history} category={category} />
        })
    }
    }

   
    
    render() {        
        return (
            <div className="home-div">
                <div className="home-categories">
                <h3>Categories</h3>
                    {this.mapOverCategories()}
                </div>
                <div className="home-products">
                    <h4>Peodcuts</h4>
                </div>
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