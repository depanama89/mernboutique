import React, { useState } from 'react'
import Layout from '../../components/layaout/Layout'
import NewRequest from '../utils/NewRequest'
import { useLocation, useNavigate } from 'react-router-dom'
// import { toast } from 'react-hot-toast'
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';

const ForgotPassword = () => {
    const [email,setEmail]=useState("")
    const [Newpassword,setNewPassword]=useState("")
    const [answer,setAnswer]=useState("")
    const   navigate=useNavigate()
    const location = useLocation()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      
    const res = await NewRequest.post(
      '/auth/forgot-password', {
        email,
        Newpassword,
        answer
      })

    if(res && res.data.message){
      toast.success(res.data && res.data.message)
      
      navigate("/login")

    }else{
      toast.error(res.data.message)

    }

    }catch(error){
      console.log(error)
      toast.error("something went wrong!")

    }

  }
  return (
    <Layout title={"Reset password - ecommerce app"}>
        <div className="form-container " style={{ minHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">Reset password FORM</h4>

        <div className="mb-3">
          <input
            type="email"
            autoFocus
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
            type="text"
            autoFocus
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Your favorite Sport name "
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={Newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset password
        </button>
      </form>
    </div>
       
    </Layout>
  )
}

export default ForgotPassword