export const fetchCountryData = (setCountries) => {
  fetch("https://restcountries.com/v3.1/all?fields=name,flags")
    .then((response) => response.json())
    .then((data) => {
      // Map over the country data to create dropdown options
      const dropdownOptions = data.map((country) => ({
        name: country.name.common,
        flag: country.flags.svg, // or country.flags.png for PNG flags
      }));
      // sort the data alphabetically
      dropdownOptions.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setCountries(dropdownOptions);
    })
    .catch((error) => {
      console.error("Error fetching country data:", error);
    });
};
