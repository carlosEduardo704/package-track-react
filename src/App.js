import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import Track from './pages/Track';
import SearchCep from './pages/SearchCep';
import About from './pages/About';
import Error from './pages/Error';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/track/:trackCode' element={<Track/>}/>
        <Route path='cepSearch' element={<SearchCep/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='404error' element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App;
