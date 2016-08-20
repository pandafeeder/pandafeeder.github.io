'use strict'

import React from 'react'
import TodoItem from './TodoItem.js'

export default class TodoList extends React.Component {
    render() {
        let todos = this.props.todos.map((item, index) => {
            return(<TodoItem delTodo={this.props.delTodo} 
                             completeToggle={this.props.completeToggle}
                             item={item} 
                             key={index}
                             >{item.text}</TodoItem>)
        })
        return (<table style={styleSheet.table}>{todos}</table>)
    }
}


let styleSheet = {
    table: {
               width: '100%',
               backgroundColor: 'white'
           }
}
