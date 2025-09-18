import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Regiok from "./Regiok"


function App() {

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/regiok" element={<Regiok />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
