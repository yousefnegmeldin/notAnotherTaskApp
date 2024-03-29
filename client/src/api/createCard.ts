import axios from "axios";
import { API_URL } from "./config";

export const createCard = async (cardText: string, deckId: string) => {
  await axios.post(`${API_URL}/decks/${deckId}/cards`, {
    cardText: cardText,
  });
};
