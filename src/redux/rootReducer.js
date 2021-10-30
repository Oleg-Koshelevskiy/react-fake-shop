import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import productsLikeReducer from './productsLikeReducer'

const rootReducer = combineReducers({
    productsLikeState: productsLikeReducer,
    productsInCart: cartReducer,
})

export default rootReducer
