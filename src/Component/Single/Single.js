import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Single.css';

function Single() {
    const { name } = useParams();
    const [country, setCountry] = useState([]);

    console.log(country);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
            const dataCountry = await res.json();
            setCountry(dataCountry);
        };
        fetchData();
    }, [name]);

    return (
        <>
            <section className="country-details">
                {country.map((c) => {
                    const {
                        flag,
                        population,
                        region,
                        numericCode,
                        capital,
                        borders,
                        currencies,
                        languages,
                        subregion,
                        nativeName,
                    } = c;
                    return (
                        <article key={numericCode}>
                            <Link to="/">
                                <button type="button" className="btn single-btn">
                                    <FontAwesomeIcon icon={faArrowLeft} /> Back Home
                                </button>
                            </Link>
                            <div className="country-single">
                                <div className="s1">
                                    <img src={flag} alt="" />
                                </div>
                                <div className="s2">
                                    <h2>
                                        {name} <span className="span-1">({nativeName})</span>
                                    </h2>
                                    <h2>
                                        Population: <span className="span-1">{population}</span>
                                    </h2>
                                    <h2>
                                        Region: <span className="span-1">{region}</span>
                                    </h2>

                                    <h4>Capital:{capital}</h4>
                                    <h4>Currencies:{currencies[0].name}</h4>
                                    <h4>Languages:{languages[0].name}</h4>
                                    <h4>Sub-Region:{subregion}</h4>
                                </div>
                            </div>
                            <div className="s3">
                                <h4>
                                    Borders:
                                    <span className="B-line">{borders[0]}</span>{' '}
                                    <span className="B-line">{borders[1]}</span>{' '}
                                    <span className="B-line">{borders[2]}</span>
                                    <span className="B-line">{borders[3]}</span>
                                </h4>
                            </div>
                        </article>
                    );
                })}
            </section>
        </>
    );
}

export default Single;
