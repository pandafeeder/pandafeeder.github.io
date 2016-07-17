import React from 'react'


export default class Nav extends React.Component{
    constructor() {
        super()
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(e) {
        //e.stopPropagation() will not work
        e.nativeEvent.stopImmediatePropagation()
        console.log("CLICKED")
        this.props.toggleSlide()
    }

    render() {
        return(
            <div className="nav" style={navStyleSheet}>
                <h1>SOURCE CODE</h1>
                <button style={buttonStyleSheet} onClick={this.clickHandler}>MENU</button>
            </div>
        )
    }
}


let navStyleSheet = {
    position: "absolute",
    top: 0,
    background: '#2192ea',
    height: 100,
    width: "100%",
    textAlign: 'center'
}

let buttonStyleSheet = {
    height: 'inherit',
    width: 100,
    position: "absolute",
    top: 0,
    right: 0
}
