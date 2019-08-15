import React, { Component } from 'react'
import { connect } from 'react-redux';


class CartItem extends Component {

    handleClick = event => {
        
    }

    render() {        
        return (
            <div>
                {/* <h5>{this.props.item.name}</h5> */}
                <button onClick={this.handleClick()}>Remove from Cart</button>
            </div>
        )
    }
}




export default connect()(CartItem)

// mapStateToProps, mapDispatchToProps