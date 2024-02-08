import React, { FC } from "react";

interface DeckProps {
  deckTitle: string;
}

const Deck: FC<DeckProps> = ({ deckTitle }) => {
  return (
    <div className="bg-white hover:bg-[#eee] h-[200px] w-[200px] justify-center rounded-2xl flex items-center">
      <p>delete me</p>
      <h1>{deckTitle}</h1>
    </div>
  );
};

export default Deck;
