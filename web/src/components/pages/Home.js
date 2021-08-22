import React from 'react'
import TopMostBanner from '../banners/TopMostBanner'
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
        </>
    )
}

export default Home
