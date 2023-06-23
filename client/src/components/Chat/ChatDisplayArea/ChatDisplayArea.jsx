import MessageBox from "../MessageBox/MessageBox.jsx";
import { ChatsContainer } from "../../../styles/Chat/ChatDisplay/ChatsContainer.jsx";
import { useContext } from "react";
import { UserContext } from "../../../contexts/loggedUser.context.jsx";

const ChatDisplayArea = ({ messages }) => {
  const { userData: loggedUser } = useContext(UserContext);
  console.log("messages", messages);
  return (
    <ChatsContainer>
      {messages.map((message) => {
        console.log("message", message);
        return (
          <MessageBox
            message={message}
            loggedUser={loggedUser}
            key={message.id}
          />
        );
      })}
    </ChatsContainer>
  );
};

export default ChatDisplayArea;
