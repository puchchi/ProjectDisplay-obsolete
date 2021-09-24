import React from 'react'
import MiniFooter from '../footer/minifooter/MiniFooter'
import MiniHeader from '../header/miniheader/MiniHeader'
import MyProfileMain from '../sections/myprofile/myprofilemain/MyProfileMain'

function MyProfile() {
    return (
        <>
            <MiniHeader />
            <MyProfileMain />
            <MiniFooter light={true} />
        </>
    )
}

export default MyProfile
