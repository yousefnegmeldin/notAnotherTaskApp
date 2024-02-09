import React, { FC, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCards } from "../api/getCards";

type cardObject = {
  _id: string;
  title: string;
};

const DeckPage: FC = (): ReactNode => {
  const [cardTitle, setCardTitle] = useState<string>("");
  const [cardArray, setCardArray] = useState<Array<cardObject>>([]);
  const { deckId } = useParams();

  const handleCardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Card submitted");
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  };

  const refreshCards = async () => {
    if (!deckId) return;
    const cards = await getCards(deckId);
    setCardArray(cards);
  };

  useEffect(() => {
    refreshCards();
    console.log("test");
  }, []);

  return (
    <div className="h-[100vh] justify-center items-center flex flex-col bg-slate-900">
      <form onSubmit={handleCardSubmit}>
        <label
          className="text-white text-3xl align-middle"
          htmlFor="deck_title"
        >
          Card Text:{" "}
        </label>
        <input
          id="deck_title"
          className="rounded-lg shadow-2xl text-black p-2"
          value={cardTitle}
          onChange={handleTextChange}
        />
        <button className=" bg-white rounded-md p-2 mx-4">Create Deck!</button>
      </form>
    </div>
  );
};

export default DeckPage;
