import React from 'react'
import {Link } from "react-router-dom";
import HeaderTitle from '../../widgets/headertitle/HeaderTitle'

function MiniHeader() {
    return (
        <div className="sticky">
            <div className="header container">
                <div className="flex">
                    <HeaderTitle />
                    <Link to='/helpcenter' className="fw-6">Help Center</Link>
                </div>
            </div>
            <hr className="header-separator" />
        </div>
    )
}

export default MiniHeader
