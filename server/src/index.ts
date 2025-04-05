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

const port = process.env.PORT || 8080;
const mongo_uri = process.env.MONGO_URI;

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://not-another-task-app.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With, X-Api-Key");
  res.header("Access-Control-Allow-Credentials", "true");
  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.delete("/decks/:id", deleteDeckController);
app.get("/decks", getDecksController);
app.post("/decks", createDeckController);
app.post("/decks/:id/cards", createCardInsideOfDeckController);
app.get("/decks/:id/cards", getCardsInsideOfDeckController);
app.delete("/decks/:id/cards", deleteCardController);

mongoose.connect(mongo_uri as string).then(() => {
  console.log(`connected on port ${port}`);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
