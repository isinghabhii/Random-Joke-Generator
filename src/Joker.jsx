import { useState, useEffect } from "react";
import './Joker.css';

export default function Joker() {
    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    }
   
    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        getFirstJoke();
    }, []);


    return (
        <div className="joke-container">
            <h3 className="joke-heading">🎭 Random Joke!</h3>
            <h2 className="joke-setup">{joke.setup}</h2>
            <h2 className="joke-punchline">{joke.punchline} <span className="laugh-emoji">😂</span></h2>
            <button className="joke-button" onClick={getNewJoke}>New Joke</button>
        </div>
    )
}