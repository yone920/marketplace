export const userPostFetch = user => {
    return dispatch => {
        return fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.token = data.token
                    dispatch(loginUser(data.user))
                    // this.props.history.goBack()
                }
            });
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})



export const userLoginFetch = user => {
    console.log(user)
    
    return dispatch => {
        return fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.token = data.token
                    dispatch(loginUser(data.user))
                    console.log(data);
                    
                    // this.props.history.goBack()
                }
            });
    }
}

export const getProfileFetch = () => {
    return dispatch => {
        const token = localStorage.token
        if (token) {
            fetch('http://localhost:3000/profile', {
                headers: {
                    Authorization: token
                }
            })
            .then(res => res.json())
            .then(profileData => {
                // debugger
                dispatch(loginUser(profileData))
            })
        }
    }
}


export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})


export const fetchCategories = () => dispatch => {
    fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(categoriesJson => {
            dispatch({ type: "GET_CURRENT_CATEGORIES", categories: categoriesJson})
            
        })
}

// export const fetchedCategories = () => {
//     GET_CURRENT_CATEGORIES
// }

// export const addToCart = (cartData) => dispatch => {
//     dispatch({ type: 'ADD_TO_CART', data: cartData })
// }

export const fetchProducts = () => dispatch => {
    fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(productsJson => {
            dispatch({ type: "GET_CURRENT_PRODUCTS", products: productsJson})
            
        })
}


export const grapSingleCategoy = (singleCategory) => dispatch => {
    dispatch({ type: "GET_SINGLE_CATEGORY", category: singleCategory })
}


export const grabSingleProduct = (singleProduct) => dispatch => {
    dispatch({ type: "GET_SINGLE_PRODUCT", product: singleProduct})
}












// Add to cart action //
export const addToCart = data => dispatch => {
    console.log(data)
    const userId = data.user.id  
    const currentOrder = data.user.current_order
    const productId = data.product.id
    let quantity = data.quantity
    console.log(quantity)

    if (currentOrder === null) {
        // Create new Order
        let config = {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({user_id: userId})
        }
        
        fetch("http://localhost:3000/orders", config)
            .then(rsp => rsp.json())
            .then(data => updateNewOrder(data, productId, quantity)) 
        

    } else {
        let config3 = {
            method: "POST",
            headers: {
              'Content-Type':'application/json',
              'Accept':'application/json'
            },
            body: JSON.stringify({order_id: currentOrder, product_id: productId, quantity: quantity})
          }
        
        fetch("http://localhost:3000/order_items", config3)
            .then(rsp => rsp.json())
            .then(data => console.log(data)) 
    }


    // Calleback from if currentOrder === NULL
    const updateNewOrder = (data, productId, quantity) => {
        console.log(quantity);
        
        
        //create order Item
        let config2 = {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({order_id: data.id, product_id: productId, quantity: quantity})
        }
        
        fetch("http://localhost:3000/order_items", config2)
        // .then(rsp => rsp.json())
        // .then(data => console.log(data)) 
        

        // Fetch for the Order and update cart state
        console.log(data);
        fetch(`http://localhost:3000/orders/${data.id}`)
            .then(rsp => rsp.json())
            .then(orderJson => console.log(orderJson))
        // dispatch({ type: "NEW_ORDER", cart: data})
    }

}




        // Set current order attribute of the current site user 
        // let config = {
        //     method: "PATCH",
        //     headers: {
        //       'Content-Type':'application/json',
        //       'Accept':'application/json'
        //     },
        //     body: JSON.stringify({current_order: data.id})
        //   }
        //   fetch(`http://localhost:3000/users/${userId}`, config)
        //     .then(rsp => rsp.json())
        //     .then(data => dispatch({ type: "UPDATE_CURRENT_USER", current_site_user: data}))