import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Deck from "./components/Deck";
function App() {
  const [deckTitle, setDeckTitle] = useState<string>("");
  const [deckArray, setDeckArray] = useState<Array<object>>([]);

  interface deckObject {
    title: string;
    _id: string;
    __v: number;
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeckTitle(e.target.value);
  };

  const handleDeckSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/decks", {
        title: deckTitle,
      })
      .then((res) => console.log(res));
  };

  useEffect(() => {
    axios.get("http://localhost:5000/decks").then((res) => {
      setDeckArray(res.data);
    });
  }, []);

  return (
    <div className="h-[100vh] justify-center items-center flex flex-col bg-slate-900">
      <div className="w-3/4 flex gap-4 justify-center items-center mb-10">
        {/* todo, map over array and render deck component for each one. */}
        {deckArray.map((deck) => {
          return (
            <div key={deck._id}>
              <Deck deckTitle={deck.title} />
            </div>
          );
        })}
      </div>
      <form onSubmit={handleDeckSubmit}>
        <label
          className="text-white text-3xl align-middle"
          htmlFor="deck_title"
        >
          Deck Title:{" "}
        </label>
        <input
          id="deck_title"
          className="rounded-lg shadow-2xl text-black p-2"
          value={deckTitle}
          onChange={handleTextChange}
        />
        <button className=" bg-white rounded-md p-2 mx-4">Create Deck!</button>
      </form>
    </div>
  );
}

export default App;
