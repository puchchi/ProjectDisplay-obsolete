import React from 'react'

function TopCategorySection(props) {
    const {title, detail, src} = props
    return (
        <div>
            <img src={src} />
            <h5>{title}</h5>
            <p>{detail}</p>
        </div>
    )
}

export default TopCategorySection
