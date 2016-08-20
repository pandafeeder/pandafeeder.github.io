'use strict'

import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import todoStore from '../stores/TodoStore'
import Cate from '../components/Cate'
import * as Action from '../actions/Actions'

export default class Todo extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoStore.getAll()
        }
        this.addTodo = this.addTodo.bind(this)
        this.delTodo = this.delTodo.bind(this)
        this.completeToggle = this.completeToggle.bind(this)
        this.clearCompleted = this.clearCompleted.bind(this)
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

    componentWillMount() {
        todoStore.on('change', ()=>{
            this.setState({todos: todoStore.getAll()})
        })
        todoStore.on('cate', ()=>{
            this.setState({todos: todoStore.getCate()})
        })
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
            </div>
        )
    }
}
