import React from 'react'
import './Testimonial.css';
import {
    testimonial1Image,
    testimonial2Image,
    testimonial3Image,
    testimonialProfileDPImage
} from '../../../../asset/js/ImageAsset.js'


function Testimonial() {

    const testimonials = [
        {
            "heading": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
            "user_detail": {
                "profile_pic": testimonialProfileDPImage,
                "name": "Anotonia Maino",
                "profession": "Owner of the house, Los Angles"
            },
            "artist_name": "Jonny Jackson",
            "testimonial_image": [
                testimonial1Image,
                testimonial2Image,
                testimonial3Image
            ]
        }
    ]
    return (
        <section className="testimonial mt-13 container grid">
            <div className="testimonial-image grid">
                <img src={testimonial1Image} />
                <img src={testimonial2Image} />
                <img src={testimonial3Image} />
                <p>by Jonny Jackson</p>
            </div>
            <div className="testimonial-text flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="49.943" height="39.449" viewBox="0 0 49.943 39.449"><defs></defs><g transform="translate(-11.5 -19.5)"><path class="a" d="M32.812,25.265c-4.858,2.85-9.976,9.069-10.883,14.186a9.674,9.674,0,0,1,2.591-.324c4.988,0,8.939,3.951,8.939,9.522a10.325,10.325,0,0,1-10.3,10.3c-6.219,0-11.66-4.988-11.66-13.733,0-10.429,5.765-19.822,14.057-25.717Zm27.984,0c-4.858,2.85-9.976,9.069-10.883,14.186a9.674,9.674,0,0,1,2.591-.324c4.988,0,8.939,3.951,8.939,9.522a10.325,10.325,0,0,1-10.3,10.3c-6.219,0-11.66-4.988-11.66-13.733,0-10.429,5.765-19.822,14.057-25.717Z" /></g></svg>
                <div className="flex flex-vertical">
                    <h4>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..
                    </h4>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                    </p>
                    <div className="testimonial-userprofile flex">
                        <img src={testimonialProfileDPImage}/>
                        <div>
                            <h5>Anotonia Maino</h5>
                            <p>Owner of the house, Los Angles</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
