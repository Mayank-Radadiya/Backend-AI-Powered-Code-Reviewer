import express from "express";
import { router } from "./router/ai.router.ts";
import cors from "cors";

export const app = express();

app.use(
  cors({
    origin: "https://x-ai-code-review.vercel.app/",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ai", router);
