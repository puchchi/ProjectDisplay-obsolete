import React from 'react'
import {Link } from "react-router-dom";
import './HeaderTitle.css'

function HeaderTitle(props) {
    return (
        <Link to="/" className={props.className}>
            <span className="first-title fw-6">Bee</span>
            <span>lance</span>
        </Link>
    )
}

export default HeaderTitle
