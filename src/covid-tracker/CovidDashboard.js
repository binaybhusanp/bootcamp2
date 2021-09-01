import { useEffect, useState } from "react";
import getCovidData from "./utils/GetCovidData";
import "./styles/dataTable.scss";

const CovidDashboard = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    getCovidData()
      .then((data) => setCountriesData(data))
      .catch((error) => window.alert(error));
  });

  return (
    <div className="covid-dashboard">
      <h1 className="covid-dashboard__title">Covid Dashboard</h1>
      <table className="covid-dashboard__table">
        <thead className="covid-dashboard__table-header">
          <tr>
            <th>Country</th>
            <th>Daily Confirmed</th>
            <th>Total Confirmed</th>
            <th>Active Cases</th>
            <th>Total Deaths</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody className="covid-dashboard__table-body">
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
