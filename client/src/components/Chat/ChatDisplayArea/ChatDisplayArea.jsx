import MessageBox from "../MessageBox/MessageBox.jsx";
import { ChatsContainer } from "../../../styles/Chat/ChatDisplay/ChatsContainer.jsx";
// import { useContext } from "react";
// import { UserContext } from "../../../contexts/loggedUser.context.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import PopupBubble from "../../../assets/PopupBubble.jsx";

function ChatDisplayArea({ messages }) {
  // const { userData: contextUser } = useContext(UserContext);
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
  const { name: loggedUser } = useSelector((state) => state.userRegister);
  const clickHandler = () => {
    setIsPopupDisplaying(false);
    sessionStorage.setItem("isFirst", false);
  };

  return (
    <ChatsContainer key={Date.now()}>
      {messages.map((message) => (
        <MessageBox
          message={message}
          loggedUser={loggedUser}
          key={message.id}
        />
      ))}
      {isPopupDisplaying && <PopupBubble onClickFn={clickHandler} />}
    </ChatsContainer>
  );
}

export default ChatDisplayArea;
