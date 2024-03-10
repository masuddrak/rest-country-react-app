import { useEffect } from "react";
import { useState } from "react";
import Country from "../county/Country";
import './countrys.css'

const Countrys = () => {
    const [countrys, setCountrys] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountrys(data))
    }, [])
    return (
        <div >
            <h3>Total Country:{countrys.length}</h3>
            <div className="countreis_container">
                {
                    countrys.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countrys;