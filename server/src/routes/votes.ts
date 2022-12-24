import { Router,Request,Response } from "express";
import userMiddleWare from "../middlewares/user";
import authMiddleWare from "../middlewares/auth";

const vote = (req : Request, res: Response) => {}

const router = Router();
router.post("/", userMiddleWare, authMiddleWare, vote)

export default router