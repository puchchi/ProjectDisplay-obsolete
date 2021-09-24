import React from 'react'
import BasicInfo from '../myprofilesecondary/BasicInfo'
import './MyProfileMain.css'

function MyProfileMain() {


    return (
        <section className="myprofile-section container pt-7 mt-1">
            <h2 className="fw-6">My Profile</h2>
            <hr className="underline mt-1"></hr>
            <div className="myprofile-container flex mt-4">
                <div className="myprofile-navigation flex-vertical">
                    <div className="myprofile-navigation-item active">
                        <span>Basic Information</span>
                    </div>
                    <div className="myprofile-navigation-item">
                        <span>Bio</span>
                    </div>
                    <div className="myprofile-navigation-item">
                        <span>My Address</span>
                    </div>
                    <div className="myprofile-navigation-item">
                        <span>Services</span>
                    </div>
                    <div className="myprofile-navigation-item">
                        <span>Cost</span>
                    </div>
                    <div className="myprofile-navigation-item">
                        <span>My Contact Info</span>
                    </div>
                    <div className="myprofile-navigation-item">
                        <span>My Portfolio</span>
                    </div>
                </div>
                <div className="vertical-line"></div>
                <div className="myprofile-details">
                    <BasicInfo/>
                </div>
            </div>
        </section>
    )
}

export default MyProfileMain
