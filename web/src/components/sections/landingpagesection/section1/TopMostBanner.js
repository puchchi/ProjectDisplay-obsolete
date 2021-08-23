import React from 'react'
import {bannerImage} from '../../../../asset/js/ImageAsset'

function TopMostBanner() {
    return (
        <section className="banner mt-1 pt-6">
        <div className="container grid">
            <div className="banner-text">
                <h1 className="fw-6">Neque porro quisquam est</h1>
                <hr className="underline my-3"/>
                <p >In this project we will build a custom website using HTML5 and modern CSS techniques such as CSS
                    Grid, Flexbox, psuedo selectors, animation and more. We will also deploy to Netlify and add form
                    functionality
                </p>
            </div>
         <img src={bannerImage} alt="" className="banner-image"/>
        </div>
    </section>
    )
}

export default TopMostBanner
