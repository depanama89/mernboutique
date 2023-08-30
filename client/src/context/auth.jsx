import { useState,useContext, createContext, useEffect } from "react";
import NewRequest from "../pages/utils/NewRequest";


const AuthContext =createContext(null)

const  AuthProvider = ({children}) => {

    const [auth,setAuth] = useState({
        user:null,
        token:""
    })
    // defaultaxios
NewRequest.defaults.headers.common["Authorization"]  = auth?.token
    useEffect(()=>{
        const data=localStorage.getItem('auth')
        if(data){
            const parseData=JSON.parse(data)
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token,
            })
        }
    },[])
    return(
        <AuthContext.Provider  value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}


const useAuth = ()=> useContext(AuthContext)
export  {useAuth,AuthProvider}