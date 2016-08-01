import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import Cate from './Cate'


export default class App extends React.Component {
    constructor () {
        super()
        this.state = {itemList: [], 
                      newItem: {
                          text: '',
                          completed: false
                      },
                      display: 'all'}
        this.addTodoItem = this.addTodoItem.bind(this)
        this.newTodoItem = this.newTodoItem.bind(this)
        this.completeToggle = this.completeToggle.bind(this)
        this.showCate = this.showCate.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.clearCompleted = this.clearCompleted.bind(this)
    }
    addTodoItem() {
        if (this.state.newItem.text) {
        this.setState({itemList: this.state.itemList.concat(this.state.newItem)})
        this.setState({newItem: {text: '', completed: false}})
        }
    }
    newTodoItem(text) {
        this.setState({newItem: {text, completed: false}})
    }
    completeToggle(id) {
        let newItemList = this.state.itemList.map(
                (item, index) => {
                    let newItem = Object.assign({}, item)
                    if (index === id) {
                        newItem.completed = !newItem.completed
                    }
                    return newItem
                })
        this.setState({itemList: newItemList})
    }
    deleteItem(id) {
        let newItemList = this.state.itemList.filter(
                (item, index) => {
                    let newItem = Object.assign({}, item)
                    if (index !== id) {
                        return newItem
                    }
                })
        this.setState({itemList: newItemList})
    }
    showCate(cate) {
        this.setState({display: cate})
    }
    clearCompleted() {
        let newItemList = this.state.itemList.filter(
                (item, index) => {
                    let newItem = Object.assign({}, item)
                    if (newItem.completed === false) {
                        return newItem
                    }
                })
        this.setState({itemList: newItemList})
    }

    render () {
        return (
        <div>
            <TodoInput 
                newItem={this.state.newItem} 
                newTodoItem={this.newTodoItem} 
                addTodoItem={this.addTodoItem} 
            />
            <TodoList 
                completeToggle={this.completeToggle}
                todos={this.state.itemList}
                display={this.state.display}
                deleteItem={this.deleteItem}
            />
            <Cate
                itemList={this.state.itemList}
                showCate={this.showCate}
                clearCompleted={this.clearCompleted}
            />
        </div>
        )
    }
}
