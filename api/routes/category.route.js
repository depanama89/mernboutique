import express from "express";
import { isAdmin, requireSiignIn } from "../middlewares/authMiddleware.js";
import { createCategory } from "../controllers/category.controller.js";

const router = express.Router();

router.post("create-category", requireSiignIn, isAdmin, createCategory);

export default router;
