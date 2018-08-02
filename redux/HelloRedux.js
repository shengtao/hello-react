// import {createStore} from 'redux';
const {createStore, compose} = require('redux');

/**
 * pure reducer
 *
 * takes state and action as arguments, and returns the next state of the app
 *
 * @param state
 * @param action
 * @returns {number}
 */
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state -1;
        default:
            return state;
    }
};

const enhancer1 = function (...arg) {
    return function (arg) {
        return arg;
    };
}
const enhancer2 = function (...arg) {
    return 2;
}

let store = createStore(counter, 10);
console.log(store);

store.subscribe(() =>
    // getState is new state
    console.log(store.getState())
)

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: ''});