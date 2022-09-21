import Search from '../../componentes/Search/index'
import Filter from '../../componentes/Filter/index'
import Card from '../../componentes/Card/index'
import './Main.css'
import React, { useContext, useState } from 'react';

import MyContext from '../../contexts/MyContext';
import MoreInfo from '../MoreInfo';



export default function PaginaInicial() {

    const [countries] = useContext(MyContext);
    const [controlInfo, setControlInfo] = useState(false);
    const [exibePaginaInicial, setExibePaginaInicial] = useState(true);
    const [retornaID, setRetornaID] = useState(0);
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState(null)
    
 

    return (
        <main className="main" id="main">

            {controlInfo === true ?
                <section className='more-info container'>
                    <MoreInfo
                        id={retornaID}
                        closeInfo={setControlInfo}
                        exibePaginaInicial={setExibePaginaInicial}
                        retornaID={setRetornaID}
                    />
                </section>
                : null}
            {
                exibePaginaInicial === true ?
                    <>
                        <section className="search-filter container">
                            <Search /><Filter />
                        </section>
                        <section className="cards container" >
                            {countries.map((country, index) => (
                                <Card
                                    key={country.name}
                                    id={index}
                                    region={country.region}
                                    name={country.name}
                                    flags={country.flags.png}
                                    population={country.population}
                                    capital={country.capital}
                                    info={setControlInfo}
                                    paginaPrincipal={setExibePaginaInicial}
                                    retornaID={setRetornaID}
                                    busca={busca}
                                />
                            ))}
                        </section>
                    </>
                    : null

            }



        </main>
    )
}