import React from 'react'
import todoStore from '../stores/TodoStore'

export default class MailTo extends React.Component {
    constructor() {
        super()
        this.state = {
                       address: '', 
                       showInput: false,
                       buttonTag: 'Send this to-do-list as Email to:',
                       //href: this.getAddress(),
                       href: '',
                       addressLegle: false,
        }
    }

    componentWillMount() {
        todoStore.on('change', () => {
            this.getAddress()
        })
    }


    getAddress(e) {
        if (this.props.todos.length === 0) {
            return
        }
        let address
        try {
            address = e.target.value
        } catch(e) {
            address = this.state.address 
        }

        let reg = /.*@[^\.]*\..*/
        let body = this.props.todos.map((item, index) => {
                return (index+1)+' '+item.text+'%0D%0A'
            })
        //body = body.toString().replace(/\s+/g, '%20')
        body = body.reduce((x, y) =>{
            return x.toString().replace(/\s+/g, '%20') + y.toString().replace(/\s+/g, '%20')
            //return x + y
        })
        let subject = 'to-do-list@'+(new Date).toString().replace(/\s+/g, '%20')
        let href = `mailto:${address}?subject=${subject}&body=${body}`
        this.setState({
                address,
                href,})
        if (reg.exec(this.state.address)) {
            this.setState({addressLegle: true})
        }
    }

    showInput() {
        let tag = ['Send this to-do-list as Email to:', 
                   'CANCEL']
        let toggle = !this.state.showInput
        this.setState({
                        showInput: toggle,
                        buttonTag: tag[toggle ? 1 : 0],
        })
    }

    render() {
        let input = this.state.showInput 
                     ?
                     <div>
                        <input type="text" 
                               style={styleSheet.input}
                               onChange={this.getAddress.bind(this)}
                               value={this.props.todos.length>0 ? this.state.address : 'No todo item yet'}
                            /><br/>
                        <a href={this.state.href}>
                            <button disabled={(this.props.todos.length>0 && this.state.addressLegle) ? false : true} style={styleSheet.button}>
                                SEND
                            </button>
                        </a>
                     </div>
                     :
                     <div></div>
        return(
            <div className="mailto">
                    <button onClick={this.showInput.bind(this)} style={styleSheet.button}>
                        {this.state.buttonTag}
                    </button>
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
            }
}
