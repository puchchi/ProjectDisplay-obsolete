import React from 'react'

function Button(props) {
    return (
            <button className={"btn "+ props.classes} onClick={props.callback}>{props.text}</button>
    )
}

export default Button
