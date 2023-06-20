import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { genChatId } from "../../helpers/genChatId.jsx";
// import { useSelector } from "react-redux";

import { ChatLayout } from "../../styles/Chat/ChatLayout";
import { InputArea } from "../../components/index.js";
import ChatDisplayArea from "../../components/Chat/ChatDisplayArea/ChatDisplayArea";

import Header from "../../components/Chat/Header/Header";
import { useGetChatByNamesQuery } from "../../features/userDataApi.js";

const ENDPOINT = import.meta.env.VITE_SERVER_BASE_URL;

let socket;

const Chat = () => {
  const params = useParams();
  const { sender, reciever, originLang, targetLang } = params;
  const usersArr = [sender, reciever];
  const [msgText, setMsgText] = useState("");
  const chatData = {
    chatId: genChatId(usersArr),
    sender: sender,
    reciever: reciever,
    originLang: originLang,
    targetLang: targetLang,
    content: msgText,
  };
  const [messages, setMessages] = useState([]);
  //!MUST be refactored and replaced when rtk query and chatschema is configured
  //!

  const { data, isSuccess, isLoading, isError, error } = useGetChatByNamesQuery(
    [usersArr, originLang]
  );

  useEffect(() => {
    if (isError) {
      console.error(error);
    }
    if (isSuccess) {
      setMessages(data.messagesHistory);
      console.log(data);
    }
    console.log(params);
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
      setMessages((prev) => [...prev, newMsg]);
    });
    socket.on("message_to_sender", (newMsg) => {
      setMessages((prev) => [...prev, newMsg]);
    });
    // return () =>socket.on("disconnect",()=>console.log(`${sender} successfully disconnected from chat: ${chatId}`))
  }, []);

  return (
    <ChatLayout>
      <Header reciever={{ name: reciever }} />
      {isLoading && <h2>LOADING...</h2>}
      {isSuccess && <ChatDisplayArea messages={messages} />}
      <InputArea
        typedMsg={msgText}
        handleChange={handleChange}
        handleSendMsg={handleSendMsg}
      />
    </ChatLayout>
  );
};

export default Chat;
