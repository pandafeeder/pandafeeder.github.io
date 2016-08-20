'use strict'

import EventEmitter from 'events'
import dispatcher from '../dispatcher/Dispatcher'


class TodoStore extends EventEmitter {
    constructor() {
        super()
        this.todos = []
        this.cate = []
    }
    createTodo(text) {
        let id = Date.now()
        this.todos.push(
                {text,
                 complete: false,
                 id,
                })
        this.emit("change")
    }
    deleteTodo(id) {
        this.todos = this.todos.filter((item,index) => {
            return item.id !== id
        })
        this.emit("change")
    }
    completeToggle(id) {
        this.todos = this.todos.map((item, index) => {
            if(item.id === id) {
                item.complete = !item.complete
                return item
            } else {
                return item
            }
        })
        this.emit("change")
    }
    clearCompleted() {
        this.todos = this.todos.filter((item, index) => {
            return !item.complete
        })
        this.emit("change")
    }
    showCate(value) {
        switch (value) {
            case 'completed':
                this.cate = this.todos.filter((item, index) => {
                    return item.complete
                })
                break
            case 'undone':
                this.cate = this.todos.filter((item, index) => {
                    return !item.complete
                })
                break
            case 'all':
                this.cate = this.todos.slice(0)
                break
            default:
                console.log('unrecognized cate')
                break
        }
        this.emit("cate")
    }
    getAll() {
        return this.todos
    }
    getCate() {
        return this.cate
    }
    handleDispatch(action) {
        switch (action.type) {
            case 'CREATE_TODO':
                console.log("CREATE_TODO RECEIVED")
                this.createTodo(action.payload)
                break
            case 'DELETE_TODO':
                console.log("DELETE_TODO RECEIVED")
                this.deleteTodo(action.payload)
                break
            case 'COMPLETE_TOGGLE':
                console.log("COMPLETE_TOGGLE RECEIVED")
                this.completeToggle(action.payload)
                break
            case 'CLEAR_COMPLETED':
                console.log("CELAR_COMPLETED RECEIVED")
                this.clearCompleted()
                break
            case 'SHOW_CATE':
                console.log("SHOW_CATE RECEIVED")
                this.showCate(action.payload)
                break
            default:
                console.log("ACTION UNRECOGNIZED")
                break
        }
    }
}

const todoStore = new TodoStore

dispatcher.register((action) => {
    todoStore.handleDispatch(action)
})

export default todoStore
