import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
  const [weather, setWeather] = useState();
  const display = useSelector(selectDisplay)
  const latitude = display.capitalInfo.latlng[0]
  const longitude = display.capitalInfo.latlng[1]

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${latitude}, ${longitude}` },
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "5bf4aef887msh2843affc9ac8ee4p1b6320jsna632a668fa55",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => {
        setWeather(res.data)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <table className="overview-table">
        <tr>
          <td>Conditions: </td>
          {/*@ts-ignore */}
          <td>{weather?.current?.condition?.text}</td>
        </tr>
        <tr>
          <td>Temperature: </td>
          {/*@ts-ignore */}
          <td>{weather?.current.temp_f}</td>
        </tr>
        <tr>
          <td>Feels Like: </td>
          {/*@ts-ignore */}
          <td>{weather?.current?.feelslike_f}</td>
        </tr>
        <tr>
          <td>Humidity: </td>
          {/*@ts-ignore */}
          <td>{weather?.current?.humidity}</td>
        </tr>
        <tr>
          <td>Wind Speed: </td>
          {/*@ts-ignore */}
          <td>{weather?.current?.wind_mph} mph{" "} {weather?.current?.wind_dir}</td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;
