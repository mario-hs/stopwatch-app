import express from "express";
import {
  createTime,
  deleteTime,
  getTimes,
} from "../controllers/time-controller.js";

const router = express.Router();

router.post("/", createTime);
router.delete("/:id", deleteTime);
router.get("/", getTimes);

export default router;
