import React from 'react'
import './ButtonsCommon.css'

function TextInputWithName(props) {
    return (
        <div>  
            <div className={props.spanClass}>{props.name}</div>
            <input id="input-type-2"
                className="my-1 mb-3"
                type="text"
                name=""
                placeholder={props.placeholder}
                onChange={
                    (e) => {props.setValue(e.target.value)}
                }
            />
        </div>
    )
}

export default TextInputWithName