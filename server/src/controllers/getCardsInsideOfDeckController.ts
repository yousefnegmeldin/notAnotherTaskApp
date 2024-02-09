import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const getCardsInsideOfDeckController = async (
  req: Request,
  res: Response
) => {
  const deckId = req.params.id;

  const response = await DeckModel.findById(deckId);
  if (!response) return res.status(404).send("Deck not found");
  res.json(response.cards);
};
