import MessageBox from "../MessageBox/MessageBox.jsx";
import { useSelector } from "react-redux";
import { ChatsContainer } from "../../../styles/Chat/ChatDisplay/ChatsContainer.jsx";
import { useContext } from "react";
import { UserContext } from "../../../contexts/loggedUser.context.jsx";

const ChatDisplayArea = ({ messages }) => {
  //! must be refactored, when a loggedUser slice is created
  // const { name: loggedUser } = useSelector((state) => {
  //   console.log("logged: ", state.userRegister);
  //   return state.userRegister;
  // });
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
