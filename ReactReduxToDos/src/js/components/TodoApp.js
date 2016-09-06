import React from 'react'
import TodoListContainer from '../containers/TodoListContainer'
import AddTodo from './AddTodo'

const TodoApp = () => {
    return(
        <div>
            <AddTodo/>
            <TodoListContainer/>
        </div>
    )
}

export default TodoApp
