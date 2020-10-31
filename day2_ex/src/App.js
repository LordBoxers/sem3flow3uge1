import React, { useState,useEffect } from 'react';
import ListAndKeys from './ListDemo';
import './App.css';


function App() {
  return (
    <div className="App">
      <Counter initCount={parseInt(localStorage.getItem("count"))} incriCount={2000}/>
      <ChuckNorris />
      <DadJoke />
      <ListAndKeys />
    </div>
  );
}

function Counter(props) {
  const {initCount, incriCount} = props;
  const [count, setCount] = useState(initCount);
  
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <p>You clicked me {count} times</p>

      <button onClick={() => setCount(count + incriCount)}>
        plus
    </button>
      <button onClick={() => setCount(count - incriCount)}>
        minus
    </button>
    </div>
  );
}

function ChuckNorris() {
  const [joke, setJoke] = useState("No joke");
  function getJoke() {
    fetch("https://api.chucknorris.io/jokes/random",{headers:{'Accept':'application/json'}})
    .then(res=>res.json())
    .then(data=>{
      setJoke(data.value)
    })

  }

  return (
    <div>
      <button onClick={getJoke}>Get ChuckNorris</button>
  <p>{joke}</p>
    </div>
  );
}

function DadJoke() {
  const [joke, setJoke] = useState("No joke");
  function getJoke() {
    fetch("https://icanhazdadjoke.com/",{headers:{'Accept':'application/json'}})
    .then(res=>res.json())
    .then(data=>{
      setJoke(data.joke)
    })

  }
  useEffect(() => {
    const interval = setInterval(() => {
      getJoke()
    }, 10000)
    return() =>{
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <h2>Daddy Joke</h2>
      <p>{joke}</p>
    </div>
  );
}


export default App;
