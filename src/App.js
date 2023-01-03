import React from 'react'
import { Header, HowThisWork } from "./containers"
import { Navbar, Mid } from './components'
import "./App.css"
const App = () => {
  return (
      <div className='App'>
          <div className='gradient__bg'>
        <Navbar />
        <Header />
    </div>
      <Mid />
      <HowThisWork />
      </div>
  )
}

export default App