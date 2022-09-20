import Search from '../../componentes/Search/index'
import Filter from '../../componentes/Filter/index'
import Card from '../../componentes/Card/index'
import './Main.css'
import React, { useContext, useState } from 'react';

import MyContext from '../../contexts/MyContext';
import MoreInfo from '../MoreInfo';



export default function PaginaInicial() {
    const [countries] = useContext(MyContext);
    const [openInfo, setOpenInfo] = useState(false)
    const [retornaID, setRetornaID] = useState(0)


    return (
        <main className="main" id="main">
            <section className="search-filter container" id="search-filter"><Search /><Filter /></section>
            <section  className='more-info container'>
                {openInfo === true ? <MoreInfo id={retornaID} /> : null}
            </section>
            <section className="cards container" id="cartas">
                {countries.map((country, index) => (
                    <Card
                        key={country.name}
                        id={index}
                        region={country.region}
                        name={country.name}
                        flags={country.flags.png}
                        population={country.population}
                        capital={country.capital}
                        info = {setOpenInfo}
                        retornaID = {setRetornaID}
                    />
                ))}
            </section>
        </main>
    )
}