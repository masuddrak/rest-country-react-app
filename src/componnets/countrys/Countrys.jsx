import { useEffect } from "react";
import { useState } from "react";
import Country from "../county/Country";

const Countrys = () => {
    const [countrys,setCountrys]=useState([])

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res =>res.json())
        .then(data=>setCountrys(data))
    },[])
    return (
        <div>
            <h3>Total Country:{countrys.length}</h3>
            {
                countrys.map(country=><Country key={name} country={country}></Country>)
            }
        </div>
    );
};

export default Countrys;