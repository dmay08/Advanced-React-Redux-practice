import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
// import reduxPromise from 'redux-promise'
import async from './middlewares/async'

export default (props) => {
    
    const store = createStore(
        reducers,
        {}, // {} is initial state (empty object)
        applyMiddleware(async)
        // applyMiddleware(reduxPromise)
    ) 

    return (
        <Provider store={store} >
            {props.children}
        </Provider>
    )
}

// <Root.js> is a HOC that we will use to wrap <App /> (in <index.js>) to give <App /> access to the Provider 