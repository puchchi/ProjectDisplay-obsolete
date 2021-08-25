import React, { useEffect, refs, useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import './BuildPortfolioSection.css';
import { topImage, bottomImage, rightImage } from '../../../../asset/js/ImageAsset'
import useWindowDimensions from '../../../customhooks/UseWindowDimension';

let threshold = 70

function BuildPortfolioSection() {

    // Just use it once. useEffect is not getting real value.
    window.onload = () => {
        CalculateRightImageStyle();
    }

    const { height, width } = useWindowDimensions();
    const imageSectionRef = React.createRef();
    const rightImageStyleInitialState = {
        left: "0px",
        width: "0px",
        height: "0px"
    }

    const [rightImageStyle, setRightImageStyle] = useState(rightImageStyleInitialState)

    const CalculateRightImageStyle = () => {
        if (imageSectionRef.current) {
            const rect = imageSectionRef.current.getBoundingClientRect();

            const newRightImageStyle = {
                left: rect.right,
                width: width - rect.right - 20 /* 20 is cushion */,
                height: rect.height,
                display: width -rect.right > threshold ? "block" : "none"
            }
            setRightImageStyle(newRightImageStyle)
        }
    }

    useLayoutEffect(() => {
            CalculateRightImageStyle();

        return () => {
        }
    }, [height, width])

    return (
        <section className="build-portfolio-section flex mt-13 ">
            <div className="flex ">
                <div className="flex flex-vertical build-portfolio-text-section">
                    <h2>Build your
                        <br />portfolio for better
                        reach</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard.</p>
                    <Link className="btn" to='/signup'>Join Now</Link>
                </div>
                <div ref={imageSectionRef} className="grid build-portfolio-image-section">
                    <img src={topImage} />
                    <img src={bottomImage} />
                </div>
            </div>
            <img className="hanging-image" style={rightImageStyle} src={rightImage} />
        </section>


    )
}

export default BuildPortfolioSection
