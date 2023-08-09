import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import Track from './pages/Track';
import SearchCep from './pages/SearchCep';
import About from './pages/About';

// components
import NavBar from './components/NavBar';
const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/track' component={Track}/>
        <Route path='cepSearch' component={SearchCep}/>
        <Route path='about' component={About}/>
      </Routes>
    </Router>
  )
}

export default App;
