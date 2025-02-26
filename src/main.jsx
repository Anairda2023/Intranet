import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 

import Login from './Login.jsx';
import Home from './pages/home.jsx'; 
import Cadastro from './pages/cadastro.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        
        
       
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
