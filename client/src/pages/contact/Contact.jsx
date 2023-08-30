import React, { useContext } from 'react'
import Layout from '../../components/layaout/Layout'
import {BiMailSend, BiPhoneCall, BiSupport} from "react-icons/bi"
import { useAuth } from '../../context/auth'

const Contact = () => {
  const [auth,setAuth]=useAuth()
  return (
    <Layout>
      <div className="row  contactus">
        <p>{JSON.stringify(auth,null)}</p>
        <div className="col-md-6">
          <img src="/images/contactus.jpeg" alt=""  style={{width:"100%"}}/>
        </div>
        <div className="col-md-4">
          <h1 className='bg-dark p-2 text-white text-center'>Contact us</h1>
          <p className="text-justify mt-2">
          any query and info about prodduct feel free to call anytime we 24X7
          vaialible
          </p>
          <p className="mt-3">
            <BiMailSend/>:kudiatutomanitu@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact