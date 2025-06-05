import React from 'react'
import NavBar from './Component/NavBar'
import Header from './Component/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hero from './Component/Hero'
import Buttom from './Component/Buttom'


function App() {
  
  
  return (
      <div className='overflow-hidden'>
        <div >
          <NavBar />
          {/* <SearchBar />
          <Dropdown /> */}
        </div>

        <div>
          <Header />/
        </div>

        <div>
          <Hero />
        </div>

        <div>
         <Buttom />
        </div>
      </div>
  )
}

export default App