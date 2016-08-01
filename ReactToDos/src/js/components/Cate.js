import React from 'react'

export default class Cate extends React.Component {

    handleAll(e) {
        this.props.showCate(e.target.value)
    }
    handleActive(e) {
        this.props.showCate(e.target.value)
    }
    handleCompleted(e) {
        this.props.showCate(e.target.value)
    }
    handleClearCompleted(e) {
        this.props.clearCompleted()
    }

    render() {
        let showOrNotStyle = this.props.itemList.length > 0 ? {} : {display: 'none'}
        return(
            <div className="cate" style={showOrNotStyle}>
                <input onChange={this.handleAll.bind(this)} type="radio" name="cate" value="all" defaultChecked />所有
                <input onChange={this.handleActive.bind(this)} type="radio" name="cate" value="active" />未完成
                <input onChange={this.handleCompleted.bind(this)}type="radio" name="cate" value="completed" />完成
                <button onClick={this.handleClearCompleted.bind(this)}>清除已完成</button>
            </div>
        )
    }
}
