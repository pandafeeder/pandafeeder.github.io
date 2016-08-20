'use strict'

import React from 'react'

export default class Cate extends React.Component {

    allHandler(e) {
        this.props.showCate(e.target.value)
    }

    undoneHandler(e) {
        this.props.showCate(e.target.value)
    }

    completedHandler(e) {
        this.props.showCate(e.target.value)
    }

    clickHandler(e) {
        this.props.clearCompleted()
    }
    render() {
        return(
            <div style={styleSheet.div}> 
                <input onChange={this.allHandler.bind(this)} type="radio" name="cate" value="all" defaultChecked/>All
                <input onChange={this.undoneHandler.bind(this)} type="radio" name="cate" value="undone" />Undone
                <input onChange={this.completedHandler.bind(this)}type="radio" name="cate" value="completed" />Completed
                <button onClick={this.clickHandler.bind(this)} style={styleSheet.button}>
                    Clear all completed
                </button>
            </div>
        )
    }
}

let styleSheet = {
    div:    {
                marginTop: '10px',
                fontFamily: 'Helvetica',
            },
    button: {
                float: 'right',
                backgroundColor: 'black',
                border: 'none',
                color: 'white',
                padding: '5px',
            }
}

