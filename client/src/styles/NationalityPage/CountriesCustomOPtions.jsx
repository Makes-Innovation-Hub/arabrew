import { components } from "react-select";
import { Flex } from "../Flex";
import LazyLoad from "react-lazy-load";
import React from "react";

const Option = React.memo((props) => {
  const { label, value, data } = props;
  return (
    <LazyLoad height={30} offset={300}>
      <components.Option {...props}>
        <Flex style={{ justifyContent: "flex-start", width: "100%" }}>
          <img
            loading="lazy"
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
        </Flex>
      </components.Option>
    </LazyLoad>
  );
});

export default Option;
