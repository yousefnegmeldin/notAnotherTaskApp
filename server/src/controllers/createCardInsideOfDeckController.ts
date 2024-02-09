import { Request, Response } from "express";
import DeckModel from "../models/Deck";

export const createCardInsideOfDeckController = async (
  req: Request,
  res: Response
) => {
  const id = req.params.id;
  const deck = await DeckModel.findById(id);
  if (!deck) return res.status(404).send("Deck not found");
  const { cardText } = req.body;
  deck.cards.push(cardText);
  await deck.save();
  res.json(deck);
};
