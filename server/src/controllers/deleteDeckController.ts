import DeckModel from "../models/Deck";
import { Request, Response } from "express";

export const deleteDeckController = async (req: Request, res: Response) => {
  const id = req.params.id;
  await DeckModel.findByIdAndDelete(id);
  res.json({ message: "deleted" });
};
