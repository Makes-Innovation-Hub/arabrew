import chats from "../InputArea/chatsDummyDataGenerator.js";
import MessageBox from "../MessageBox/MessageBox.jsx";
import { ChatsContainer } from "../../../styles/Chat/ChatDisplay/ChatsContainer.jsx";

export default function ChatDisplayArea() {
  //! must be changed with the  the user name from the logged user slice #68-BRANCH
  const userName = "taufiq zayyad";
  //!  ////////////////////////////////////////////////////////////////////////////
  return (
    <ChatsContainer>
      {chats.map((message, index) => (
        <MessageBox message={message} key={`${message},${index}`} />
      ))}
    </ChatsContainer>
  );
}
