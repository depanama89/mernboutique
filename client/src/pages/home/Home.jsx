import React from 'react'
import Header from '../../components/layaout/Header'
import Footer from '../../components/layaout/Footer'
import Layout from '../../components/layaout/Layout'
import { useAuth } from '../../context/auth'


const Home = () => {
  const [auth,setAuth]=useAuth()
  return (
    <div>
      <Layout>
        <h1>Home</h1>
        <pre>{JSON.stringify(auth,null,4)}</pre>

      </Layout>
    </div>
  )
}

export default Home