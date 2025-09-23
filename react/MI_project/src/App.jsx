import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Menu from './components/Menu';

function Alkalmazas() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Menu />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<FoOldal />} />
            <Route path="/leiras" element={<Leiras />} />
            <Route path="/regisztracio" element={<Regisztracio />} />
          </Routes>
        </main>
      </div>
    </>
  )
}


export default Alkalmazas

