import axios from "axios";
import { API_URL } from "./config";

export const createDeck = async (deckTitle: string) => {
  axios.post(`${API_URL}/decks`, {
    title: deckTitle,
  });
};
