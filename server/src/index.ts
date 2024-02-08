import express, { Request, Response } from "express";
import mongoose from "mongoose";
require("dotenv").config();
import DeckModel from "./models/Deck";

const app = express();

const port = 5000;

const mongo_uri = process.env.MONGO_URI;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new DeckModel({
    title: "my first deck",
  });
  const createdDeckInDatabase = await newDeck.save();
  res.json(createdDeckInDatabase);
});

mongoose.connect(mongo_uri as string).then(() => {
  console.log(`connected on port ${port}`);
  app.listen(port);
});
