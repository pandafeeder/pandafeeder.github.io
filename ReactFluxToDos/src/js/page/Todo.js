'use strict'

import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import todoStore from '../stores/TodoStore'
import Cate from '../components/Cate'
import MailTo from '../components/MailTo2'
import * as Action from '../actions/Actions'

export default class Todo extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoStore.getAll(),
            mailto: todoStore.getMailto()
        }
        this.addTodo = this.addTodo.bind(this)
        this.delTodo = this.delTodo.bind(this)
        this.completeToggle = this.completeToggle.bind(this)
        this.clearCompleted = this.clearCompleted.bind(this)
        this.mailSwitch = this.mailSwitch.bind(this)
        this.mailInput = this.mailInput.bind(this)
    }

    addTodo(text) {
        Action.AddTodo(text)
    }

    delTodo(id) {
        Action.DeleteTodo(id)
    }

    completeToggle(id) {
        Action.CompleteToggle(id)
    }

    clearCompleted() {
        Action.ClearCompleted()
    }

    showCate(value) {
        Action.ShowCate(value)
    }

    mailSwitch() {
        Action.SwitchMail()
    }

    mailInput(text) {
        Action.inputMailAddress(text)
    }

    componentWillMount() {
        todoStore.on('change', ()=>{
            this.setState({todos: todoStore.getAll(),
                           mailto: todoStore.getMailto()})
        })
        todoStore.on('cate', ()=>{
            this.setState({todos: todoStore.getCate(),
                           mailto: todoStore.getMailto()})
        })
    }

    componentWillUnmount() {
        todoStore.removeAllListeners()
    }

    render() {
        return(
            <div>
                <TodoInput addTodo={this.addTodo}/>
                <TodoList 
                    delTodo={this.delTodo} 
                    todos={this.state.todos}
                    completeToggle={this.completeToggle}/>
                    <Cate clearCompleted={this.clearCompleted}
                          showCate={this.showCate}/> 
                    <MailTo 
                        todos={this.state.todos}
                        mailto={this.state.mailto}
                        mailSwitch={this.mailSwitch}
                        mailInput={this.mailInput}
                    />
            </div>
        )
    }
}
