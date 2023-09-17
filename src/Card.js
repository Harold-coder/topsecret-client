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
            {/* <img className="picture" src={require("./images/"+props.picture)} alt="pic"></img> */}
            <div className="article" id="left">
                <h1 className="title-article">{props.newTitle}</h1>
                <p className="content">{props.newContent}</p>
                {/* <p className="type">Type: {props.type}</p> */}
            </div>
            <div className="article">
                <h1 className="title-article">{props.oldTitle}</h1>
                <p className="content">{props.oldContent}</p>
                <button className="delete-button" onClick={deletePost}>DELETE</button>
            </div>
        </div>
    )
}