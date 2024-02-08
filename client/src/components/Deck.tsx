import React, { FC } from "react";
import { Link } from "react-router-dom";
import { deleteDeck } from "../api/deleteDeck";

interface DeckProps {
  deckTitle: string;
  deckId: string;
  refreshDecks: () => void;
}

const Deck: FC<DeckProps> = ({ deckTitle, deckId, refreshDecks }) => {
  const handleDeleteDeck = () => {
    deleteDeck(deckId).then(refreshDecks()!);
  };

  return (
    <div className="bg-white relative hover:bg-[#eee] h-[200px] w-[200px] justify-center rounded-2xl flex items-center">
      <button
        className="transition text-center p-4 ease-in absolute w-6 h-6 top-0 right-3"
        onClick={handleDeleteDeck}
      >
        X
      </button>
      <Link to={`/decks/${deckId}`}>
        <h1>{deckTitle}</h1>
      </Link>
    </div>
  );
};

export default Deck;
