import { components } from "react-select";

const Option = (props) => {
  const { label, value, data } = props;
  return (
    <components.Option {...props}>
      <img
        src={data.image}
        alt={label}
        style={{
          marginRight: "0.5rem",
          width: "3.125rem",
          borderRadius: "2rem",
          margin: "0 1rem 0 0",
        }}
      />
      {label}
    </components.Option>
  );
};

export default Option;
