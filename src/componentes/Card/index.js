

import style from './Card.module.css'

export default function Cards(props) {

    return (

        <div id={props.id} className={style.cardBox} data-region={props.region} data-name={props.name}>
            <figure className={style.card}>
                <img className={style.card__img} src={props.flags.png} alt={props.name} />
                <figcaption className={style.card__caption}>
                    <h2 className={style.card__title}>{props.name}</h2>
                    <div className={style.card__information}>
                        <span className={style.card__population}><span className={style.card__populationSpan}>Population: </span> {props.population}</span>
                        <span className={style.card__region}><span className={style.card__regionSpan}>Region: </span> {props.region}</span>
                        <span className={style.card__capital}><span className={style.card__capitalSpan}>Capital: </span>{props.capital !== undefined ? props.capital : `There is no capital`}</span>
                    </div>
                </figcaption>
            </figure>
        </div>

    )

}

