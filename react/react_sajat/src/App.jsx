import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Regiok from "./Regiok"
import Regisztracio from "./Regisztracio"


function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/regiok" element={<Regiok />}> </Route>
          <Route path="/regisztracio" element={<Regisztracio />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
