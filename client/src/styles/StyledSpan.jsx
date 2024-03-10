import styled from "styled-components";

export const StyledSpan = styled.span`
  text-align: center;
  font-size: ${({ fontSize }) => fontSize || "16px"};
  color: ${({ color }) => color || "#000000"};
  align-self: ${({ alignSelf }) => alignSelf || "auto"};
`;
