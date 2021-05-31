import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FilterCountry = () => (
    <section className="filter">
        <form className="country-from">
            <FontAwesomeIcon icon={faSearch} className="icon" />
            <input
                type="text"
                placeholder="Search a Country"
                name="search-country"
                id="seach-country"
            />
        </form>
        <div className="filter-region">
            <select name="select" id="select" className="selectFilter">
                <option value="Filter By Region">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
);

export default FilterCountry;
