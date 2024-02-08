import DeckModel from "../models/Deck";
import { Request, Response } from "express";

export const getDecksController = async (req: Request, res: Response) => {
  const decks = await DeckModel.find();
  res.json(decks);
};
