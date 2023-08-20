import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="profile-picture" src={require("./images/"+props.picture)} alt="pic"></img>
            <h1 className="name">{props.name}</h1>
            <p className="personal-info">{props.city}</p>
            <p className="personal-info">{props.job}</p>
        </div>
    )
}