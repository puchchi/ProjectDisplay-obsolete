import React from 'react';
import { Link } from 'react-router-dom';
import './BuildPortfolioSection.css';

function BuildPortfolioSection() {
    return (
        <div className="flex mt-4 build-portfolio-section">
            <div className="flex flex-vertical build-portfolio-text-section">
                <h2>Build your</h2>
                <h2>portfolio for better</h2>
                <h2>reach</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.</p>
                <Link className="btn" to='/signup'>Join Now</Link>
            </div>
            <div className="build-portfolio-image-section">
            </div>
        </div>
    )
}

export default BuildPortfolioSection
