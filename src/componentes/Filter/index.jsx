import { useState } from 'react'
import './Filter.css'

export default function Filtro({ filtro, setFiltro }) {
    const [dropdown, setDropDown] = useState(false);

    return (
        <div className="filter">
            <div
                onClick={() => dropdown ? setDropDown(false) : setDropDown(true)}
                className="filter-box"
                id="filter-box">
                <input id="filter-input" name="filter" className="filter__input" placeholder="Filter by Region"
                    readOnly />
                <i className="filter__icon" htmlFor="filter"></i>
            </div>
            {dropdown && (
                <div className="dropDown" id="dropDown-box">
                    <div className="listDropDown" id="listDropDown">
                        <div
                            onClick={() => setFiltro(null)}
                            className="listDropDown-item" id="list-item" data-region="">Todos os paises</div>
                        <div
                            onClick={() => setFiltro("Africa")}
                            className="listDropDown-item" id="list-item" data-region="Africa">Africa</div>
                        <div
                            onClick={() => setFiltro("Americas")}
                            className="listDropDown-item" id="list-item" data-region="Americas">America</div>
                        <div
                            onClick={() => setFiltro("Asia")}
                            className="listDropDown-item" id="list-item" data-region="Asia">Asia</div>
                        <div
                            onClick={() => setFiltro("Europe")}
                            className="listDropDown-item" id="list-item" data-region="Europe">Europe</div>
                        <div
                            onClick={() => setFiltro("Oceania")}
                            className="listDropDown-item" id="list-item" data-region="Oceania">Oceania</div>
                        <div
                            onClick={() => setFiltro("Antarctic")}
                            className="listDropDown-item" id="list-item" data-region="Antarctic">Antarctic</div>
                    </div>
                </div>
            )}

        </div>
    )
}