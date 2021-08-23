import React from 'react'
import TopMostBanner from '../sections/landingpagesection/section1/TopMostBanner'
import MainHeader from '../header/mainheader/MainHeader'
import EditorsPick from '../sections/editorspick/EditorsPick'
import BuildPortfolioSection from '../sections/landingpagesection/buildportfoliosection/BuildPortfolioSection'

function Home() {
    return (
        <>
        <MainHeader />
        <TopMostBanner />
        <EditorsPick />
        <BuildPortfolioSection />
        <TopMostBanner />
        </>
    )
}

export default Home
