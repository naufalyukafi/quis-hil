import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Home, ListQuiz } from '@/pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kuis' element={<ListQuiz />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )    
}

export default App