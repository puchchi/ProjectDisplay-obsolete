import React from 'react'
import MiniFooter from '../footer/minifooter/MiniFooter'
import MiniHeader from '../header/miniheader/MiniHeader'
import SigninComponent from '../signinsignup/signin/SigninComponent'

function Signin() {
    return (
        <>
           <MiniHeader/>
           <SigninComponent/>
           <MiniFooter light={true}/> 
        </>
    )
}

export default Signin
