import React, { useState } from 'react'
import { Link } from "react-router-dom";
import * as Icon from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

import './SigninComponent.css';
import FacebookSignin from '../socialsignin/FacebookSignin';
import GoogleSignin from '../socialsignin/GoogleSignin';


function SigninComponent() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(true)

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Login form submit");
    }

    return (
        <>
            <section className="login-section flex pt-6 mt-3 mini-container m-auto">
                <div>
                    <form onSubmit={handleSubmit}>
                        <h2 className="fw-6">Login</h2>
                        <hr className="underline" />
                        <h5 className="mt-3 py-1">Email</h5>
                        <input type="text" value={email} title=""
                            name="" placeholder="Please type your email"
                            onChange={(e) => setEmail(e.target.value)} />
                        <h5 className="mt-1 py-1">Password</h5>
                        <input type="password" value={password} title=""
                            name="" placeholder="Please type your password"
                            onChange={(e) => setPassword(e.target.value)} />

                        <div className="flex mt-2 fw-6 justify-content">

                            <Checkbox
                                icon={<Icon.FiCheck stroke="var(--color-primary)" size={14} />}
                                name="rememberme"
                                checked={rememberMe}
                                onChange={(value) => {
                                    setRememberMe(value)
                                }}
                                className="checkbox"
                                labelStyle={{ marginLeft: 5, userSelect: "none" }}
                                label="Remember me"
                            />
                            <Link to="/forgotpassword">Forgot Password?</Link>
                        </div>

                        <button type="submit" name="login" className="btn mt-3">Login</button>
                        <div className="separator mt-2">OR</div>
                    </form>
                    <div className="flex social-login mt-3">
                        <FacebookSignin/>
                        <GoogleSignin/>                        
                    </div>

                    <div className="flex py-3">
                        <span>Don't have an account? 
                            <Link className="signup-link" to="/signup">Sign up</Link>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SigninComponent
