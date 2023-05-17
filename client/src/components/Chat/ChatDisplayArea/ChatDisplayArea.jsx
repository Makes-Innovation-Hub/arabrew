import chats from "../InputArea/chatsDummyDataGenerator.js";
import { ChatsContainer } from "./ChatDisplayAreaStyles.jsx";
import MessageBox from "../MessageBox/MessageBox.jsx";

export default function ChatDisplayArea() {
  return (
    <ChatsContainer>
      {chats.map((message, index) => (
        // could be sorted by timestamp before display -not added here-
        <MessageBox message={message} key={index} />
      ))}
    </ChatsContainer>
  );
}
