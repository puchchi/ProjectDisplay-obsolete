import React from 'react'
import './MiniFooter.css'

function MiniFooter(props) {
    return (
        <section className={props.light ? "mini-footer-section p-3 flex light " :
            "mini-footer-section p-3 flex"}>
            <p>	&#169;2021 Beelance | All Rights Reserved</p>
        </section>
    )
}

export default MiniFooter
