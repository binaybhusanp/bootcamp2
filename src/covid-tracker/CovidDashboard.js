import { useEffect, useState } from "react";
import getCovidData from "./utils/GetCovidData";

const CovidDashboard = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    getCovidData()
      .then((data) => setCountriesData(data))
      .catch((error) => window.alert(error));
  });

  return (
    <div>
      <h1>Covid Dashboard</h1>
      <table>
        <thead>
          <tr>
            <td>Country</td>
            <td>Daily Confirmed</td>
            <td>Total Confirmed</td>
            <td>Active Cases</td>
            <td>Total Deaths</td>
            <td>Last Updated</td>
          </tr>
        </thead>
        <tbody>
          {countriesData
            ? countriesData.map((countryData) => (
                <tr>
                  <td>{countryData.countryName}</td>
                  <td>{countryData.dailyConfirmed}</td>
                  <td>{countryData.totalConfirmed}</td>
                  <td>{countryData.activeCases}</td>
                  <td>{countryData.totalDeaths}</td>
                  <td>{countryData.lastUpdated}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};
export default CovidDashboard;
