import React from 'react'

function LinkButton(props) {
    return (
            <Link className={"btn "+ props.classes} to={props.to}>{props.text}</Link>
    )
}

export default LinkButton
