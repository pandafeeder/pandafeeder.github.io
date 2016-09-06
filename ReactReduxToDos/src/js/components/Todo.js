import React, { PropTypes } from 'react'

const Todo = ({text, completed, onClickTodo, id}) => {
    return(
        <li style={{textDecoration: completed ? 'line-through' : 'none'}}
            onClick={() => {
                onClickTodo(id)
            }}
        >
            {text}
        </li>
    )
}

Todo.propTypes = ({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClickTodo: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
})

export default Todo
