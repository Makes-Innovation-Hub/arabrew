import MessageBox from "../MessageBox/MessageBox.jsx";
import { ChatsContainer } from "../../../styles/Chat/ChatDisplay/ChatsContainer.jsx";
import { useContext } from "react";
import { UserContext } from "../../../contexts/loggedUser.context.jsx";

const ChatDisplayArea = ({ messages }) => {
  const { userData: loggedUser } = useContext(UserContext);
  return (
    <ChatsContainer>
      {messages.map((message) => (
        <MessageBox
          message={message}
          loggedUser={loggedUser}
          key={message.id}
        />
      ))}
    </ChatsContainer>
  );
};

export default ChatDisplayArea;
