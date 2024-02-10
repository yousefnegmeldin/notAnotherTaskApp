import axios from "axios";
import { API_URL } from "./config";

export const deleteDeck = async (deckId: string) => {
  await axios.delete(`${API_URL}/decks/${deckId}`);
};
