import React from 'react'

function TextInput() {
    return (
        <input type="text" value={email} title=""
                                        name="" placeholder="please type your email" 
                                        onChange={(e)=>setEmail(e.target.value)} />
    )
}

export default TextInput
