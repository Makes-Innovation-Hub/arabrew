import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { genChatId } from "../../helpers/genChatId.jsx";

import { useState, useEffect } from "react";
import { ChatLayout } from "../../styles/Chat/ChatLayout";
import { InputArea } from "../../components/index.js";
import ChatDisplayArea from "../../components/Chat/ChatDisplayArea/ChatDisplayArea";

import Header from "../../components/Chat/Header/Header";
import { useGetChatByNamesQuery } from "../../features/userDataApi.js";
const ENDPOINT = import.meta.env.VITE_SERVER_BASE_URL;
console.log("ENDPOINT", ENDPOINT);
let socket;
const Chat = () => {
  const { sender, reciever } = useParams();
  const usersArr = [sender, reciever];
  const [msgText, setMsgText] = useState("");
  const chatData = {
    chatId: genChatId(usersArr),
    sender: sender,
    reciever: reciever,
    content: msgText,
  };
  const [messages, setMessages] = useState([]);
  const namesArr = ["tito blah", "bibo mimo"];
  //!MUST be refactored and replaced when rtk query and chatschema is configured
  //!

  const { data, isLoading, isSuccess, isError, error } =
    useGetChatByNamesQuery(usersArr);

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
    if (isSuccess) {
      console.log(data);
      setMessages(data.messagesHistory);
    }
  }, [isSuccess, isError]);
  const handleChange = (e) => setMsgText(e.target.value);

  const handleSendMsg = () => {
    socket.emit("new_message", chatData);
  const handleSendMsg = (e) => {
    e.preventDefault();
    ws.send(JSON.stringify(msgText));
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
      <Header />
      <ChatDisplayArea messages={messages} />
      {/* {messages.map((message) => (
        <h1 key={Math.random()}>{message}</h1>
      ))} */}
      <InputArea
        typedMsg={msgText}
        handleChange={handleChange}
        handleSendMsg={handleSendMsg}
      />
    </ChatLayout>
  );
};

export default Chat;
