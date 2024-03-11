
const VisitedCountry = ({ country }) => {
    const { name, flags, cca3 } = country
    console.log(country)
    return (
        <div style={{border:"1px solid green",padding:"15px"}}>
            <img src={flags.png} alt="" />
            <p>Corty Name:{name.common}</p>
            <p>CCA3:{cca3}</p>
        </div>
    );
};

export default VisitedCountry;