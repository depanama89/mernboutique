import React from 'react'
import "./App.css"
import Layout from './components/layaout/Layout'
import {Routes,Route} from  "react-router-dom"
import Home from './pages/home/Home'
import Contact from "./pages/contact/Contact"
import About from './pages/about/About'
import NoFound from './pages/nofound/NoFound'
import Policy from './pages/policy/Policy'

const App = () => {
  return (
    <>
    <Routes>

     < Route path="/" element={<Home/>}  /> 
     <Route   path='/about'  element={<About/>}/>     
     <Route   path='/contact'  element={<Contact/>}/> 
     <Route   path='/policy'  element={<Policy/>}/>
     <Route   path='*'  element={<NoFound/>}/>    
    </Routes>  
    </>
  )
}

export default App