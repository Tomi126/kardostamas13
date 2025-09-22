import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

import Home from './pages/Home.jsx'
import Contacts from './pages/Contacts.jsx'
import About from './pages/About.jsx'



function App() {

  return (
    <>
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/contacts" element={<Contacts />}> </Route>
          <Route path="/about" element={<About />}> </Route>
        </Routes>
      </BrowserRouter>

    </div>

    </>
  )
}

export default App
