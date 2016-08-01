import React from 'react'


export default class TodoInput extends React.Component {
    submitHandler(e) {
        e.preventDefault()
        this.props.addTodoItem() 
    }
    changeHandler(e) {
        this.props.newTodoItem(e.target.value)
    }
    render() {
        return(
                <form className="toDoInput" onSubmit={this.submitHandler.bind(this)}>
                    <input value={this.props.newItem.text} onChange={this.changeHandler.bind(this)} type="text" placeholder="输入新的事项"/>
                </form>
        )
    }
}

