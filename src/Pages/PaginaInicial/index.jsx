import Search from '../../componentes/Search/index'
import Filter from '../../componentes/Filter/index'
import Card from '../../componentes/Card/index'
import './Main.css'
import React, { useContext, useState } from 'react';

import MyContext from '../../contexts/MyContext';
import MoreInfo from '../MoreInfo';
import { useEffect } from 'react';



export default function PaginaInicial() {

    const [countries] = useContext(MyContext);
    const showCountries = countries;
    const [controlInfo, setControlInfo] = useState(false);
    const [exibePaginaInicial, setExibePaginaInicial] = useState(true);
    const [retornaName, setRetornaName] = useState('');
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState(null)
    const [lista, setLista] = useState(showCountries);

    useEffect(() => {
        function testaFiltro(region) {
    
            if (filtro !== null) return filtro === region;
            return true;
        }
        
        function testaBusca(name) {
            const regex = new RegExp(busca, 'i');
            return regex.test(name);
        }
        setLista(showCountries.filter((country, index) => testaBusca(country.name) && testaFiltro(country.region)));

    }, [busca, filtro, showCountries]);


    return (
        <main className="main" id="main">

            {controlInfo &&
                (<section className='more-info container'>
                    <MoreInfo
                        name = {retornaName}
                        closeInfo={setControlInfo}
                        exibePaginaInicial={setExibePaginaInicial}
                        retornaName={setRetornaName}
                    />
                </section>)
            }
            {
                exibePaginaInicial &&
                (<>
                    <section className="search-filter container">
                        <Search busca={busca} setBusca={setBusca} />
                        <Filter filtro={filtro} setFiltro={setFiltro} />
                    </section>
                    <section className="cards container" >
                        {lista.map((country, index) => (
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
                                retornaName={setRetornaName}
                            />
                        ))}
                    </section>
                </>)

            }



        </main>
    )
}