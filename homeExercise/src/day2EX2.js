import './App.css';
import React, { Component, useState, useEffect } from 'react';

export const FetchJoke = () =>{

    const [joke, setJoke] = useState("");
    const [jokeSelector, setJokeSelector] = useState(false);
    const [timeJoke, setTimeJoke] = useState({ title: "" });

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random").then(res=>res.json()).then(data=>{
            setJoke(data.value);
        })
    },[]);


    function makeOptions(method, body) {
        method = method ? method : 'GET';
        const opts =  {
          method: method,
          headers: {
            // "Content-type": "application/json",
            "Accept": "application/json"
          }
        }
        if(body){
          opts.body = JSON.stringify(body);
        }
        return opts;
     }


    useEffect(() => {
        function fetchJoke(method, body) {
        const options = makeOptions(method, body);
          console.log("Fetching")
          fetch('https://icanhazdadjoke.com/', options)
          .then(res=>res.json())
          .then(timeJoke =>  setTimeJoke(timeJoke))  
          .catch(err => console.log("Ups Joke Error"+err))
        }

        setInterval(fetchJoke, 10000);
  
      },[jokeSelector]);

      
    

    return (
        <div>
            <p>{joke}</p>
            <button onClick={() => 
                fetch("https://api.chucknorris.io/jokes/random").then(res=>res.json()).then(data=>{
                    setJoke(data.value);
            })
            }>
                get joke
           </button>

            <h4>New joke below every 10sec. wait for it...</h4>
            <p>{timeJoke.joke}</p>

        </div >
    )
}
