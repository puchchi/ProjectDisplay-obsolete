import React from 'react'
import MiniFooter from '../footer/minifooter/MiniFooter'
import MiniHeader from '../header/miniheader/MiniHeader'
import SignupComponent from '../signinsignup/signup/SignupComponent'

function Signup(props) {
    return (
        <>
            <MiniHeader />
            <SignupComponent />
            <MiniFooter light={true} />
        </>
    )
}

export default Signup
