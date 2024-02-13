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
const corsOptions = {
  origin: "https://not-another-task-app.vercel.app",
};
app.use(cors());

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://not-another-task-app.vercel.app/"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Private-Network", "true");
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

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
