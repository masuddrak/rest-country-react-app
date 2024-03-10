import { useState } from 'react';
import './country.css'
const Country = ({country}) => {
    // console.log(country)
    const {name,flags,cca3}=country
    const [visited,setVisited]=useState(false)
    const handlerVisited=()=>{
        setVisited(!visited)
    }
    console.log(visited)
    return (
        <div className="country_container">
            <img src={flags.png} alt="" />
            <p>Corty Name:{name.common}</p>
            <p>CCA3:{cca3}</p>
            <button onClick={handlerVisited}>{visited?"visited":"Go Now"}</button>
        </div>
    );
};

export default Country;