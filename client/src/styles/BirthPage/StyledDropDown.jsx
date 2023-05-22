// import styled from "styled-components";

// export const StyledDropDown = styled.select`
//   @media (min-width: 350px) and (max-width: 700px) {
//     width: 18rem;
//     appearance: none;
//     -moz-appearance: "none";
//     -webkit-appearance: "none";
//     background: transparent;
//     padding: 0.55rem;
//     border: 0.063rem solid #ccc;
//     border-radius: 0.5rem;
//     height: 5rem;
//     font-size: 1.8rem;
//     line-height: 1.5;
//     text-align: center;
//     margin: 5rem 0;
//     color: #7c7c7c;

//     :focus {
//       outline: none;
//       border-color: #1e75e5;
//       box-shadow: 0 0 5px #1e75e5;
//     }
//   }
// `;

import React, { useState, useEffect } from "react";
import Select from "react-select";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    boxShadow: "none",
    border: state.isFocused ? "0.063rem solid #1e75e5" : "0.063rem solid #ccc",
    borderRadius: "0.5rem",
    width: "18rem",
    background: "transparent",
    // padding: "0",
    height: "5rem",
    fontSize: "1.8rem",
    lineHeight: "1.5",
    textAlign: "center",
    margin: "5rem 5rem 0 5rem",
    color: "#7c7c7c",
    // overflowX: "scroll",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    display: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "0 0 0 0.1rem",
    // color: "#7c7c7c", // borderBottom: "1px solid #ccc",
    background: state.isFocused
      ? "#f2f2f2"
      : state.isSelected
      ? "#EFF6FF"
      : "transparent",
    color: state.isSelected ? "#06110A" : "#7c7c7c",
    cursor: "pointer",
    textAlign: "center",
    width: "17rem",
    margin: "auto",
  }),

  menu: (provided) => ({
    ...provided,
    width: "20rem", // Adjust the width as needed
    // maxHeight: "200rem", // Adjust the max height as needed
    overflowY: "auto",
    // overflowY: "scroll",
    scrollbarWidth: "none",
    margin: "1rem 4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  menuList: (provided) => ({
    ...provided,
    width: "20rem",
    maxHeight: "20rem",
    overflowY: "scroll",
    scrollbarWidth: "none",
    margin: "1rem 0rem 1rem 0",

    "&::-webkit-scrollbar": {
      width: "0", // Adjust the width of the scrollbar track
      background: "transparent", // Set the background color of the scrollbar track
      display: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      // backgroundColor: "#ccc", // Set the color of the scrollbar thumb
      // borderRadius: "0.5rem", // Set the border radius of the scrollbar thumb
      width: "0", // Adjust the width of the scrollbar track
      background: "transparent", // Set the background color of the scrollbar track
      display: "none",
    },
  }),
};

const CustomDropdown = ({ optionsArray, placeHolder, setSelectedYear }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((response) => response.json())
      .then((data) => {
        const options = data.map((country) => ({
          label: country.name.common,
          value: country.name.common,
          image: country.flags.svg,
        }));
        setCountries(options);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, []);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <Select
      options={optionsArray}
      value={selectedOption}
      onChange={handleSelectChange}
      styles={customStyles}
      isSearchable={false}
      placeholder={placeHolder}
    />
  );
};

export default CustomDropdown;
