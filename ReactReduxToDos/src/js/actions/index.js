export const addTodo = (text) => {
    return {type: 'ADD_TODO', text}
}

export const deleteTodo = (id) => {
    return {type: 'DELETE_TODO', id}
}

export const toggleTodo = (id) => {
    return {type: 'TOGGLE_TODO', id}
}

export const setVisibilityFilter = (filter) => {
    return {type: 'SET_VISIBILITY', filter}
}
