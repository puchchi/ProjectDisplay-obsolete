import React from 'react'
import GoogleLogin from 'react-google-login';

function GoogleSignin() {

    const responseGoogle = (responce) => {
        console.log(responce)
    }

    return (
        <GoogleLogin
            clientId="3456"
            render={renderProps => (
                <button className="btn google-login color-google" type="" name="google-login">Login with Google</button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}

        />
    )
}

export default GoogleSignin
