import axios from "axios";
import { API_URL } from "./config";

export const getDecks = async () => {
  const response = axios.get(`${API_URL}/decks`);
  const { data } = await response;
  return data;
};
