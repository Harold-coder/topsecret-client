import './App.css';
import Card2 from './Card2';
import Card from './Card';
import Axios from "axios"
import { useEffect, useState } from 'react';

function App(props) {
  const [news, setCards] = useState(null)
  const [funFacts, setCards2] = useState(null)
  const [typeShown, setTypeShown] = useState(0)
  // const [posts, setPosts] = useState()

  const dico = {
    0: "Fun Facts 😋",
    1: "News 😈"
  }
  function typeShownClicked(){
    setTypeShown((typeShown+1) % 2)
  }

  const getPosts = async () => {
    const resp = await Axios.get("https://topsecret-server-0f9adfdc36fc.herokuapp.com/getPosts").then((res)=>{
      const news = res.data.map(item => {
        return (
            <Card
            key ={item.id}
            id = {item.id}
            newTitle={item.newTitle}
            newContent={item.newContent}
            oldTitle={item.oldTitle}
            oldContent={item.oldContent}
            type={item.type}
            />
        )
      })
      setCards(news);
    });
    if (resp){
      console.log("Success!");
    }

    const resp2 = await Axios.get("https://topsecret-server-0f9adfdc36fc.herokuapp.com/getFunFacts").then((res)=>{
      const funFacts = res.data.map(item => {
        return (
            <Card2
            key ={item.id}
            id = {item.id}
            funFact={item.funFact}
            topic = {item.topic}
            type="funFact"
            />
        )
      })
      setCards2(funFacts);
    });
    if (resp2){
      console.log("Success!");
    }
  }

  useEffect(()=>{
    getPosts();
  }, []);



  return (
    <div className="main-app">
      <h1 className="title">Top Secret Project</h1>
      <button className='toggle-button' onClick={typeShownClicked}>{dico[typeShown]}</button>
      <div className='cards'>
        {typeShown === 1 && news}
        {typeShown === 0 && funFacts}
      </div>
    </div>
  );
}

export default App;
