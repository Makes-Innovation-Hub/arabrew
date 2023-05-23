import styled from "styled-components";
import prevConversation from "../pages/DemoArrChatsData";
export const ConversationPageStyle = styled.div`
  width: 98vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${prevConversation.length === 0 && "center"};
  padding: ${prevConversation.length !== 0 && "2rem"};
  padding-bottom: ${prevConversation.length !== 0 && "10rem"};
  position: ${prevConversation.length !== 0 && "fixed"};
  top: ${prevConversation.length !== 0 && "8rem"};
  @media (min-width: 700px) {
    width: 100vw;
  }
`;
