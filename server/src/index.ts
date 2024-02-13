import express, { Request, Response } from "express";
import mongoose from "mongoose";
require("dotenv").config();
import DeckModel from "./models/Deck";
import cors from "cors";
import {
  createDeckController,
  deleteDeckController,
  getDecksController,
  createCardInsideOfDeckController,
  getCardsInsideOfDeckController,
  deleteCardController,
} from "./controllers/index";

const port = 3000;
const mongo_uri = process.env.MONGO_URI;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://not-another-task-app.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow these HTTP methods
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Origin",
      "X-Requested-With",
      "Accept",
    ], // Allow these headers
  })
);

app.delete("/decks/:id", deleteDeckController);
app.get("/decks", getDecksController);
app.post("/decks", createDeckController);
app.post("/decks/:id/cards", createCardInsideOfDeckController);
app.get("/decks/:id/cards", getCardsInsideOfDeckController);
app.delete("/decks/:id/cards", deleteCardController);

mongoose.connect(mongo_uri as string).then(() => {
  console.log(`connected on port ${port}`);
  app.listen(port, "0.0.0.0");
});
