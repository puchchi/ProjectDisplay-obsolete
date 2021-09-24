import React, { useState } from 'react'
import TextInputWithName from '../../../widgets/buttons/TextInputWithName';
import './MyProfileSecondary.css';

function BasicInfo() {

    const [country, setCountry] = useState("India")
    const [address, setAddress] = useState("")
    const [address2, setAddress2] = useState("")
    const [state, setState] = useState("")
    const [postcode, setPostcode] = useState("")
    const [city, setCity] = useState("")

    return (
        <div className="myprofile-basicinfo">
            <div className="fs-24 myprofile-heading">My Details</div>
            <form className="flex flex-vertical">

                <div >
                    <TextInputWithName
                        name="Country"
                        placeholder="Please type your country"
                        setValue={setCountry}
                    />

                    <TextInputWithName
                        name="Address line 1"
                        placeholder="Please type your address"
                        setValue={setAddress}
                    />
                </div>
                <div>
                    <TextInputWithName
                        name="Address line 2"
                        placeholder="Please type your address"
                        setValue={setAddress2}
                    />


                    <TextInputWithName
                        name="City/Town"
                        placeholder="Please type your city"
                        setValue={setCity}
                    />
                </div>
                <div>
                    <TextInputWithName
                        name="State"
                        placeholder="Please type your state"
                        setValue={setState}
                    />

                    <TextInputWithName
                        name="Postcode"
                        placeholder="Please type your postcode"
                        setValue={setPostcode}
                    />
                </div>

                <div className="fs-24 myprofile-heading">My Serive Providing Location</div>
            </form>
        </div>
    )
}

export default BasicInfo
