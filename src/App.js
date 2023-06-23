import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import {BrowserRouter as Main, Route, Routes} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const App = () => {
  return (
    <>
     <Main>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/service' Component={Services}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
      <Footer/>
     </Main>
    </>
  )
}

export default App

