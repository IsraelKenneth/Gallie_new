import React from 'react'
import { Route, Router, Routes } from "react-router-dom";
import { Navbar, Footer } from './components'
import { Home } from "./routes"
import "./App.css"


const App = () => {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
  )
}

export default App