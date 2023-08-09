import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import Track from './pages/Track';
import SearchCep from './pages/SearchCep';
import About from './pages/About';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/track' element={<Track/>}/>
        <Route path='cepSearch' element={<SearchCep/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App;
