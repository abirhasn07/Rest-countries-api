import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const url = 'https://restcountries.eu/rest/v2/all';
    const [countries, setCountries] = useState([]);

    const fetchCountryData = async () => {
        const response = await fetch(url);
        const CountryData = await response.json();
        setCountries(CountryData);
    };
    useEffect(() => {
        fetchCountryData();
    }, []);

    const CountryRemove = (numericCode) => {
        // console.log('clicked', numericCode);
        const newCountry = countries.filter((country) => country.numericCode !== numericCode);
        setCountries(newCountry);
    };

    // console.log(countries);
    return (
        <section className="grid">
            {countries.map((country) => {
                const { name, population, flag, region, capital, numericCode } = country;
                return (
                    <article key={numericCode}>
                        <div className="main">
                            <img src={flag} alt="" />
                            <div className="details">
                                <h3 className="name-title">{name}</h3>
                                <h4>
                                    Population: <span>{population}</span>
                                </h4>
                                <h4>
                                    Capital: <span>{capital}</span>
                                </h4>
                                <h4 className="region">
                                    Region: <span>{region}</span>
                                </h4>
                                <Link to={`/single/${name}`} className="btn">
                                    Learn More
                                </Link>
                                <button
                                    type="button"
                                    className="removeCountry btn"
                                    onClick={() => CountryRemove(numericCode)}
                                >
                                    Remove Country
                                </button>
                            </div>
                        </div>
                    </article>
                );
            })}
        </section>
    );
};

export default Home;
