import express from "express"
import {register,login,test, forgotPassword} from "../controllers/auth.controller.js"
import { isAdmin, requireSiignIn } from "../middlewares/authMiddleware.js"


const router = express.Router()

router.post("/register",register)
router.post("/login",login)
//forgot Password || POST
router.post('/forgot-password',forgotPassword)
router.get("/test", requireSiignIn, isAdmin,test)
//protected route auth
router.get("/user-auth",requireSiignIn,(req,res)=>{
    res.status(200).send({ok:true})
})
//protected Adminroute auth
router.get("/admin-auth",requireSiignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true})
})

export default router