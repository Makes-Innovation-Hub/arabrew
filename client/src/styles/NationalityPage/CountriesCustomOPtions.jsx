import React from "react";

const CountriesCustomOption = ({ innerProps, label, data }) => {
  // You can access the option's label and data here
  // Customize the rendering of the option as needed
  return (
    <div {...innerProps}>
      <img src={data.image} alt={label} />
      <span>{label}</span>
    </div>
  );
};

export default CountriesCustomOption;
