import { useState, useEffect } from "react";
import io from "socket.io-client";
import { genChatId } from "../../helpers/genChatId.jsx";
import { useParams } from "react-router-dom";
import { ChatLayout } from "../../styles/Chat/ChatLayout";
import { InputArea } from "../../components/index.js";
import ChatDisplayArea from "../../components/Chat/ChatDisplayArea/ChatDisplayArea";
import Header from "../../components/Chat/Header/Header";
import { useGetChatByNamesQuery } from "../../features/userDataApi.js";

const ENDPOINT = import.meta.env.VITE_SERVER_BASE_URL;
const PORT = import.meta.env.VITE_SERVER_PORT;

let socket;

const Chat = () => {
  // first param the sender HERE is the logged USER
  const params = useParams();
  const { sender, reciever } = params;
  // const senderUser = useSelector((state) => state.userRegister);
  // const recieverUser = useSelector((state) => state.chatUser);

  // console.log("senderUser", senderUser);
  // console.log("recieverUser", recieverUser);

  // const sender = senderUser.name;
  // const reciever = recieverUser.name;

  const src_lang = "hebrew";
  const dest_lang = "arabic";

  const usersArr = [sender, reciever];
  const [msgText, setMsgText] = useState("");
  const chatData = {
    chatId: genChatId(usersArr),
    sender: sender,
    reciever: reciever,
    content: msgText,
    src_lang: src_lang,
    dest_lang: dest_lang,
  };
  const [messages, setMessages] = useState([]);
  //!MUST be refactored and replaced when rtk query and chatschema is configured
  //!

  const { data, isSuccess, isError, error } = useGetChatByNamesQuery(usersArr);

  useEffect(() => {
    if (isError) {
      console.error(error);
    }
    if (isSuccess) {
      setMessages(data.messagesHistory);
    }
  }, [isSuccess, isError]);
  const handleChange = (e) => setMsgText(e.target.value);

  const handleSendMsg = () => {
    socket.emit("new_message", chatData);
    setMsgText("");
  };

  useEffect(() => {
    socket = PORT ? io(`${ENDPOINT}:${PORT}`) : io(`${ENDPOINT}`);
    socket.emit("room_setup", chatData);
    socket.on("message_to_reciever", (newMsg, sender) => {
      console.log("message_to_reciever", newMsg);
      setMessages((prev) => [
        ...prev,
        { content: newMsg, sender: sender, loggedUser: sender },
      ]);
    });
    socket.on("message_to_sender", (newMsg, sender) => {
      console.log("message_to_sender", newMsg);
      setMessages((prev) => [
        ...prev,
        { content: newMsg, sender: sender, loggedUser: sender },
      ]);
    });
    // return () =>socket.on("disconnect",()=>console.log(`${sender} successfully disconnected from chat: ${chatId}`))
  }, []);

  return (
    <ChatLayout>
      <Header reciever={{ name: reciever }} />
      <ChatDisplayArea messages={messages} />
      <InputArea
        typedMsg={msgText}
        handleChange={handleChange}
        handleSendMsg={handleSendMsg}
      />
    </ChatLayout>
  );
};

export default Chat;
