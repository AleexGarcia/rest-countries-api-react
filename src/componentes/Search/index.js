import './Search.css'
export default function Search() {
    return (
        <div className="search-box">
            <ion-icon name="search-outline" className="search-box__icon" id="search-icon"></ion-icon>
            <label htmlFor="busca" className="search__label"></label>
            <input className="search__input" type="search" name="busca" id="busca" placeholder="Search for a country..."/>
        </div>
    )
}

