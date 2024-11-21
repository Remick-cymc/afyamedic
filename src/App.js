import React from 'react'
// import navbar from Components 
import Navbar from "./components/Navbar"
// import Footer from components 
import Footer from './components/Footer'
import AddLabtest from './components/AddLabtest'
import AddNurse from "./components/AddNurse"
import ViewLabtest from "./components/ViewLabtest"
import ViewNurses from "./components/ViewNurses"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound'

const App = () => {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        
          
          
          <Route path="/addlabtest" element={<AddLabtest />} />
          <Route path="/viewlabtest" element={<ViewLabtest />} />
          <Route path="/addnurse" element={<AddNurse />} />
          <Route path="/viewnurse" element={<ViewNurses />} />
          <Route path="*" element={<NotFound />} /> 
        
      </Routes>
    </BrowserRouter>

      {/* <Footer/> */}
    </div>
  )
}

export default App
