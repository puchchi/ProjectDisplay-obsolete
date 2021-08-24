import React from 'react'
import './MainFooter.css';
import * as Icon from "react-icons/fa";
import * as IconFi from "react-icons/fi";
import * as IconHi from "react-icons/hi";
import { Link } from 'react-router-dom';

function MainFooter() {
    return (
        <section className="main-footer-section mt-8">
            <div className="container grid p-6">

                <div className="about-us-div flex flex-vertical">
                    <h4 className="fw-6">Beelance</h4>
                    <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore magna adminim eniam quis nostrud.</p>
                    <div className="social-links">
                        <Icon.FaFacebookF />
                        <Icon.FaTwitter />
                        <Icon.FaInstagram />
                        <Icon.FaYoutube />
                    </div>

                </div>
                <div className="quick-links flex flex-vertical">
                    <p className="fw-6">Quick Links</p>
                    <Link className="mt-1" to="/contactus">Contact us</Link>
                    <Link to="/tnc">Terms &amp; Condition</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="Know the Team">Know the Team</Link>
                </div>
                <div className="contact-us flex flex-vertical">
                    <p className="fw-6">Contact</p>
                    <div className="mt-1">
                        <Icon.FaPhoneAlt /><p>000-000-0000</p>
                    </div>
                    <div>
                        <IconFi.FiMail /><p>info@email.com</p>
                    </div>
                    <div>
                        <IconHi.HiLocationMarker/><p>New Delhi, India</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainFooter
