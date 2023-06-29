import MessageBox from "../MessageBox/MessageBox.jsx";
import { ChatsContainer } from "../../../styles/Chat/ChatDisplay/ChatsContainer.jsx";
import { useContext } from "react";
import { UserContext } from "../../../contexts/loggedUser.context.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import PopupBubble from "../../../assets/PopupBubble.jsx";

function ChatDisplayArea({ messages }) {
  const { userData: contextUser } = useContext(UserContext);
  const [isPopupDisplaying, setIsPopupDisplaying] = useState(() => {
    if (messages.length === 0) {
      return true;
    }
    return false;
  });
  const { name: loggedUser } = useSelector((state) => state.userRegister);
  const clickHandler = () => {
    setIsPopupDisplaying(false);
  };

  return (
    <ChatsContainer>
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
