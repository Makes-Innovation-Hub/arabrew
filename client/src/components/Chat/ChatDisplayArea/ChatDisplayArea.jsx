import chats from "../InputArea/chatsDummyDataGenerator.js";
import { ChatsContainer } from "./ChatDisplayAreaStyles.jsx";
import MessageBox from "../MessageBox/MessageBox.jsx";

export default function ChatDisplayArea() {
  return (
    <ChatsContainer>
      {chats.map((message, index) => (
        <MessageBox message={message} key={index} />
      ))}
    </ChatsContainer>
  );
}
