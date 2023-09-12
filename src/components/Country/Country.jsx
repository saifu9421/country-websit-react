

import { useState } from 'react';
import './Country.css'

const Country = ({country , handleVisitedCountry ,handleVisitedFlags}) => {
       console.log(country);
      const {name,flags,area,capital,population,cca3} = country;

      const [visited,setVisited] =  useState(false);

      const handleVisited = () =>{
          setVisited(!visited);
      }
      
    //   console.log(handleVisitedCountry);
      

    return (
        <div className={`country ${visited? 'visited':'non-visited'}`}>
            <h3 style={{color: visited?'purple':'white'}}>name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p style={{color: visited?'purple':'white'}}>area:{area}</p>
            <p style={{color: visited?'purple':'white'}}>capital:{capital}</p>
            <p style={{color: visited?'purple':'white'}}>population:{population}</p>
            <p style={{color: visited?'purple':'white'}}><small>Code:{cca3}</small></p>

            <button onClick={()=>{
                handleVisitedCountry(country)
              
            }}
               >
                Mark visited 
            </button>
             <br />
             <br />
             <hr />

             <button onClick={()=>{
                handleVisitedFlags(country.flags.png)
             }}>
          Add Flag 
             </button>

            <br />
            <hr />
            <br />
        
            <button onClick={handleVisited}>
                {visited?'visited': 'going'}
            </button>
            {visited ? 'i have visited this country.':'I want to  visited'}

        </div>
    );
};

export default Country;