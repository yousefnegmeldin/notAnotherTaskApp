import "./App.css";
import React, { useState, useEffect } from "react";
import Deck from "./components/Deck";
import { createDeck } from "./api/createDeck";
import { getDecks } from "./api/getDecks";
function App() {
  type deckObject = {
    _id: string;
    title: string;
  };

  const [deckTitle, setDeckTitle] = useState<string>("");
  const [deckArray, setDeckArray] = useState<Array<deckObject>>([]);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeckTitle(e.target.value);
  };

  const handleDeckSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createDeck(deckTitle).then(() => refreshDecks());
  };

  const refreshDecks = async () => {
    const decks = await getDecks();
    setDeckArray(decks);
  };

  useEffect(() => {
    refreshDecks();
  }, [deckArray]);

  return (
    <div className="h-[100vh] justify-center items-center flex flex-col bg-slate-900">
      <div className="w-3/4 flex gap-4 justify-center items-center mb-10">
        {/* todo, map over array and render deck component for each one. */}
        {deckArray.map((deck: deckObject) => {
          return (
            <div key={deck._id}>
              <Deck
                deckTitle={deck.title}
                deckId={deck._id}
                refreshDecks={refreshDecks}
              />
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
