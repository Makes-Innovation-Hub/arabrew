import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { genChatId } from "../../helpers/genChatId.jsx";

import { ChatLayout } from "../../styles/Chat/ChatLayout";
import { InputArea } from "../../components/index.js";
import ChatDisplayArea from "../../components/Chat/ChatDisplayArea/ChatDisplayArea";

import Header from "../../components/Chat/Header/Header";
import { useGetChatByNamesQuery } from "../../features/userDataApi.js";

let socket;
const ENDPOINT = import.meta.env.VITE_SERVER_BASE_URL;

const Chat = () => {
  // first param the sender HERE is the logged USER
  const params = useParams();
  const { sender, reciever } = params;

  // const senderUser = await fetch(
  //   `${import.meta.env.VITE_SERVER_BASE_URL}:${
  //     import.meta.env.VITE_SERVER_PORT
  //   }/api/user/${sender}`
  // );
  // const recieverUser = await fetch(
  //   `${import.meta.env.VITE_SERVER_BASE_URL}:${
  //     import.meta.env.VITE_SERVER_PORT
  //   }/api/user/${reciever}`
  // );

  // const src_lang = senderUser.userDetails.nativeLanguage;
  // const dest_lang = recieverUser.userDetails.nativeLanguage;

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
  //! const namesArr = ["tito blah", "bibo mimo"];
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
    socket = io(ENDPOINT);
    socket.emit("room_setup", chatData);
    socket.on("message_to_reciever", (newMsg) => {
      console.log("message_to_reciever", newMsg);
      setMessages((prev) => [...prev, newMsg]);
    });
    socket.on("message_to_sender", (newMsg) => {
      console.log("message_to_sender", newMsg);
      setMessages((prev) => [...prev, newMsg]);
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
