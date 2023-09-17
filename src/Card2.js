import React from "react"
import Axios from "axios"
export default function Card2(props) {

    const deletePost = () =>{
        Axios.post("https://topsecret-server-0f9adfdc36fc.herokuapp.com/deletePost",{id: props.id}).then(() => {
            window.location.reload(false);
        });
    }

    var typeToColor = {
        news: "blue",
        funFact: "orange"
    }

    return (
        <div className="box" id={typeToColor[props.type]}>
            <div className="article">
                <h1 className="title-article" id="topic">Topic: {props.topic}</h1>
                <p className="content">{props.funFact}</p>
                <button className="delete-button" onClick={deletePost}>DELETE</button>
            </div>
        </div>
    )
}