import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function CarouselArrow(props) {

    const classes = "carousel-control "
    return (
        <div className={`carousel-control ${props.next ? "right" : "left"}`} >
            <span className="carousel-circle">
                {props.next ? <IoIosArrowForward /> : <IoIosArrowBack />}
            </span>
        </div>
    )
}

export default CarouselArrow
