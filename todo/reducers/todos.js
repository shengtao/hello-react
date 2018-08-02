/**
 * pure function
 * @param state {object} old state
 * @param action {object} use type
 * @returns {*} new state object
 */
const todos = (state = [], action) => {
    switch (action.type) {
        case 'REMOVE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        case 'ADD_TODO':
            console.log(action, 'add todo');
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        default:
            return state
    }
}

export default todos