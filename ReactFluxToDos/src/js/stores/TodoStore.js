'use strict'

import EventEmitter from 'events'
import dispatcher from '../dispatcher/Dispatcher'


class TodoStore extends EventEmitter {
    constructor() {
        super()
        this.todos = []
        this.cate = []
        this.mailto = {
            showInput: false,
            address: '',
            buttonTag: ['Send this to-do-list as Emal to:', 'CANCE'],
            href: '',
            addressLegale: false,
        }
    }
    getHref() {
        if (this.todos.length > 0) {
            let todoString = this.todos.map((item, index) => {
                return (index+1)+' '+item.text+'%0D%0A'
            })
            todoString = todoString.reduce((x, y) => {
                return x.toString().replace(/\s+/g, '%20') + y.toString().replace(/\s+/g, '%20')
            })
            let subject = 'to-do-list'+(new Date).toString().replace(/\s+/g, '%20')
            let href = `mailto:${this.mailto.address}?subject=${subject}&body=${todoString}`
            this.mailto.href = href
        }
    }
    createTodo(text) {
        let id = Date.now()
        this.todos.push(
                {text,
                 complete: false,
                 id,
                })
        let href = this.todos.reduce((x,y) => {
            return x.text + y.text})

        this.mailto = Object.assign(this.mailto, {href,})
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
    switchMail() {
        this.mailto = Object.assign(this.mailto, {showInput: !this.mailto.showInput})
        this.emit("change")
    }
    mailInput(text) {
        this.mailto = Object.assign(this.mailto, {address: text})
        let reg = /[^@]+@[^\.]+\.[^\.]+/
        if (reg.exec(text)) {
            this.mailto = Object.assign(this.mailto, {addressLegale: true})
            //let todoString = this.todos.map((item, index) => {
            //    return (index+1)+' '+item.text+'%0D%0A'
            //})
            //todoString = todoString.reduce((x, y) => {
            //    return x.toString().replace(/\s+/g, '%20') + y.toString().replace(/\s+/g, '%20')
            //})
            //let subject = 'to-do-list'+(new Date).toString().replace(/\s+/g, '%20')
            //let href = `mailto:${this.mailto.address}?subject=${subject}&body=${todoString}`
            //this.mailto = Object.assign(this.mailto, {href,})
        }
        this.emit("change")
    }
    getAll() {
        return this.todos
    }
    getMailto() {
        return this.mailto
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
            case 'SWITCH_MAIL':
                console.log("SWITCH_MAIL RECEIVED")
                this.switchMail()
                break
            case 'MAIL_INPUT':
                console.log("MAIL_INPT RECEIVED")
                this.mailInput(action.payload)
                break
            default:
                console.log("ACTION UNRECOGNIZED")
                break
        }
    }
}

const todoStore = new TodoStore
todoStore.on('change', () => {
    todoStore.getHref()
})

dispatcher.register((action) => {
    todoStore.handleDispatch(action)
})

export default todoStore
