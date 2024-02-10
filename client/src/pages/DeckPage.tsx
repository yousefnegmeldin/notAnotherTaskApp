import React, { FC, ReactNode, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCards } from "../api/getCards";
import { createCard } from "../api/createCard";
import Card from "../components/Card";

const DeckPage: FC = (): ReactNode => {
  const [cardTitle, setCardTitle] = useState<string>("");
  const [cardArray, setCardArray] = useState<Array<string>>([]);
  const [shouldRefresh, setShouldRefresh] = useState<boolean>(true);
  const { deckId } = useParams();

  const handleCardSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCard(cardTitle, deckId!).then(()=>setShouldRefresh(true));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  };

  const fetchCards = async () => {
    return await getCards(deckId as string);
  };

  useEffect(() => {
    if (shouldRefresh) {
      setShouldRefresh(false);
      console.log('yo');
      fetchCards().then((cards) => setCardArray([...cards]));
    }
  }, [shouldRefresh]);

  return (
    <div className="h-[100vh] justify-center relative items-center flex flex-col bg-slate-900">
      <Link to="/" className="text-white absolute top-10 left-10">
        {"<--"} Go Back
      </Link>
      <div className="w-3/4 flex gap-4 justify-center items-center mb-10">
        {cardArray.map((card: string, index) => {
          return (
            <div key={index}>
              <Card
                index={index}
                text={card}
                setShouldRefresh={setShouldRefresh}
                deckId={deckId as string}
              />
              <h1>{card}</h1>
            </div>
          );
        })}
      </div>
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
        <button className=" bg-white rounded-md p-2 mx-4">Create Card!</button>
      </form>
    </div>
  );
};

export default DeckPage;
