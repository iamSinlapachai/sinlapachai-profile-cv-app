import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeUI from './views/HomeUI'
import WorkUI from './views/WorkUI'
import ContactUI from './views/ContactUI'
import AboutUI from './views/AboutUI'

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeUI />} />
          <Route path="/work" element={<WorkUI />} />
          <Route path="/contact" element={<ContactUI />} />
          <Route path="/about" element={<AboutUI />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App