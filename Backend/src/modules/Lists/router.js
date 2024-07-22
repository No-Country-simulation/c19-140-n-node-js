import express from "express";
import { createList, joinList, addSong, deleteSong } from "./controller.js";

const router = express.Router();

router.post("/create", createList);
router.post("/join", joinList);
router.post("/addSong", addSong);
router.post("/deleteSong", deleteSong);

export default router;
