
import Header from '../../componentes/Header/index'
import React, { useState, useEffect } from 'react';
import PaginaInicial from '../PaginaInicial/index';
import MyContext from '../../contexts/MyContext';

function App() {

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(response => response.json())
      .then(data => setCountries(data));

  }, [])

  return (
    <>
      <Header />
      <MyContext.Provider value={[countries, setCountries]}>
        <PaginaInicial />
      </MyContext.Provider>
    </>
  );
}

export default App;
