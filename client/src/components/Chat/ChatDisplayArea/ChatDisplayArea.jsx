import chats from "../InputArea/chatsDummyDataGenerator.js";
import MessageBox from "../MessageBox/MessageBox.jsx";
import { ChatsContainer } from "../../../styles/Chat/ChatDisplay/ChatsContainer.jsx";
import { useState } from "react";

export default function ChatDisplayArea() {
  const [isPopupDisplaying, setIsPopupDisplaying] = useState(
    chats.length === 0 ? true : false
  );

  const clickHandler = () => {
    setIsPopupDisplaying(false);
  };

  return (
    <ChatsContainer>
      {chats.map((message, index) => (
        // could be sorted by timestamp before display -not added here-
        <MessageBox message={message} key={index} />
      ))}
      {isPopupDisplaying && (
        <img
          onClick={clickHandler}
          width="200rem"
          height="200rem"
          src="../../../../img/click-me.jpg"
          style={{
            position: "absolute",
            bottom: "12%",
            left: "15%",
          }}
        />
      )}
    </ChatsContainer>
  );
}
