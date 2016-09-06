import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({todos, onClickTodo}) => {
    return(
        <ul>
            {
                todos.map( t => {
                    return(
                        <Todo 
                            {...t}
                            key={t.id}
                            onClickTodo={onClickTodo}
                        />
                    )
                })
            }
        </ul>
    )
}

TodoList.propTypes = ({
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    onClickTodo: PropTypes.func.isRequired
})

export default TodoList
