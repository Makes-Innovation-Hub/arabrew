import React from "react";
import styled from "styled-components";

const HorizontalMargin = styled.span`
  display: flex;
  width: ${({ margin }) => (typeof margin === "string" ? margin : `${margin}rem`)};
`;

const VerticalMargin = styled.span`
  display: flex;
  height: ${({ margin }) => (typeof margin === "string" ? margin : `${margin}rem`)};
`;

function Marginer(props) {
  const { direction } = props;

  if (direction === "horizontal") return <HorizontalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export { Marginer };
