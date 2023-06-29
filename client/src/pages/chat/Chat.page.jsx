import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import io from "socket.io-client";
import { genChatId } from "../../helpers/genChatId.jsx";
import { useSelector } from "react-redux";
import { ChatLayout } from "../../styles/Chat/ChatLayout";
import { InputArea } from "../../components/index.js";
import ChatDisplayArea from "../../components/Chat/ChatDisplayArea/ChatDisplayArea";

import Header from "../../components/Chat/Header/Header";
import { useGetChatByNamesQuery } from "../../features/userDataApi.js";

const ENDPOINT =
  import.meta.env.VITE_SERVER_BASE_URL + ":" + import.meta.env.VITE_SERVER_PORT;

let socket;

const Chat = () => {
  const params = useParams();
  const [messages, setMessages] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [msgText, setMsgText] = useState("");
  const state = useLocation().state;
  const loggedUser = useSelector((state) => state.userRegister);

  const { sender, reciever, originLang, targetLang } = params;
  const usersArr = [sender, reciever];

  const chatUserDetails = state.userDetails;
  const loggedUserDetails = loggedUser.userDetails;

  const chatData = {
    chatId: genChatId(usersArr),
    sender: sender,
    reciever: reciever,
    originLang: originLang,
    targetLang: targetLang,
    content: msgText,
  };
  const { data, isSuccess, isLoading, isError, error } = useGetChatByNamesQuery(
    [usersArr, originLang]
  );

  useEffect(() => {
    if (data && isSuccess && !isLoading) {
      setMessages((prev) => [...prev, ...data.messagesHistory]);
    }
  }, [data, isSuccess, isLoading]);

  const handleChange = (e) => setMsgText(e.target.value);

  const handleSendMsg = () => {
    socket.emit("new_message", chatData);
    setMsgText("");
  };

  const addSuggestionToMsgs = (newSuggestions) => {
    const suggestionsUpdated = newSuggestions ? newSuggestions : suggestions;
    const suggestion = suggestionsUpdated.pop();
    const suggestionObj = {
      sender: "server",
      content: suggestion,
    };
    setSuggestions([...suggestionsUpdated]);
    setMessages((prev) => [...prev, suggestionObj]);
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
      <Header reciever={{ name: reciever, img: state.reciverImg }} />
      {isLoading && <h2>LOADING...</h2>}
      {isSuccess && <ChatDisplayArea messages={messages} />}
      <InputArea
        typedMsg={msgText}
        handleChange={handleChange}
        handleSendMsg={handleSendMsg}
        loggedUserDetails={loggedUserDetails}
        chatUserDetails={chatUserDetails}
        currentSuggestions={suggestions}
        setSuggestions={addSuggestionToMsgs}
      />
    </ChatLayout>
  );
};

export default Chat;
