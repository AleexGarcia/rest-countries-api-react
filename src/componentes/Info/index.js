
export default function Info(props, id) {
    return (

        <>
            <button id="more-info__btn" class="more-info__btn">Back</button>
            <figure id="country" class="country">
                <img src={props.flags.svg} alt={props.name} class="country__img" />
                <figcaption class="country__info">
                    <h1 class="country__name">${props.name}</h1>
                    <div class="info-1">
                        <span class="country__name-native" ><strong>Native Name: </strong>{props.nativeName
                        }
                        </span>
                        <span class="country__population"><strong>Population: </strong>{props.population}</span>
                        <span class="country__region"><strong>Region: </strong>{props.region}</span>
                        <span class="country__sub-region"><strong>Sub Region: </strong>{props.subregion}</span>
                        <span class="country__capital"><strong>Capital: </strong>{props.capital}</span>
                    </div>
                    <div class="info-2">
                        <span class="country__domain"><strong>Top Level Domain: </strong>{props.topLevelDomain}</span>
                        <span class="country__currencies"><strong>Currencies: </strong>{props.currencies[0].name}</span>
                        <span class="country__languages"><strong>Languages: </strong>{props.languages.map(e => {
                            { e.name }
                        })}</span>
                    </div>
                    <div class="info__border">
                        <span class="country__border">Border Countries</span>
                        <div class="border__links">
                            {props.borders != null ? props.borders.map(sigla => {
                                for (let i = 0; i < countries.length; i++) {
                                    if (sigla == countries[i].alpha3Code) {
                                        return
                                        <a onClick = ExibeMoreInfo({i}) class="country__border-country pointer">${ListaDeCards.cards[i].name}</a>
                                    }
                                }
                            }).join('')
                                : <span class="country__border-country">There are no border countries</span>
                            }

                        </div>
                    </div>
                </figcaption>
            </figure>
        </>
    )




}

