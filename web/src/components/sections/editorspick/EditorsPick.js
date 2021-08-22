import React, { useState } from 'react'
import './EditorsPick.css'
import editorImage1 from '../../../asset/images/alex-suprun-FcGcwAmUqRQ-unsplash.png';
import profilePic1 from '../../../asset/images/pexels-andrea-piacquadio-3775077.png';
import editorImage2 from '../../../asset/images/anete-lusina-zwsHjakE_iI-unsplash.png';
import profilePic2 from '../../../asset/images/pexels-andrea-piacquadio-3775077.png';
import editorImage3 from '../../../asset/images/annie-spratt-1Psmw2xEa0g-unsplash.png';
import profilePic3 from '../../../asset/images/pexels-andrea-piacquadio-3775077.png';
import editorImage4 from '../../../asset/images/vinicius-amnx-amano-17NCG_wOkMY-unsplash.png';
import profilePic4 from '../../../asset/images/pexels-andrea-piacquadio-3775077.png';

//import InfiniteCarousel from 'react-leaf-carousel';
import InfiniteCarousel from '../../widgets/carousel/infinitecarousel/InfiniteCarousel';
import CarouselArrow from '../../widgets/carousel/CarouselArrow';

function EditorsPick() {

    // Get editors pick. It will be a network call.
    // TODO_API
    const slides = [{
        "artist_id": 1,
        "category": "Guitar",
        "name": "John 1",
        "profilePic": profilePic1,
        "coverPic": editorImage1
    },
    {
        "artist_id": 2,
        "category": "Interior Designer",
        "name": "Johny 2",
        "profilePic": profilePic2,
        "coverPic": editorImage2
    },
    {
        "artist_id": 3,
        "category": "Painter",
        "name": "John Doe 3",
        "profilePic": profilePic3,
        "coverPic": editorImage3
    },
    {
        "artist_id": 4,
        "category": "Guitar",
        "name": "Johnny Donny 4",
        "profilePic": profilePic4,
        "coverPic": editorImage4
    },
    {
        "artist_id": 5,
        "category": "Guitar",
        "name": "Johnny Donny 5",
        "profilePic": profilePic4,
        "coverPic": editorImage4
    },
    {
        "artist_id": 6,
        "category": "Guitar",
        "name": "Johnny Donny 6",
        "profilePic": profilePic3,
        "coverPic": editorImage2
    }
    ]

    return (
        <section className="mt-9">
            <div className="editors-pick-text">
                <h2 className="fw-600">Editors Pick</h2>
                <p>Every week we hand-pick some of best new handmade items from our collection. These beautifull creation
                    are making our head turn.
                </p>
            </div>

            {/*
            <div className="grid grid-4 editors-pick-img mt-3">
                <div className="carousel-control left">
                    <span className="carousel-circle">&#10094;</span>
                </div>
                <card className="editors-pick-item">
                    <img src={editorImage1} alt="" />
                </card>
                <card className="editors-pick-item">
                    <img src={editorImage2} alt="" />
                </card>
                <card className="editors-pick-item">
                    <img src={editorImage3} alt="" />
                </card>
                <card className="editors-pick-item">
                    <img src={editorImage4} alt="" />
                </card>
                <div className="carousel-control right">
                    <span className="carousel-circle">&#10095;</span>
                </div>
            </div>
            */}

            <div className="pt-2">
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                    ]}
                    arrow={true}
                    swipe={true}
                    scrollOnDevice={false}
                    dots={false}
                    showSides={false}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={1}
                    slidesToShow={4}
                    nextArrow={CarouselArrow({ next: true })}
                    prevArrow={CarouselArrow({ next: false })}
                >
                    <div className="editors-pick-item">
                        <img src={editorImage1} alt="" />
                    </div>
                    <div className="editors-pick-item">
                        <img src={editorImage2} alt="" />
                    </div>
                    <div className="editors-pick-item">
                        <img src={editorImage3} alt="" />
                    </div>
                    <div className="editors-pick-item">
                        <img src={editorImage4} alt="" />
                    </div>
                    <div className="editors-pick-item">
                        <img src={editorImage1} alt="" />
                    </div>
                    <div className="editors-pick-item">
                        <img src={editorImage2} alt="" />
                    </div>
                    <div className="editors-pick-item">
                        <img src={editorImage3} alt="" />
                    </div>
                    <div className="editors-pick-item">
                        <img src={editorImage4} alt="" />
                    </div>
                </InfiniteCarousel>
            </div>
        </section>
    )
}

export default EditorsPick
