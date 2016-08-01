import React from 'react'

export default class TodoItem extends React.Component {

    changeHandler(e, id) {
        this.props.completeToggle(this.props.id)
    }
    clickHandler(e, id) {
        this.props.deleteItem(this.props.id)
    }

    render () {
        const itemStyle = this.props.item.completed ? completedStyle : activeStyle
        return(
            <tbody>
            <tr className="toDoItem" style={itemStyle}>
                <td>
                <input onChange={this.changeHandler.bind(this)}  type="checkbox" checked={this.props.item.completed} />
                </td>
                <td id="text">
                <span style={itemStyle}>{this.props.children}</span>
                </td>
                <td>
                <button onClick={this.clickHandler.bind(this)}>X</button>
                </td>
            </tr>
            </tbody>
        )
    }
}


let completedStyle = {
    textDecoration: 'line-through',
}

let activeStyle = {
}
