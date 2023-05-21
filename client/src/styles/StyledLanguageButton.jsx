import styled from "styled-components";

export const StyledLanguageButton = styled.button`
  width: 17rem;
  height: 4.4rem;
  border: 0.1rem solid #50924e;
  border-radius: 0.8rem;
  padding: 1.2rem 1rem;
  cursor: pointer;
  background-color: ${({ bg }) => bg || "#FFFFFF"};
  font-family: "Mulish", sans-serif;
  font-weight: 600;
  text-align: left;
  color: ${({ color }) => color || "#000000"};
  transition: all 0.3s;
`;
