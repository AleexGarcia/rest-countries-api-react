import Api from '../../api_teste'
export default function Info() {
    return (
        Api.map(card => (
            <>
                <button id="more-info__btn" class="more-info__btn">Back</button>
                <figure id="country" class="country">
                    <img src={card.flags.svg} alt={card.name} class="country__img" />
                    <figcaption class="country__info">
                        <h1 class="country__name">${card.name}</h1>
                        <div class="info-1">
                            <span class="country__name-native" ><strong>Native Name: </strong>{card.nativeName
                            }
                            </span>
                            <span class="country__population"><strong>Population: </strong>{card.population}</span>
                            <span class="country__region"><strong>Region: </strong>{card.region}</span>
                            <span class="country__sub-region"><strong>Sub Region: </strong>{card.subregion}</span>
                            <span class="country__capital"><strong>Capital: </strong>{card.capital}</span>
                        </div>
                        <div class="info-2">
                            <span class="country__domain"><strong>Top Level Domain: </strong>{card.topLevelDomain}</span>
                            <span class="country__currencies"><strong>Currencies: </strong>{card.currencies[0].name}</span>
                            <span class="country__languages"><strong>Languages: </strong>{card.languages.map(e => {
                                return `${e.name} `
                            })}</span>
                        </div>
                        <div class="info__border">
                            <span class="country__border">Border Countries</span>
                            <div class="border__links">
                                {card.borders != null ? card.borders.map(sigla => {
                                    for (let i = 0; i < ListaDeCards.cards.length; i++) {
                                        if (sigla == ListaDeCards.cards[i].alpha3Code) {
                                            return `
                             <a onclick='ExibeMoreInfo(${i})' class="country__border-country pointer">${ListaDeCards.cards[i].name}</a>
                        
                            `
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
        ))



    )
}

