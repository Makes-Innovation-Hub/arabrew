import MessageBox from "../MessageBox/MessageBox.jsx";
import { ChatsContainer } from "../../../styles/Chat/ChatDisplay/ChatsContainer.jsx";
import { useContext } from "react";
import { UserContext } from "../../../contexts/loggedUser.context.jsx";
import { useSelector } from "react-redux";

const ChatDisplayArea = ({ messages }) => {
  const { userData: contextUser } = useContext(UserContext);
  const loggedUser = useSelector((state) => state.userRegister);
  return (
    <ChatsContainer>
      {messages.map((message) => {
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
