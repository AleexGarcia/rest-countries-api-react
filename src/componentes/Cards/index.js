
import API from "../../api_teste";
import style from './Card.module.css'

export default function Cards() {
    
    return (

        API.map((card, index) => (
            <div key={index} id={index} className={style.cardBox} data-region={card.region} data-name={card.name}>
                <figure className={style.card}>
                    <img className={style.card__img} src={card.flags.png} alt={card.name} />
                    <figcaption className={style.card__caption}>
                        <h2 className={style.card__title}>{card.name}</h2>
                        <div className={style.card__information}>
                            <span className={style.card__population}><span className={style.card__populationSpan}>Population: </span> {card.population}</span>
                            <span className={style.card__region}><span className={style.card__regionSpan}>Region: </span> {card.region}</span>
                            <span className={style.card__capital}><span className={style.card__capitalSpan}>Capital: </span>{card.capital !== undefined ? card.capital : `There is no capital`}</span>
                        </div>
                    </figcaption>
                </figure>
            </div>
        ))
    )

}

