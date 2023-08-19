import  JWT from "jsonwebtoken"
import userModel from "../../api/models/users.models.js"

//protected  Routes base 

export const requireSiignIn = async (req,res,next)=>{
   try{
      const decode = JWT.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
      )
      req.user=decode
     next()
   }catch(error){
    res.send({
        message:"protected route"
    })
   }
}
//checkking if is it an admi
export   const  isAdmin =  async(req,res,next)=>{
    try{
        const user = await userModel.findById(req.user._id)
        if(user.role !==1 ){
            return res.status(401).send({
                success: false,
                message: "UnAuthorized Access",
            })
        }else{
            next()
        }

    }catch(error){
        console.log(error)
        res.status(401).send({
            success:false,
            message:"Error in Admin middleware"
        })
    }
}