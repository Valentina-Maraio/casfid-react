import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//view
import Home from './view/Home'
import Noticias from './view/Noticias'
import Noticia from './view/Noticia'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/noticias" element={<Noticias/>}></Route>
        <Route path="/info_noticia" element={<Noticia/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App