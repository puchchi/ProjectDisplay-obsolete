import React from 'react'
import './Testimonial.css';
import {
    testimonial1Image,
    testimonial2Image,
    testimonial3Image,
    weAreAmazingImage,
    testimonialProfileDPImage
} from '../../../../asset/js/ImageAsset.js'
import InfiniteCarousel from '../../../widgets/carousel/infinitecarousel/InfiniteCarousel';
import CarouselArrow from '../../../widgets/carousel/CarouselArrow';
import { Link } from "react-router-dom";

function SingleTestimonial(props) {
    return (
        props.testimonialImages != undefined &&
        <div className="testimonial grid container">
            <div className="testimonial-image grid">
                {props.testimonialImages.map((testimonialImg, index) =>
                    <img src={testimonialImg} key={index} />
                )}
                <p>by {props.artistName}</p>
            </div>
            <div className="testimonial-text flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="49.943" height="39.449" viewBox="0 0 49.943 39.449"><defs></defs><g transform="translate(-11.5 -19.5)"><path d="M32.812,25.265c-4.858,2.85-9.976,9.069-10.883,14.186a9.674,9.674,0,0,1,2.591-.324c4.988,0,8.939,3.951,8.939,9.522a10.325,10.325,0,0,1-10.3,10.3c-6.219,0-11.66-4.988-11.66-13.733,0-10.429,5.765-19.822,14.057-25.717Zm27.984,0c-4.858,2.85-9.976,9.069-10.883,14.186a9.674,9.674,0,0,1,2.591-.324c4.988,0,8.939,3.951,8.939,9.522a10.325,10.325,0,0,1-10.3,10.3c-6.219,0-11.66-4.988-11.66-13.733,0-10.429,5.765-19.822,14.057-25.717Z" /></g></svg>
                <div className="flex flex-vertical">
                    <h4>
                        {props.heading}
                    </h4>
                    <p>
                        {props.content}
                    </p>
                    <div className="testimonial-userprofile flex">
                        <img src={props.userDetail.profile_pic} />
                        <div>
                            <h5>{props.userDetail["name"]}</h5>
                            <p>{props.userDetail["profession"]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

function Testimonial() {

    // Get editors pick. It will be a network call.
    // TODO_API
    // API detail{
    //      profile image should be in same proportion.
    //      
    //}
    const testimonials = [
        {
            "user_id": 1,
            "heading": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
            "user_detail": {
                "profile_pic": testimonialProfileDPImage,
                "name": "Anotonia Maino",
                "profession": "Owner of the house, Los Angles"
            },
            "artist_name": "Jonny Jackson",
            "testimonial_images": [
                testimonial1Image,
                testimonial2Image,
                testimonial3Image
            ]
        },
        {
            "user_id": 2,
            "heading": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
            "user_detail": {
                "profile_pic": testimonialProfileDPImage,
                "name": "John Warnock",
                "profession": "Owner of the ghanta, Los Vegas"
            },
            "artist_name": "Jonny Depp",
            "testimonial_images": [
                testimonial1Image,
                testimonial2Image,
                testimonial3Image
            ]
        },
        {
            "user_id": 3,
            "heading": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
            "user_detail": {
                "profile_pic": testimonialProfileDPImage,
                "name": "Robert Downey Jr.",
                "profession": "Everything, LA"
            },
            "artist_name": "Thor",
            "testimonial_images": [
                weAreAmazingImage,
                testimonial2Image,
                testimonial3Image
            ]
        },
        {
            "user_id": 4,
            "heading": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
            "user_detail": {
                "profile_pic": testimonialProfileDPImage,
                "name": "Robert Downey Jr.",
                "profession": "Everything, LA"
            },
            "artist_name": "Loki",
            "testimonial_images": [
                weAreAmazingImage,
                testimonial2Image,
                testimonial3Image
            ]
        },
        {
            "user_id": 5,
            "heading": "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
            "user_detail": {
                "profile_pic": testimonialProfileDPImage,
                "name": "Robert Downey Jr.",
                "profession": "Everything, LA"
            },
            "artist_name": "Pheobe",
            "testimonial_images": [
                weAreAmazingImage,
                testimonial2Image,
                testimonial3Image
            ]
        }
    ]
    return (
        <section className="testimonial-section mt-13">

            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    }
                ]}
                arrow={true}
                swipe={true}
                scrollOnDevice={false}
                dots={false}
                showSides={false}
                sidesOpacity={1}
                sideSize={.1}
                slidesToScroll={1}
                slidesToShow={1}
                slidesSpacing={0}
                nextArrow={CarouselArrow({ next: true })}
                prevArrow={CarouselArrow({ next: false })}
                dots={true}

            >
                {testimonials.map((testimonial) =>
                    <SingleTestimonial
                        key={testimonial.user_id}
                        testimonialImages={testimonial.testimonial_images}
                        artistName={testimonial.artist_name}
                        heading={testimonial.heading}
                        userDetail={testimonial.user_detail}
                        content={testimonial.content}
                    />
                )}

            </InfiniteCarousel>

            <div className="testimonial-signup">
                <Link className="btn" to="/signup">Artist, Join Now</Link>
            </div>
        </section>
    )
}

export default Testimonial
