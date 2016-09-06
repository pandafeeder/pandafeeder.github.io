import React, { PropTypes } from 'react'

const Filter = ({onClickFilter}) => {
    return(
        <div>
            <a href="#showall">showAll</a> {' '}
            <a href="#showactive">showActive</a> {' '}
            <a href="#showcompleted">showCompleted</a> {' '}
        </div>
    )
}

Filter.propTyps = ({
    onClickFilter: PropTypes.func.isRequired
})

export default Filter
