import { useState } from "react";
import Select, { components } from "react-windowed-select";
import workModelCustomStyle from "./workModelCustomStyle.jsx";

const customStyles = workModelCustomStyle;

const StyledWorkModelDropDown = ({
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
      closeMenuOnSelect={true}
      components={{
        Option: customOption ? customOption : DefaultOption,
      }}
      options={optionsArray}
      value={selectedOption}
      onChange={handleSelectChange}
      isSearchable={isSearchable}
      placeholder={placeHolder}
      styles={customStyles}
    />
  );
};

export default StyledWorkModelDropDown;
