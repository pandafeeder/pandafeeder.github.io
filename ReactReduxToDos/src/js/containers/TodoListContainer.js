import { connect } from 'react-redux'
import * as Action from '../actions'
import TodoList from '../components/TodoList'

const getTodos = (todos, filter) => {
    return todos
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickTodo: (id) => {
            dispatch(Action.toggleTodo(id))
        }
    }
}

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default TodoListContainer
