import './Filter.css'

export default function Filtro(){
    return(
        <div className="filter">
                <div className="filter-box" id="filter-box">
                    <input type="text" id="filter-input" name="filter" className="filter__input" placeholder="Filter by Region"
                        readOnly/>
                    <i className="filter__icon" htmlFor="filter"></i>
                </div>
                <div className="dropDown" id="dropDown-box">
                    <div className="listDropDown" id="listDropDown">
                        <div className="listDropDown-item" id="list-item" data-region="">Todos os paises</div>
                        <div className="listDropDown-item" id="list-item" data-region="Africa">Africa</div>
                        <div className="listDropDown-item" id="list-item" data-region="Americas">America</div>
                        <div className="listDropDown-item" id="list-item" data-region="Asia">Asia</div>
                        <div className="listDropDown-item" id="list-item" data-region="Europe">Europe</div>
                        <div className="listDropDown-item" id="list-item" data-region="Oceania">Oceania</div>
                        <div className="listDropDown-item" id="list-item" data-region="Antarctic">Antarctic</div>
                    </div>
                </div>
            </div>
    )
}