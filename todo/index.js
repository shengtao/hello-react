import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

// createStore 接受 reducer 参数
// 返回 redux store：holding the state of your app
// {subscribe, dispatch, getState}
let store = createStore(todoApp)

render(
    // use a special React Redux component called <Provider>
    // to magically make the store available to all container components
    // in the application without passing it explicitly.
    // You only need to use it once when you render the root component:
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)