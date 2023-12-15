import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home'
import Contato from './Pages/Contato';
import Sobre from './Pages/Sobre';
import Quiz from './Pages/Quiz';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';
import './Styles/Module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar name='GTi Jr'></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contato' element={<Contato/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
