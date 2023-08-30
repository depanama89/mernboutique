import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Spinner = ({path= "login"}) => {
  const [count ,setCount]=useState(5)
  const  navigate   =  useNavigate()
  const location = useLocation()

  useEffect(()=>{
    const interval =  setInterval(()=>{
      setCount((prevValue)=> --prevValue)
    },1000)

    count === 0 && navigate(`/${path}`,{
      state:location.pathname
    })
    return ()=>clearInterval(interval)
  },[count,navigate,location,path])

  return (
    <div>
         <div className="d-flex  flex-column p-2  justify-content-center align-items-center"   style={{ height:"100vh"}}>
            <h1 className='text-center '>Redirectingtoyou in {count}</h1>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
  )
}

export default Spinner