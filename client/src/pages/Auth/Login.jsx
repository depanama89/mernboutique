import React, { useState } from 'react'
import Layout from '../../components/layaout/Layout'
import NewRequest from '../utils/NewRequest'
import { useLocation, useNavigate } from 'react-router-dom'
// import { toast } from 'react-hot-toast'
import { toast } from 'react-toastify';
import { useAuth } from '../../context/auth';

const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [auth,setAuth]=useAuth()
  const   navigate=useNavigate()
  const location = useLocation()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      
    const res = await NewRequest.post(
      '/auth/login', {
        email,
        password
      })

    if(res && res.data.message){
      toast.success(res.data && res.data.message)
      setAuth({
        ...auth,
        user:res.data.user,
        token:res.data.token
      })
      localStorage.setItem('auth',JSON.stringify(res.data))
      navigate(location.state || "/")

    }else{
      toast.error(res.data.message)

    }

    }catch(error){
      console.log(error)
      toast.error("something went wrong!")

    }

  }
  return (
    <Layout title="Register - Ecommer App">
    <div className="form-container " style={{ minHeight: "90vh" }}>
      <form onSubmit={handleSubmit}>
        <h4 className="title">LOGIN FORM</h4>

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
          <button
            type="button"
            className="btn forgot-btn"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Forgot Password
          </button>
        </div>

        <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
    </div>
  </Layout>
  )
}

export default Login