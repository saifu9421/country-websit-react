import { useEffect, useSyncExternalStore } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries , setCountries] = useState([]);

    const [visitedCountries ,  setVisitedCountries] =  useState([]);

    const [visitedFlags , setVisitedFlags] =  useState([]);
      
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data));
    },[]);
  
   const handleVisitedCountry = country =>{
        console.log('add this to your visited country');
        //   console.log(country);
     
        const newVisitedcountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedcountries);

   }
 
   const handleVisitedFlags = flag =>{
    // console.log('flag adding');
    //   console.log(flag);
    const newFlags =  [...visitedFlags , flag];
    setVisitedFlags(newFlags);

   }

    return (

        <div >
            <h3>Countries:{countries.length}</h3>
            {/* Visited country */}
            <div>
                  <h5>
                    visited Countries :{visitedCountries.length}
                  </h5>
               
                  <ul>
                  {
                    visitedCountries.map(country => <li key={country.cca3}>
                        {country.name.common}

                    </li>  )
                  }
                  </ul>
                       
                  {/* display  country */}

              <div className="flag-container">
                {
                    visitedFlags.map(flag => <img key={flag.cca3} src={flag}>
                    </img>)
                }
              </div>
        
            </div>
           <div className="country-container">

       {
        countries.map(country =>  <Country 
        key={country.cca3}
        handleVisitedCountry = {handleVisitedCountry}
        handleVisitedFlags={handleVisitedFlags}
    
         country={country}>
    
        </Country>)
       }

       </div>

        </div>
    );
};

export default Countries;