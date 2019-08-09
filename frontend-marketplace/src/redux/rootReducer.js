const initialState = { 
    
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            // debugger 
            return action.payload

        case 'LOGOUT_USER':
            return {}
        
        default:
            return state
    }
}

// combineReducers({
//     user: userReducers
// })

