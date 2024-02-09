import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const deleteCardController = async (req: Request, res: Response) => {
  const deckId = req.params.id;
  const { index } = req.body;
  const response = await DeckModel.findById(deckId);
  if (!response) return res.status(404).send("Deck not found");
  response.cards.splice(index, 1);
  await response.save();
  res.json(response);
};
