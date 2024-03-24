import React, { useEffect, useRef, useState } from "react";
import MessageBox from "../MessageBox/MessageBox.jsx";
import { ChatsContainer } from "../../../styles/Chat/ChatDisplay/ChatsContainer.jsx";
import { useSelector } from "react-redux";
import PopupBubble from "../../../assets/PopupBubble.jsx";

function ChatDisplayArea({ messages }) {
  const chatDisplayRef = useRef();
  const [isPopupDisplaying, setIsPopupDisplaying] = useState(() => {
    const currentIsFirst = sessionStorage.getItem("isFirst");
    if (currentIsFirst === undefined) {
      sessionStorage.setItem("isFirst", true);
      return true;
    }
    if (currentIsFirst === "false") {
      return false;
    }
    return true;
  });
  const loggedUser = useSelector((state) => state.userRegister);

  useEffect(() => {
    // Scroll to the bottom after each render
    if (chatDisplayRef.current) {
      chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight;
    }
  }, [messages]);

  const clickHandler = () => {
    setIsPopupDisplaying(false);
    sessionStorage.setItem("isFirst", false);
  };

  return (
    <ChatsContainer ref={chatDisplayRef} key={Date.now()}>
      {messages.map((message, index) => (
        <MessageBox message={message} loggedUser={loggedUser} key={index} />
      ))}
      {isPopupDisplaying && <PopupBubble onClickFn={clickHandler} />}
    </ChatsContainer>
  );
}

export default ChatDisplayArea;
