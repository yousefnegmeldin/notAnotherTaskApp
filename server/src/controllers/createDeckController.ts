import DeckModel from "../models/Deck";
import { Request, Response } from "express";

export const createDeckController = async (req: Request, res: Response) => {
  console.log("createDeckController", req.body);
  const newDeck = new DeckModel({
    title: req.body.title,
  });
  const createdDeckInDatabase = await newDeck.save();
  res.json(createdDeckInDatabase);
};
