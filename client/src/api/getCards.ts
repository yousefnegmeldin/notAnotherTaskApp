import axios from "axios";
import { API_URL } from "./config";

export const getCards = async (deckId: string) => {
  const response = axios.get(`${API_URL}/decks/${deckId}/cards`);
  const { data } = await response;
  return data;
};
