import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonForChats = styled.button`
  border-radius: 0.6rem;
  border: none;
  width: 34rem;
  height: 5rem;
  padding: 1rem 0.5rem 1rem 0.5rem;
  cursor: pointer;
  background-color: ${({ bg }) => bg || "#50924E"};
  color: #fff;
  font-style: italic;
  transition: background-color 0.3s;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 4rem;
  z-index: 2;

  &:hover {
    background-color: ${({ hoverBg }) => hoverBg || "#396d37"};
  }
`;
export default StyledButton;
