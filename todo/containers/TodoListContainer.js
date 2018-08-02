import React from 'react'
import { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as TodoActionCreators from '../actions/TodoActionCreators'
// {
//   addTodo: Function,
//   removeTodo: Function
// }

class TodoList extends Component {
    componentDidMount() {
        //console.log(this.props);
    }

    render() {
        let {todos} = this.props;

        return (<ul>
            {todos.map(todo => (
                <li key={todo.id}
                    onClick={()=>{this.props.removeTodo(todo.id)}}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                >
                    {todo.text}
                </li>
            ))}
        </ul>)
    }
}


class TodoListContainer extends Component {
    componentDidMount() {
        // Injected by react-redux:
        let { dispatch } = this.props

        // Note: this won't work:
        // TodoActionCreators.addTodo('Use Redux')

        // You're just calling a function that creates an action.
        // You must dispatch the action, too!

        // This will work:
        let action = TodoActionCreators.addTodo('Use Redux')
        dispatch(action)
    }

    render() {
        // Injected by react-redux:
        let { todos, dispatch } = this.props

        // Here's a good use case for bindActionCreators:
        // You want a child component to be completely unaware of Redux.

        let boundActionCreators = bindActionCreators(TodoActionCreators, dispatch)
        console.log(boundActionCreators)

        // {
        //   addTodo: Function,
        //   removeTodo: Function
        // }

        return <TodoList todos={todos} {...boundActionCreators} />

        // An alternative to bindActionCreators is to pass
        // just the dispatch function down, but then your child component
        // needs to import action creators and know about them.

        // return <TodoList todos={todos} dispatch={dispatch} />
    }
}

export default connect(
    state => ({ todos: state.todos })
)(TodoListContainer)