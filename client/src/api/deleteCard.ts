import axios from "axios";
import { API_URL } from "./config";

export const deleteCard = async (deckId: string, index: number) => {
  await axios.delete(`${API_URL}/decks/${deckId}/cards`, {
    data: {
      id: deckId,
      index: index,
    },
  });
};
