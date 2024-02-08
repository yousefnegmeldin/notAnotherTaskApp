import express, { Request, Response } from "express";
import mongoose from "mongoose";
require("dotenv").config();
import DeckModel from "./models/Deck";
import cors from "cors";

const app = express();
app.use(express.json());
app.use((cors as (options: cors.CorsOptions) => express.RequestHandler)({}));

const port = 5000;

const mongo_uri = process.env.MONGO_URI;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.delete("/decks/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  await DeckModel.findByIdAndDelete(id);
  res.json({ message: "deleted" });
});

app.get("/decks", async (req: Request, res: Response) => {
  const decks = await DeckModel.find();
  res.json(decks);
});

app.post("/decks", async (req: Request, res: Response) => {
  const newDeck = new DeckModel({
    title: req.body.title,
  });
  const createdDeckInDatabase = await newDeck.save();
  res.json(createdDeckInDatabase);
});

mongoose.connect(mongo_uri as string).then(() => {
  console.log(`connected on port ${port}`);
  app.listen(port);
});
