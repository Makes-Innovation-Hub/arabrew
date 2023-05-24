import { useState } from "react";
import Select, { components } from "react-select";
import MyCustomStyles from "./DropDownCustomStyles.jsx";

const customStyles = MyCustomStyles;

const CustomDropdown = ({
  optionsArray,
  placeHolder,
  selected,
  setSelected,
  isSearchable,
  customOption,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const DefaultOption = (props) => {
    const { label, value, data } = props;
    return <components.Option {...props}>{label}</components.Option>;
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelected({ ...selected, value: selectedOption.value });
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
        option: customOption ? customOption : DefaultOption,
      }}
    />
  );
};

export default CustomDropdown;
