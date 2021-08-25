import React from 'react'
import HeaderTitle from '../../widgets/headertitle/HeaderTitle'

function MiniHeader() {
    return (
        <div className="sticky">
            <div className="header container">
                <div className="flex">
                    <HeaderTitle className="m-auto"/>
                </div>
            </div>
            <hr className="header-separator" />
        </div>
    )
}

export default MiniHeader
