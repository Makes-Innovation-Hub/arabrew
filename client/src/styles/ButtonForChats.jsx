import styled from "styled-components";
import { Link } from "react-router-dom";
import prevConversation from "../pages/DemoArrChatsData";
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
  position: ${prevConversation.length !== 0 && "fixed"};
  left: ${prevConversation.length !== 0 && "50%"};
  transform: ${prevConversation.length !== 0 && "translateX(-50%)"};
  bottom: ${prevConversation.length !== 0 && "4rem"};
  z-index: ${prevConversation.length !== 0 && "2"};
  &:hover {
    background-color: ${({ hoverBg }) => hoverBg || "#396d37"};
  }
`;
