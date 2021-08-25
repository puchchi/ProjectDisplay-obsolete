import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './SignupComponent.css';
import FacebookSignin from '../socialsignin/FacebookSignin';
import GoogleSignin from '../socialsignin/GoogleSignin';

const initialUserType = "user"

function SignupComponent() {
    const [userType, setUserType] = useState(initialUserType)
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
            <section className="signup-section flex pt-6 mt-3 mini-container m-auto">
                <div>
                    <form onSubmit={handleSubmit}>
                        <h2 className="fw-6">Sign up</h2>
                        <hr className="underline" />
                        <h5 className="mt-3 py-1">Email</h5>
                        <input type="text" value={email} title=""
                            name="" placeholder="Please type your email"
                            onChange={(e) => setEmail(e.target.value)} />
                        <h5 className="mt-1 py-1">Password</h5>
                        <input type="password" value={password} title=""
                            name="" placeholder="Please type your password"
                            onChange={(e) => setPassword(e.target.value)} />


                        <div className="flex p-2">
                            <span>By signing up, you agree to our &nbsp;
                                <Link to="/tnc">Terms of Service</Link>
                                &nbsp;and have read and acknowledge the &nbsp;
                                 <Link to="/privacy">Privacy Policy</Link>
                            </span>
                        </div>
                        <button type="submit" name="signup" className="btn mt-1">Signup</button>
                        <div className="separator mt-2">OR</div>
                    </form>
                    <div className="flex social-login mt-3">
                        <FacebookSignin />
                        <GoogleSignin />
                    </div>

                </div>
            </section>
        </>
    )
}

export default SignupComponent
