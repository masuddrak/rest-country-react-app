import { useEffect } from "react";
import { useState } from "react";
import Country from "../county/Country";
import './countrys.css'
import VisitedCountry from "../visitedContry/VisitedCountry";

const Countrys = () => {
    // all countrys loadData
    const [countrys, setCountrys] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountrys(data))
    }, [])
    // single country data
    const [sigleCountry,SetSingleCountry]=useState([])
    const handlerSigleCountry=(country)=>{
        // console.log(country)
        const newSigleCountr=[...sigleCountry,country]
        SetSingleCountry(newSigleCountr)
    }
    // console.log(sigleCountry)
    return (
        <div >
            <h3>Total Country:{countrys.length}</h3>
            <h4>Visited Country : {sigleCountry.length}</h4>
            {/* single countreis */}
            <div  className="countreis_container">
                {
                  sigleCountry.map(country=><VisitedCountry key={country.cca3} country={country}></VisitedCountry>)  
                }
            </div>
            {/* all countreis  */}
            <h4>All Country</h4>
            <div className="countreis_container">
                {
                    countrys.map(country => <Country key={country.cca3} country={country} handlerSigleCountry={handlerSigleCountry}></Country>)
                }
            </div>
        </div>
    );
};

export default Countrys;