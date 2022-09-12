import Search from '../Search/index'
import Filter from '../Filter/index'
import Cards from '../Cards/index'
import './Main.css'

export default function Main(){
    return(
        <main className="main" id="main">
            <section className="search-filter container" id="search-filter"><Search/><Filter/></section>
            <section className="more-info container" id="more-info"></section>
            <section className="cards container" id="cartas"><Cards/></section>
        </main>
    )
}