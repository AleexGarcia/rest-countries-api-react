
import Header from '../../componentes/Header/index'
import React, { useState, useEffect } from 'react';
import PaginaInicial from '../PaginaInicial/index';
import Info from '../MoreInfo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyContext from '../../contexts/MyContext';

function App() {

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(response => response.json())
      .then(data => setCountries(data));

  }, [])

  return (
    <MyContext.Provider value={[countries, setCountries]}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<PaginaInicial />} />
          <Route path='info/:id' element={<Info />} />
        </Routes>
      </Router>
    </MyContext.Provider>


  );
}

export default App;
