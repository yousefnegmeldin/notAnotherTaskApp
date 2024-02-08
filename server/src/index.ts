import express, { Request, Response } from "express";
import mongoose from "mongoose";
require("dotenv").config();
import DeckModel from "./models/Deck";
import cors from "cors";
import {
  createDeckController,
  deleteDeckController,
  getDecksController,
} from "./controllers/index.ts";

const port = 5000;
const mongo_uri = process.env.MONGO_URI;

const app = express();
app.use(express.json());
app.use((cors as (options: cors.CorsOptions) => express.RequestHandler)({}));

app.delete("/decks/:id", deleteDeckController);
app.get("/decks", getDecksController);
app.post("/decks", createDeckController);

mongoose.connect(mongo_uri as string).then(() => {
  console.log(`connected on port ${port}`);
  app.listen(port);
});
