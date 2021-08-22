import React from 'react'
import { Link } from 'react-router-dom';

function LinkButton(props) {
    return (
            <Link className={"btn "+ props.classes} to={props.to}>{props.text}</Link>
    )
}

export default LinkButton
