import chats from "../InputArea/chatsDummyDataGenerator.js";
import React, { useEffect, useRef } from "react";
import { ChatsContainer } from "./ChatDisplayAreaStyles.jsx";
import MessageBox from "../MessageBox/MessageBox.jsx";

export default function ChatDisplayArea() {
  const chatPageRef = useRef(null);
  return (
    <ChatsContainer>
      <div
        className="chat-page"
        ref={chatPageRef}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {chats.map((message, index) => (
          <MessageBox message={message} key={index} />
        ))}
      </div>
    </ChatsContainer>
  );
}
