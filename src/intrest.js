import React from 'react'

const intrest = (props) => {
    return(
        <div>
            <input 
            onChange={event => {
                props.principleChange({index:props.index, text:event.target.value})}}
            placeholder = "principle"
            // value={props.principle}
            />
        </div>
    )
}

export default intrest