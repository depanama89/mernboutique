import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet";
import { ToastContainer, toast } from 'react-toastify';
// import  { Toaster } from 'react-hot-toast';
  import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <>
      <Header/>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description}/>
        <meta name="description" content={keywords}/>
        <meta name="description" content={author}/>
        <title>{title}</title>
         
      </Helmet>
        <main style={{minHeight:"70vh"}}>
           {/* <Toaster/> */}

           <ToastContainer />
           {children}
        </main>
      <Footer/>
    </>
  )
}
Layout.defaultProps={
  title:"Ecommerce app- shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author:"patrick kudiatu"
}

export default Layout