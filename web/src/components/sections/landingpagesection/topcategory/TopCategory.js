import React from 'react';
import './TopCategory.css';
import {
    photographerSVG,
    guitaristSVG,
    interiorDesignerSVG,
    makeUpArtistSVG,
    paintersSVG,
    singerSVG
} from '../../../../asset/js/ImageAsset.js'
import { Link } from 'react-router-dom';


function TopCategory() {

    // Should we move it to api?
    // TODO_API
    const categories = [{
        "key": 1,
        "title": "Photographers",
        "detail": "Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore.",
        "src": photographerSVG,
        "url":"category/1"
    },
    {
        "key": 2,
        "title": "Interior Designer",
        "detail": "Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore.",
        "src": interiorDesignerSVG,
        "url":"category/1"
    },
    {
        "key": 3,
        "title": "Make up artist",
        "detail": "Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore.",
        "src": makeUpArtistSVG,
        "url":"category/1"
    },
    {
        "key": 4,
        "title": "Painter (Wall Art)",
        "detail": "Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore.",
        "src": paintersSVG,
        "url":"category/1"
    },
    {
        "key": 5,
        "title": "Singer",
        "detail": "Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore.",
        "src": singerSVG,
        "url":"category/1"
    },
    {
        "key": 6,
        "title": "Guitarist",
        "detail": "Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore.",
        "src": guitaristSVG,
        "url":"category/1"
    }
    ]

    return (
        <section className="top-category-section container mt-8">
            <h1 className="fw-6">Top Category</h1>
            <div className="grid mt-5">
                {categories.map((category) => {
                    return (
                        <a key={category.key} href={category.url}>
                            <img src={category.src} />
                            <h5 className="fw-5">{category.title}</h5>
                            <p>{category.detail}</p>
                        </a>
                    )
                })
                }
            </div>
            <Link className="btn" to='/categories'>View All Categories</Link>
        </section>
    )
}

export default TopCategory
