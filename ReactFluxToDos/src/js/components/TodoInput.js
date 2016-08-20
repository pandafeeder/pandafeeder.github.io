'use strict'

import React from 'react'

export default class TodoInput extends React.Component {

    constructor() {
        super()
        this.state = {text: ''}
        this.submitHandler = this.submitHandler.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
    }

    submitHandler(e) {
        e.preventDefault()
        let text = this.state.text
        if (text) {
            this.props.addTodo(text)
            this.setState({text: ''})
        }
    }

    changeHandler(e) {
        let text = e.target.value
        this.setState({text})
    }

    render() {
        return(
            <form onSubmit={this.submitHandler.bind(this)}>
                <input style={styleSheet} value={this.state.text} onChange={this.changeHandler.bind(this)}  
                       type="text" placeholder="Input what needs to be done"/>
            </form>
        )
    }
}

let styleSheet = {
    border: 'none',
    width:'90%',
    padding: '5px 5%',
    height: '50px',
    outline: 'none',
    fontStyle: 'italic',
    fontSize: '16px',
    fontFamily: 'Helvetica',
}
