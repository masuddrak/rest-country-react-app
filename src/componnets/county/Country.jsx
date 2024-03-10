import './country.css'
const Country = ({country}) => {
    console.log(country)
    const {name}=country
    return (
        <div className="country_container">
            <p>Corty Name:{name.common}</p>
        </div>
    );
};

export default Country;