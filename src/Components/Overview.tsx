import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  const currentDisplay = useSelector(selectDisplay);

  return (
    <div className="stack">
      <table>
        <tr>
          <td>Official Name:</td>
          <td>{currentDisplay.name.official}</td>
        </tr>
        <tr>
          <td>Common Name:</td>
          <td>{currentDisplay.name.common}</td>
        </tr>
        <tr>
          <td>Capital City:</td>
          <td>{currentDisplay.capital[0]}</td>
        </tr>
        <tr>
          <td>Current Population:</td>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <td>Independent:</td>
          <td>{currentDisplay.independent ? 'is independent' : 'not independent'}</td> 
        </tr>
        <tr>
          <td>Landlocked:</td>
          <td>{currentDisplay.landlocked ? 'is landlocked' : 'not landlocked'}</td>
        </tr>
        <tr>
          <td>Region:</td>
          <td>{currentDisplay.region}</td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
