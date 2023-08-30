import { useEffect,useState } from "react";

import { Outlet } from "react-router-dom";
import NewRequest from "../../pages/utils/NewRequest";
import { useAuth } from "../../context/auth";
import Spinner from "../Spinner";

// import {  useAuth} from "../../../context/auth"
export default function AdminRoute(){
    const [ok,setOk]= useState(false)
    const  [auth,setAuth]=useAuth()

    useEffect(()=>{
        const  authCheck  =  async()=>{
            const res = await NewRequest.get('/auth/admin-auth')
            if(res.data.ok){
                setOk(true)
            }else{
                setOk(false)
            }
        }
        if(auth?.token)   authCheck()
    },[auth?.token])

    return ok ? <Outlet/> :<Spinner path="/"/>
}