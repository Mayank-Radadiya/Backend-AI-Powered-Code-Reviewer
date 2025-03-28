import express from "express";
import { router } from "./router/ai.router.ts";
import cors from "cors";
import connectDB from "./db/index.ts";

export const app = express();
connectDB();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ai", router);
