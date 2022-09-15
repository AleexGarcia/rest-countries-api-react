import Search from '../Search/index'
import Filter from '../Filter/index'
import Cards from '../Cards/index'
import './Main.css'
import React, { useState,useEffect } from 'react';

export default function Main() {
    const [countries, setCountries] = setState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
            .then(response => response.json())
            .then(data => setCountries(data));
    }, [])

    return (
        <main className="main" id="main">
            <section className="search-filter container" id="search-filter"><Search /><Filter /></section>
            <section className="more-info container" id="more-info">
                
            </section>
            <section className="cards container" id="cartas">
                {countries.map((country, index) => (
                    <Cards
                        key={country.name}
                        id={index}
                        region={country.region}
                        name={country.name}
                        flags={country.flags.png}
                        population={country.population}
                        capital={country.capital}
                    />
                ))}
            </section>
        </main>
    )
}