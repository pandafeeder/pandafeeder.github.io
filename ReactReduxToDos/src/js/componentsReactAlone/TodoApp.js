import React, { PropTypes } from 'react'
import store from '../stores'
import TodoList from './TodoList'
import InputTodo from './InputTodo'
import * as Action from '../actions'

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({todos: store.getState().todos,
                       filter: store.getState().filter})
        this.addTodo = this.addTodo.bind(this)
        this.onClickTodo = this.onClickTodo.bind(this)
    }

    componentDidMount() {
        store.subscribe( () => {
            this.setState({todos: store.getState().todos,
                           filter: store.getState().filter})
        })
    }

    addTodo(text) {
        store.dispatch(Action.addTodo(text))
    }

    onClickTodo(id) {
        store.dispatch(Action.toggleTodo(id))
    }

    render() {
        return(
            <div>
                <InputTodo addTodo={this.addTodo}/>
                <TodoList 
                    onClickTodo={this.onClickTodo}
                    todos={this.state.todos}
                />
            </div>
        )
    }
}

export default TodoApp
