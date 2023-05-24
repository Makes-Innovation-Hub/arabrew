import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonConversation = styled.button`
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
  &:hover {
    background-color: ${({ hoverBg }) => hoverBg || "#396d37"};
  }
`;
const StyledButton = ({ to, text, ...rest }) => {
  return (
    <Link to={to}>
      <Button {...rest}>{text}</Button>
    </Link>
  );
};
export default StyledButton;
