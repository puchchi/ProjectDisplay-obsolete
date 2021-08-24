import React from 'react'

function EditorsPickImageComponent(props) {

    const {category, name, profilePic, coverPic, profileURL} = props
    return (

        <a className="editors-pick-item" href={profileURL}>
            <img src={coverPic} alt="" />
            <div className="editors-pick-item-detail flex">
                <div className="">
                    <h3>{category}</h3>
                    <hr className="underline mt-1"></hr>
                    <div className="flex mt-1">
                        <img src={profilePic} />
                        <p className="mx-1 fw-400">By {name}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default EditorsPickImageComponent
