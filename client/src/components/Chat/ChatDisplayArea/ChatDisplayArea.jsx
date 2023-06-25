import MessageBox from "../MessageBox/MessageBox.jsx";
import { useSelector } from "react-redux";
import { ChatsContainer } from "../../../styles/Chat/ChatDisplay/ChatsContainer.jsx";
import { Flex } from "../../../styles/Flex.jsx";
import { CoffeeMugChat } from "../../../assets";
import { StyledMargin } from "../../../styles/StyledMargin.jsx";
import { StyledSpan } from "../../../styles/StyledSpan.jsx";
import StyledSpinner from "../../../styles/StyledSpinner.jsx";

const ChatDisplayArea = ({ messages, showTopics, showSpinner }) => {
  //! must be refactored, when a loggedUser slice is created

  const { name: loggedUser } = useSelector((state) => state.userRegister);

  return (
    <ChatsContainer>
      {messages.map((message) => (
        <MessageBox
          message={message}
          loggedUser={loggedUser}
          key={message.id}
        />
      ))}
      {showTopics && !showSpinner && (
        <Flex direction="column">
          <StyledMargin direction="vertical" margin="4.7rem" />
          <CoffeeMugChat />
          <StyledMargin direction="vertical" margin="2.3rem" />
          <Flex>
            <StyledMargin direction="horizontal" margin="2.5rem" />
            <StyledSpan fontSize="1.4rem" color="#3D4260" fontWeight="400">
              {showTopics}
            </StyledSpan>
            <StyledMargin direction="horizontal" margin="2rem" />
          </Flex>
        </Flex>
      )}
      {!showTopics && showSpinner && <StyledSpinner />}
    </ChatsContainer>
  );
};

export default ChatDisplayArea;
