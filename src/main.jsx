import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Owner from './pages/Owner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
