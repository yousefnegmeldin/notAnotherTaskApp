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
  const [shouldRefresh, setShouldRefresh] = useState<boolean>(true);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeckTitle(e.target.value);
  };

  const handleDeckSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createDeck(deckTitle)
      .then(() => setShouldRefresh(true))
      .then(() => console.log("Deck Created!"));
  };

  const fetchDecks = async () => {
    return await getDecks();
  };

  useEffect(() => {
    if (shouldRefresh) {
      setShouldRefresh(false);
      fetchDecks().then((decks) => setDeckArray([...decks]));
      console.log("done");
    }
  }, [shouldRefresh]);

  return (
    <div className="h-[100vh] justify-center items-center flex flex-col bg-slate-900">
      <div className="w-3/4 flex flex-wrap gap-4 justify-center items-center mb-10">
        {deckArray.map((deck: deckObject) => {
          return (
            <div key={deck._id}>
              <Deck
                deckTitle={deck.title}
                deckId={deck._id}
                setShouldRefresh={setShouldRefresh}
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
