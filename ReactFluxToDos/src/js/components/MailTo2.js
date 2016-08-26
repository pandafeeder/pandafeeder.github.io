import React from 'react'

export default class MailTo extends React.Component {

    clickHandler(e) {
        this.props.mailSwitch()
    }
    changeHandler(e) {
        this.props.mailInput(e.target.value)
    }

    render() {
        let input = this.props.mailto.showInput
                    ?
                    <div>
                        <input 
                            style={styleSheet.input}
                            value={this.props.todos.length > 0 ? this.props.mailto.address : 'No todo item yet'} type="text"
                            onChange={this.changeHandler.bind(this)}
                        /><br />
                        <a href={this.props.mailto.href}>
                            <button 
                                disabled={(this.props.todos.length>0 && this.props.mailto.addressLegale)
                                    ? false : true}
                                style={styleSheet.button}>
                                SEND
                            </button>
                        </a>
                    </div>
                    :
                    <div></div>
        return(
            <div style={styleSheet.box}>
                <button onClick={this.clickHandler.bind(this)}
                        style={styleSheet.button}>
                    {this.props.mailto.buttonTag[this.props.mailto.showInput ? 1 : 0]}</button>
                {input}
            </div>
            )
    }
}

let styleSheet = {
    button: {
                backgroundColor: '#f98f07',
                border: 'none',
                fontSize: '20px',
                lineHeight: '30px',
                borderRadius: '3px',
                width: '300px',
                outline: 'none',
            },
    input:  {
                height: '30px',
                width: '300px',
                border: 'none',
                outline: 'none',
                borderRadius: '3px',
                msBoxSizing: 'content-box',
                MozBoxSizing: 'content-box',
                WebkitBoxSizing: 'content-box',
                boxSizing: 'content-box',
                textAlign: 'center',
            },
    box: {                           
             marginTop: '50px',
             textAlign: 'center',
         }
}
