import React from 'react'

export default class Slide extends React.Component{
    render() {
        return (
            <div style={this.props.showSlide ? showStyleSheet : hideStyleSheet}></div>
        )
    }
}


let hideStyleSheet = {
    background: 'green',
    width: 200,
    height: '100%',
    position: "absolute",
    top: "0px",
    right: -200,
    transition: "all ease-in-out 0.3s",
    WebkitTransition: "all ease-in-out 0.3s",
}
let showStyleSheet = {
    background: 'green',
    width: 200,
    height: '100%',
    position: "absolute",
    top: "0px",
    right: 0,
    transition: "all ease-in-out 0.3s",
    WebkitTransition: "all ease-in-out 0.3s",
}
