import './App.css';
import Card2 from './Card2';
import Axios from "axios"
import { useEffect, useState } from 'react';

function App(props) {
  const [cards, setCards] = useState(null)
  // const [posts, setPosts] = useState()

  const getPosts = async () => {
    const resp = await Axios.get("https://topsecret-server-0f9adfdc36fc.herokuapp.com/getPosts").then((res)=>{
      console.log(res);
      const cards = res.data.map(item => {
        return (
            <Card2
            key ={item.id}
            id = {item.id}
            picture="coming-soon.png"
            newTitle={item.newTitle}
            newContent={item.newContent}
            oldTitle={item.oldTitle}
            oldContent={item.oldContent}  
            />
        )
      })
      setCards(cards);
    });
  }

  useEffect(()=>{
    getPosts();
  }, []);



  return (
    <div className="main-app">
      <h1 className="title">Top Secret Project</h1>
      <div className='cards'>
        {cards}
      </div>
    </div>
  );
}

export default App;
