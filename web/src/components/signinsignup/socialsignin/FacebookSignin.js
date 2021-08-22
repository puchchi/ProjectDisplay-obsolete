import React from 'react'

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
//import FacebookLogin from 'react-facebook-login';

function FacebookSignin() {

    const responseFacebook = (response) => {
        console.log(response);
    }

    const responseGoogle = (responce) => {
        console.log(responce)
    }

    const componentClicked = () => {
        console.log("facebook componet clicked")
    }

    return (
        <FacebookLogin
            appId="1088597931155576"
            autoLoad={false}
            callback={responseFacebook}
            render={renderProps => (
                <button onClick={() => { console.log("fab login button clicked") }}
                    isdisabled={false}
                    isSdkLoaded={console.log("is sdk loaded")}
                    className="btn fb-login color-fb" type="" name="fb-login">Login with Facebook</button>
            )}
        />
    )
}

export default FacebookSignin
