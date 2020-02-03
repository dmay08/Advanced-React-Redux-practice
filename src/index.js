import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import reducers from './reducers' // from 'reducer' FOLDER >> gives us the 'index.js' by default
import App from './components/App'

// ReactDOM.render(
//     <Provider store={createStore(reducers, {})}>
//         <App />
//     </Provider >,
//     document.querySelector('#root')
// )

// --------------------------------------- commented out after making <Root.js> and creating the store there, then wrapping this in the <Root.js> HOC ---------------------------------------
import Root from './Root'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
)