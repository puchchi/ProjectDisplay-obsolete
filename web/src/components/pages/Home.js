import React from 'react'
import TopMostBanner from '../sections/landingpagesection/section1/TopMostBanner'
import MainHeader from '../header/mainheader/MainHeader'
import EditorsPick from '../sections/editorspick/EditorsPick'
import BuildPortfolioSection from '../sections/landingpagesection/buildportfoliosection/BuildPortfolioSection'
import TopCategory from '../sections/landingpagesection/topcategory/TopCategory'
import WeAreAmazing from '../sections/landingpagesection/weareamazing/WeAreAmazing'
import Testimonial from '../sections/landingpagesection/testimonial/Testimonial'

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
        <TopMostBanner />
        </>
    )
}

export default Home
