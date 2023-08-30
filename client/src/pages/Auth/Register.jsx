import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layaout/Layout'
// import toast from 'react-hot-toast';
import { toast } from 'react-toastify';
import NewRequest from '../utils/NewRequest'
import "../../styles/AuthStyle.css"

const Register = () => {
   const [username,setUserName] = useState("")
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   const [address,setAddress] = useState("")
   const [answer,setAnswer]=useState("")
   const navigate = useNavigate()

   const handleSubmit = async(e)=>{
      e.preventDefault()
      try {
         const res = await NewRequest.post(
            "/auth/register",
            {username,email,password,address,answer}
            )
         if(res && res.data.success){
            toast.success(res.data && res.data.message);
            navigate("/login")

         }else{
            toast.error(res.data.message)
         }       
      } catch (error) {
         console.log(error)
         // toast.error("samething went wrong!")
      }
      
   }
  return (
   <Layout title="Register - Ecommer App">
   <div className="form-container" >
     <form onSubmit={handleSubmit}>
       <h4 className="title">REGISTER FORM</h4>
       <div className="mb-3">
         <input
           type="text"
           value={username}
           onChange={(e) => setUserName(e.target.value)}
           className="form-control"
           id="exampleInputEmail1"
           placeholder="Enter Your Name"
           required
           autoFocus
         />
       </div>
       <div className="mb-3">
         <input
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           className="form-control"
           id="exampleInputEmail1"
           placeholder="Enter Your Email "
           required
         />
       </div>      
       <div className="mb-3">
         <input
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           className="form-control"
           id="exampleInputPassword1"
           placeholder="Enter Your Password"
           required
         />
       
       </div>
       
       <div className="mb-3">
         <input
           type="text"
           value={address}
           onChange={(e) => setAddress(e.target.value)}
           className="form-control"
           id="exampleInputEmail1"
           placeholder="Enter Your Address"
           required
         />
       </div>
       <div className="mb-3">
         <input
           type="text"
           value={answer}
           onChange={(e) => setAnswer(e.target.value)}
           className="form-control"
           id="exampleInputPassword1"
           placeholder="What is your favorite sport"
           required
         />
       </div>
       
       <button type="submit" className="btn btn-primary">
         REGISTER
       </button>
     </form>
   </div>
 </Layout>
  )
}

export default Register