const getCovidData = async () => {
  return await fetch(
    "https://api.coronatracker.com/v3/stats/worldometer/country?countryCode="
  ).then((response) => response.json());
};
export default getCovidData;
