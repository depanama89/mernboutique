import express from "express"
import {register,login,test} from "../controllers/auth.controller.js"
import { isAdmin, requireSiignIn } from "../middlewares/authMiddleware.js"


const router = express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/test", requireSiignIn, isAdmin,test)

export default router