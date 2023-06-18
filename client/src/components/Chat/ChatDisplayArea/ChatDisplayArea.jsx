import React from "react";
import { v4 as uuidv4 } from "uuid";
import MessageBox from "../MessageBox/MessageBox.jsx";
import { useSelector } from "react-redux";
import { ChatsContainer } from "../../../styles/Chat/ChatDisplay/ChatsContainer.jsx";

const ChatDisplayArea = ({ messages }) => {
  //! must be refactored, when a loggedUser slice is created
  const { name: loggedUser } = useSelector(
    (state) => state.userRegister.connectedUser
  );
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
