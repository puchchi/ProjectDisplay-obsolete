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
import EditorsPickImageComponent from './EditorsPickImageComponent';

function EditorsPick() {

    // Get editors pick. It will be a network call.
    // TODO_API
    // API detail{
    //      profile image should be in same proportion.
    //      
    //}

    const picks = [{
        "artist_id": 1,
        "category": "Guitar",
        "name": "John 1",
        "profilePic": profilePic1,
        "coverPic": editorImage1,
        "profileURL": "/profile/url1"
    },
    {
        "artist_id": 2,
        "category": "Interior Designer",
        "name": "Johny 2",
        "profilePic": profilePic2,
        "coverPic": editorImage2,
        "profileURL": "/profile/url2"
    },
    {
        "artist_id": 3,
        "category": "Painter",
        "name": "John Doe 3",
        "profilePic": profilePic3,
        "coverPic": editorImage3,
        "profileURL": "/profile/url3"
    },
    {
        "artist_id": 4,
        "category": "Guitar",
        "name": "Johnny Donny 4",
        "profilePic": profilePic4,
        "coverPic": editorImage4,
        "profileURL": "/profile/url4"
    },
    {
        "artist_id": 5,
        "category": "Guitar",
        "name": "Johnny Donny 5",
        "profilePic": profilePic4,
        "coverPic": editorImage4,
        "profileURL": "/profile/url5"
    },
    {
        "artist_id": 6,
        "category": "Guitar",
        "name": "Johnny Donny 6",
        "profilePic": profilePic3,
        "coverPic": editorImage2,
        "profileURL": "/profile/url6"
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

                    {picks.map((pick) =>
                        <EditorsPickImageComponent category={pick.category}
                            name={pick.name}
                            profilePic={pick.profilePic}
                            coverPic={pick.coverPic}
                            profileURL={pick.profileURL}
                            key={pick.artist_id}
                        />
                    )}


                </InfiniteCarousel>
            </div>
        </section>
    )
}

export default EditorsPick
