import React, { PropTypes } from 'react'

class InputTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {inputValue: ''}
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onSubmitHandler(e) {
        e.preventDefault(e)
        if (this.state.inputValue) {
            this.props.addTodo(this.state.inputValue)
            this.setState({inputValue: ''})
        }
    }

    onChangeHandler(e) {
        this.setState({inputValue: e.target.value})
    }
    render() {
        return(
            <form onSubmit={this.onSubmitHandler}>
                <input type="text"
                    onChange={this.onChangeHandler}
                    value={this.state.inputValue}
                    placeholder="Input what needs to be done"
                />
            </form>
        )
    }
}

InputTodo.propTypes = ({
    addTodo: PropTypes.func.isRequired
})

export default InputTodo
