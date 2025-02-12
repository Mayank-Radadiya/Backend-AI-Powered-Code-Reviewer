import express from "express";
import { router } from "./router/ai.router";
import cors from "cors";

export const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ai", router);
