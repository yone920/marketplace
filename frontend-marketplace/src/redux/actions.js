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

// Fetch categories and set the state
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
    const userId = data.user.id  
    const currentOrder = data.user.current_order
    const productId = data.product.id
    let quantity = data.quantity



    if (currentOrder === null) {
        // Create new Order
        console.log("current order ",  currentOrder);
        
        let config4 = {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({user_id: userId, product_id: productId})
        }
        
        fetch("http://localhost:3000/orders/neworder", config4)
            .then(rsp => rsp.json())
            .then(data => {
                const order = {...data.order, order_items: data.order_items}
                dispatch({ type: "NEW_ORDER", cart: order}) 
                dispatch({ type: "UPDATE_CURRENT_USER", current_site_user: data.user}) 
            }) 
    } else {
        console.log("current order  else",  currentOrder);
            
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

    }

