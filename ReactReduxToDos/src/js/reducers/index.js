import todoListReducer from './todoListReducer'
import filterReducer from './filterReducer'
import { combineReducers } from 'redux'

const topReducer = combineReducers({
    todos: todoListReducer,
    filter: filterReducer
})

export default topReducer
