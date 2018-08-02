//import todos from '../todo/reducers/todos'
//import visibilityFilter from '../todo/reducers/visibilityFilter'

// `combineReducers`, a higher-order reducer (that combines other reducers!)
function combineReducers(reducers) {
    return function (state = {}, action) {
        return Object.keys(reducers).reduce((nextState, key) => {
            // Call every reducer with the part of the state it manages
            nextState[key] = reducers[key](state[key], action)
            return nextState
        }, {})
    }
}

let todos = {};
let visibilityFilter = {};

console.log(combineReducers({
    todos,
    visibilityFilter
}))