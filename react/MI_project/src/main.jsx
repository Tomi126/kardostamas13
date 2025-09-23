import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Alkalmazas from './App';
import { BrowserRouter } from 'react-router-dom'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Alkalmazas />
    </BrowserRouter>
  </React.StrictMode>
);