import { useState } from "react";
import "./Country.css";
import CountryDetails from "./CountryDetails/CountryDetails";
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  console.log(handleVisitedCountries);
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3>Name:{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population:{population}</p>
      <p>Area:{area}</p>
      <p>Code:{cca3}</p>
      <button onClick={() => handleVisitedCountries(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Visited Flags
      </button>
      <br />
      <button
        onClick={() => {
          setVisited(!visited);
        }}
      >
        {visited ? "visited" : "Going"}
      </button>
      {visited
        ? "I Have Visited This Country."
        : "I Want to Visit This Country."}
        <hr />
        <CountryDetails></CountryDetails>
    </div>
  );
};

export default Country;
