let newTodoId = 0
const todoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO' : 
            let id = newTodoId
            newTodoId += 1
            return ({
                text: action.text,
                id,
                completed: false
            })
        case 'TOGGLE_TODO' : 
            if (state.id !== action.id) {
                return state
            }
            //this is ES7
            //return {...state, completed: !state.completed}
            return Object.assign({}, state, {completed: !state.completed})
        default: 
            return state
    }
}

const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO' : 
            //this is ES7
            //return [...state, todoReducer(undefined, action)]
            return state.concat(todoReducer(undefined, action))
        case 'TOGGLE_TODO' :
            return state.map( t => { return todoReducer(t, action) })
        case 'DELETE_TODO' : 
            return state.filter( t => { t.id !== action.id })
        default: 
            return state
    }
}

export default todoListReducer
