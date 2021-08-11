const getCovidData = async () => {
  await fetch(
    "https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=GB"
  ).then((response) => response.json());
};
export default getCovidData;
