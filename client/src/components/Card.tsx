import React, { FC } from "react";
import { deleteCard } from "../api/deleteCard";

interface CardProps {
  text: string;
  deckId: string;
  index: number;
  setShouldRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card: FC<CardProps> = ({ text, deckId, index, setShouldRefresh }) => {
  const handleDeleteCard = () => {
    deleteCard(deckId, index).then(() => setShouldRefresh(true));
  };

  return (
    <div className="bg-white relative hover:bg-[#eee] h-[400px] w-[200px] justify-center rounded-2xl flex items-center">
      <button
        className="transition text-center p-4 ease-in absolute w-6 h-6 top-0 right-3"
        onClick={handleDeleteCard}
      >
        X
      </button>
      <h1>{text}</h1>
    </div>
  );
};

export default Card;
