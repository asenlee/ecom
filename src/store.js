import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
})

// const initialState = {}

// const middleWare = [thunk]

const store = configureStore({reducer})
    // initialState,
    // composeWithDevTools(applyMiddleware(...middleWare)))

export default store