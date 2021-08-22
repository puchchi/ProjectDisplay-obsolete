import React from 'react'
import TopMostBanner from '../banners/TopMostBanner'
import MainHeader from '../header/mainheader/MainHeader'
import EditorsPick from '../sections/editorspick/EditorsPick'

function Home() {
    return (
        <>
        <MainHeader />
        <TopMostBanner />
        <EditorsPick />
        </>
    )
}

export default Home
