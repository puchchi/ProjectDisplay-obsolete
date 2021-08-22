import React, {useState} from 'react'
import {Link } from "react-router-dom";

import './MainHeader.css'
import Button from '../../widgets/buttons/Button'

function MainHeader() {
    const [searchInput, setSearchInput] = useState("");
    
    const joinNow = () => {
        console.log("Clicked join now");
    }

    const signIn = () => {
        console.log("Clicked sign in");
    }

    return (
            <div className="sticky">
                <div className="header container">
                    <div className="flex">
                        <Link to="/">
                            <span className="first-title fw-9">Bee</span>
                            <span>lance</span>
                        </Link>
                        <div className="flex">
                            <div className="search-container ">
                                <button className="search-btn" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.285 23.285"><g transform="translate(-4730.935 -25)"><path d="M27.319,37.062A9.384,9.384,0,1,1,36.7,27.679,9.394,9.394,0,0,1,27.319,37.062Zm0-16.682a7.3,7.3,0,1,0,7.3,7.3A7.306,7.306,0,0,0,27.319,20.38Z" transform="translate(4713 6.705)" /><path d="M66.781,68.183a1.038,1.038,0,0,1-.737-.306l-6.951-6.951a1.043,1.043,0,1,1,1.474-1.474L67.519,66.4a1.043,1.043,0,0,1-.737,1.78Z" transform="translate(4686.396 -19.898)" /></g></svg>
                                </button>
                                <div className="search-edit">
                                    <input type="text" value={searchInput} title="Search"
                                        name="" placeholder="Search" onChange={(e)=>setSearchInput(e.target.value)} />
                                </div>
                            </div>
                            <Link className="btn btn-transparent join-now" to="/signup">Join Now</Link>
                            <Link className="btn btn-outline sign-in" to="/signin">Sign in</Link>
                        </div>
                    </div>
                </div>
                <hr className="header-separator" />
            </div>
    )
}

export default MainHeader
