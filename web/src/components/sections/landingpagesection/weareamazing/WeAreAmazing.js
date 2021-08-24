import React from 'react'
import {Link } from "react-router-dom";
import {
    weAreAmazingImage
} from '../../../../asset/js/ImageAsset.js'
import './WeAreAmazing.css'

function WeAreAmazing() {
    return (
        <section className="landingpage-section5 grid container mt-8">
            <img src={weAreAmazingImage}></img>
            <div className="flex landingpage-section5-text">
                <h3>We're Surprisingly Amazing</h3>
                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore magna adminim eniam quis nostrud.</p>
                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore magna adminim eniam quis nostrud.</p>
                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore magna adminim eniam quis nostrud.</p>
                <Link className="btn" to="signup">Join Now</Link>

            </div>
        </section>
    )
}

export default WeAreAmazing
