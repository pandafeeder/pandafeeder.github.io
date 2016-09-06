import React, { PropTypes } from 'react'

const Todo = ({text, completed, onClickTodo, id}) => {
    return(
        <li style={{textDecoration: completed? 'line-through' : 'none'}}
            onClick={e => {onClickTodo(id)}}>
            {text}
        </li>
    )
}

Todo.propTypes = ({
    text: PropTypes.string.isRequired
})

export default Todo
