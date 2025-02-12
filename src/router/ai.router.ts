import express from "express";
import { getCodeReview } from "../utils/gemini";

export const router = express.Router();

router.post("/get-response", async (req, res) => {
  try {
    await getCodeReview(req, res);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});
