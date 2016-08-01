import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {

    render() {
        let Todos = []
        if (this.props.display === 'all') {
            Todos = this.props.todos.map((item, index) => {
                return(
                    <TodoItem 
                        completeToggle={this.props.completeToggle} 
                        deleteItem={this.props.deleteItem}
                        key={index} id={index} item={item}>
                        {item.text}
                    </TodoItem>
                )
            })
        }
        if (this.props.display === 'active') {
            Todos = this.props.todos.map((item, index) => {
                if (!item.completed) {
                    return(
                        <TodoItem 
                            completeToggle={this.props.completeToggle} 
                            deleteItem={this.props.deleteItem}
                            key={index} id={index} item={item}>
                            {item.text}
                        </TodoItem>
                    )
                }
            })
        }
        if (this.props.display === 'completed') {
            Todos = this.props.todos.map((item, index) => {
                if (item.completed) {
                    return(
                        <TodoItem 
                            completeToggle={this.props.completeToggle} 
                            deleteItem={this.props.deleteItem}
                            key={index} id={index} item={item}>
                            {item.text}
                        </TodoItem>
                    )
                }
            })
        }
        return (
            <table cellSpacing="0" className='toDoList'>
                {Todos}
            </table>
        )
    }
}

