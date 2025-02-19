import React from "react";

export const Profile = () => {
    return (
        <div className="content">
            <div>
                <img className="background-img" src="https://whc.unesco.org/document/182334/t=2000x650" alt="image"/>
            </div>
            <div className="about-me">
                <img className="avatar"
                     src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
                     alt="image"/>
                <div className="text">
                    <span>Nastia K.</span>
                    <span>Day of BD: 12 December</span>
                    <span>City:Minsk</span>
                    <span>Education: BSU, 2020</span>
                    <span>Web-site:...</span>
                </div>
            </div>
            <div>
                My posts
                <div>New posts</div>
            </div>
            <div>post 1</div>
            <div>post 2</div>
        </div>
    )
}