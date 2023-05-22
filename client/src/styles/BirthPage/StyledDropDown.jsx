import { useState } from "react";
import Select from "react-select";
import MyCustomStyles from "./DropDownCustomStyles.jsx";

const customStyles = MyCustomStyles;

const CustomDropdown = ({
  optionsArray,
  placeHolder,
  selectedYear,
  setSelectedYear,
  isSearchable,
  customOptions,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelectedYear({ ...selectedYear, value: selectedOption });
  };

  return (
    <Select
      options={optionsArray}
      value={selectedOption}
      onChange={handleSelectChange}
      styles={customStyles}
      isSearchable={isSearchable}
      placeholder={placeHolder}
      components={{
        option: customOptions ? customOptions : null,
      }}
      getOptionLabel={(option) => option.label} // Specify the label key in the option object
      getOptionValue={(option) => option.value} // Specify the value key in the option object
    />
  );
};

export default CustomDropdown;
