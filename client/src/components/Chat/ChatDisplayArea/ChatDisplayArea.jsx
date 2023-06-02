import MessageBox from "../MessageBox/MessageBox.jsx";
import { ChatsContainer } from "../../../styles/Chat/ChatDisplay/ChatsContainer.jsx";

export default function ChatDisplayArea({ messages }) {
  return (
    <ChatsContainer>
      {messages.map((message, index) => (
        <MessageBox message={message} key={`${message},${index}`} />
      ))}
    </ChatsContainer>
  );
}
