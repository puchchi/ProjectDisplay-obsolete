import React from 'react'
import TopMostBanner from '../sections/landingpagesection/section1/TopMostBanner'
import MainHeader from '../header/mainheader/MainHeader'
import BuildPortfolioSection from '../sections/landingpagesection/buildportfoliosection/BuildPortfolioSection'
import TopCategory from '../sections/landingpagesection/topcategory/TopCategory'
import WeAreAmazing from '../sections/landingpagesection/weareamazing/WeAreAmazing'
import Testimonial from '../sections/landingpagesection/testimonial/Testimonial'
import EditorsPick from '../sections/landingpagesection/editorspick/EditorsPick'
import MainFooter from '../footer/mainfooter/MainFooter'
import MiniFooter from '../footer/minifooter/MiniFooter'

function Home() {
    return (
        <>
        <MainHeader />
        <TopMostBanner />
        <EditorsPick />
        <BuildPortfolioSection />
        <TopCategory/>
        <WeAreAmazing/>
        <Testimonial/>
        <MainFooter/>
        <MiniFooter/>
        </>
    )
}

export default Home
