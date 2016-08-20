'use strict'

import React from 'react'

export default class TodoItem extends React.Component {

    handleClick(e) {
        this.props.delTodo(this.props.item.id)
    }

    handleInput(e) {
        this.props.completeToggle(this.props.item.id)
    }

    render() {
        return(
                <tbody>
                    <tr style={styleSheet.space}></tr>
                    <tr>
                        <td style={styleSheet.input}>
                            <input onChange={this.handleInput.bind(this)} type="checkbox"
                                   checked={this.props.item.complete}/>
                        </td>
                        <td style={this.props.item.complete ? styleSheet.textC : styleSheet.text}>
                            {this.props.children}
                        </td>
                        <td style={styleSheet.button}>
                            <button onClick={this.handleClick.bind(this)}>X</button>
                        </td>
                    </tr>
                    <tr style={styleSheet.space}></tr>
                </tbody>
        )
    }
}

let styleSheet = {
    input: {
               width: '5%',
               textAlign: 'center',
               verticalAlign: 'middle',
           },
    text:  {
               width: '90%',
               textAlign: 'justify',
               fontSize: '16px',
               fontFamily: 'Helvetica',
           },
    textC: {
               width: '90%',
               textAlign: 'justify',
               fontSize: '16px',
               fontFamily: 'Helvetica',
               textDecoration: 'line-through'
           },
    button:{
               width: '5%',
               textAlign: 'center',
               verticalAlign: 'middle',
           },
    space: {
               height: '5px',
           }
}
