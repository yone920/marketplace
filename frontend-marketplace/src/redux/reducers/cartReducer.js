const initialState = []

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'NEW_ORDER':
            return action.cart 
        // case 'ADD_PRODUCT_TO_CART':
        //     // debugger 
        //     return [...state, action.cart]

        
        default:
            return state
    }
}