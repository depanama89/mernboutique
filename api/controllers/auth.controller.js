import User from "../models/users.models.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req,res)=>{

    try{
        const {username,email,password,phone,address}=req.body

        if(!username){
            return res.send({error:'Username is required'})
        }
        if(!email){
            return res.send({error:'Email is required'})
        }
        if(!password){
            return res.send({error:'password is required'})
        }
        // if(!phone){
        //     return res.send({error:'phone is required'})
        // }
        if(!address){
            return res.send({error:'address is required'})
        }
        //check user
        const existingUser = await User.findOne({email})
        //exisiting user
        if(existingUser){
            return res.status(200).send({
                success:true,
                message: "Already Register please"
            })
        }
        const hash=bcrypt.hashSync(req.body.password,5)
        const newUser = new User({
            ...req.body,
            password:hash,
        })

        await newUser.save()

        res.status(201).send({
            success:true,
            message:"Register successfuly",
            newUser
        })

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"error in register controller",
            error
        })

    }

}

export const login = async(req,res) => {
    try{
        const {email,password} = req.body

        //validation
       if(!email || !password){
        return res.status(404).send({
            success:false,
            message:"invalid Email or password"
        })
       }
       const user = await User.findOne({email:req.body.email})
       if(!user){
        return res.status(404).send({
            success:false,
            message:"user not found"
        })
       }
       const isCorrect = bcrypt.compareSync(req.body.password,user.password)
       if(!isCorrect){
        return res.status(404).send({
            success:false,
            message:"wrong password"
        })
       }
    //    const token =jwt.sign({
    //     id:user._id,
    //     email:user.email
    //    },process.env.JWT_SECRET)
       const token =jwt.sign({
        _id:user._id
       },process.env.JWT_SECRET,{
        expiresIn:"7d"
       })
       res.status(200).send({
        success:true,
        message: "login successfull",
        user:{
            _id: user._id,
            username:user.username,
            email:user.email

        },
        token
       })

       //on separer le mot de passe
    //    const { ...info}=user._doc
    //    res.cookie("accessToken",token,{httpOnly:true,
    // }).status(200).send(info)

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in login",
            error
        })
    }
}

export const test  = async(req,res)=>{
    res.send({
        message:"protected  route"
    })
}
