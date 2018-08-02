import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

/*
The mapStateToProps function takes a single argument of the entire Redux store’s state
and returns an object to be passed as props. It is often called a selector. 选择器：选择需要的返回
 */
const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

//  a container component is just a React component that uses store.subscribe() to read a part of the Redux state tree
// and supply props to a presentational component it renders.
// we suggest generating container components with the React Redux library's connect() function,
// which provides many useful optimizations to prevent unnecessary re-renders.
// 监听 state 变化
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList