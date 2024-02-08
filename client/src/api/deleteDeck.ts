import axios from "axios";
import { API_URL } from "./config";

export const deleteDeck = async (deckId: string) => {
  axios.delete(`${API_URL}/decks/${deckId}`);
};
