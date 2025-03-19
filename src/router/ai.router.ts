import express, { type Request, type Response } from "express";
import { getCodeReview } from "../utils/gemini.ts";
import { userAction } from "../action/index.ts";

export const router = express.Router();

router.post("/get-response", async (req: Request, res: Response) => {
  try {
    await getCodeReview(req, res);
    await userAction(req.body.code);

    res
      .status(200)
      .send({ message: "Code review request processed successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});
