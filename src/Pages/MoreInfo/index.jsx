
import { useContext } from "react"
import './info.css'
import MyContext from "../../contexts/MyContext"

export default function MoreInfo({id}) {
    const [countries] = useContext(MyContext);
    return (
        <>
            <button onClick={()=>{}} id="more-info__btn" className="more-info__btn">Back</button>
            <figure id="country" className="country">
                <img src={countries[id].flags.svg} alt={countries[id].name} className="country__img" />
                <figcaption className="country__info">
                    <h1 className="country__name">{countries[id].name}</h1>
                    <div className="info-1">
                        <span className="country__name-native" ><strong>Native Name: </strong>{countries[id].nativeName
                        }
                        </span>
                        <span className="country__population"><strong>Population: </strong>{countries[id].population}</span>
                        <span className="country__region"><strong>Region: </strong>{countries[id].region}</span>
                        <span className="country__sub-region"><strong>Sub Region: </strong>{countries[id].subregion}</span>
                        <span className="country__capital"><strong>Capital: </strong>{countries[id].capital}</span>
                    </div>
                    <div className="info-2">
                        <span className="country__domain"><strong>Top Level Domain: </strong>{countries[id].topLevelDomain}</span>
                        <span className="country__currencies"><strong>Currencies: </strong>{countries[id].currencies[0].name}</span>
                        <span className="country__languages"><strong>Languages: </strong>{}</span>
                    </div>
                    <div className="info__border">
                        <span className="country__border">Border Countries</span>
                        <div className="border__links">
                          

                        </div>
                    </div>
                </figcaption>
            </figure>
        </>
    )




}

