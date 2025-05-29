import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestPage from './templates/Teste/Teste';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/teste" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
