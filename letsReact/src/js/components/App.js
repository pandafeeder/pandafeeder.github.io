import React from 'react'
import Nav from './Nav'
import Slide from './Slide'

export default class App extends React.Component{
    constructor() {
        super()
        this.state = {showSlide: false}
        this.toggleSlide = this.toggleSlide.bind(this)
    }

    toggleSlide() {
        this.setState({showSlide: !this.state.showSlide})
        console.log(this.state.showSlide)
    }

    componentDidMount() {
        document.addEventListener('keyup', function(e){
            if(e.keyCode === 27) {
                this.setState({showSlide: false})
            }    
            console.log("keyup")
        }.bind(this))
        document.addEventListener('click', function() {
            this.setState({showSlide: false})
            console.log("click")
        }.bind(this))
    }

    componentWillUnmount() {
        document.addEventListener('keyup', function(e){
            if(e.keyCode === 27) {
                this.setState({showSlide: false})
            }    
        }.bind(this))
        document.addEventListener('click', function() {
                this.setState({showSlide: false})
        }.bind(this))
    }

    render() {
        return(
            <div>
                <Nav toggleSlide={this.toggleSlide} />
                <Slide showSlide={this.state.showSlide}/>
            </div>
        )
    }
}
