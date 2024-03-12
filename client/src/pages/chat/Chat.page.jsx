import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import io from "socket.io-client";
import { genChatId } from "../../helpers/genChatId.jsx";
import { useSelector } from "react-redux";
import { ChatLayout } from "../../styles/Chat/ChatLayout.jsx";
import { InputArea } from "../../components/index.js";
import ChatDisplayArea from "../../components/Chat/ChatDisplayArea/ChatDisplayArea.jsx";

import Header from "../../components/Chat/Header/Header.jsx";
import { useGetChatByNamesQuery } from "../../features/userDataApi.js";
import {
  useAddMessageMutation,
  useGetChatByIdQuery,
} from "../../features/chatDataApi.js";

const ENDPOINT =
  import.meta.env.VITE_SERVER_BASE_URL + ":" + import.meta.env.VITE_SERVER_PORT;

let socket;

const Chat = () => {
  const params = useParams();
  const chatId = params.chatId;
  const [messages, setMessages] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [msgText, setMsgText] = useState("");
  // const state = useLocation().state;
  const [receiver, setReceiver] = useState(null);
  const loggedUser = useSelector((state) => state.userRegister);
  const { data, error, isSuccess, isLoading } = useGetChatByIdQuery(
    params.chatId
  );
  console.log(chatId);
  // const { sender, receiver, originLang, targetLang } = params;
  // const usersArr = [sender, receiver];

  // const chatUserDetails = state.userDetails;
  const loggedUserDetails = loggedUser.userDetails;

  // const chatData = {
  //   chatId: genChatId(usersArr),
  //   sender: sender,
  //   reciever: reciever,
  //   originLang: originLang,
  //   targetLang: targetLang,
  //   content: msgText,
  // };
  // const { data, isSuccess, isLoading, isError, error } = useGetChatByNamesQuery(
  //   [usersArr, originLang]
  // );
  const [addMessage] = useAddMessageMutation(params.chatId, msgText);
  useEffect(() => {
    if (data && isSuccess && !isLoading) {
      console.log(data);
      setMessages((prev) => [...data.chat.messages]);
      setReceiver(data.receiverUser);
    }
  }, [data, isSuccess, isLoading]);

  const handleChange = (e) => setMsgText(e.target.value);

  const handleSendMsg = async () => {
    // socket.emit("new_message", data);
    console.log("message: ", msgText);
    if (!msgText) return;
    const response = await addMessage({ chatId, content: msgText });
    console.log(response);
    // console.log(data);
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

  // useEffect(() => {
  //   socket = io(ENDPOINT);
  //   socket.emit("room_setup", data);
  //   socket.on("message_to_reciever", (newMsg) => {
  //     setMessages((prev) => [...prev, newMsg]);
  //   });
  //   socket.on("message_to_sender", (newMsg) => {
  //     setMessages((prev) => [...prev, newMsg]);
  //   });
  //   // return () =>socket.on("disconnect",()=>console.log(`${sender} successfully disconnected from chat: ${chatId}`))
  // }, []);

  return (
    <ChatLayout>
      <Header receiver={{ name: receiver?.name, img: receiver?.avatar }} />
      {isLoading && <h2>LOADING...</h2>}
      {isSuccess && <ChatDisplayArea messages={messages} />}
      {/* <ChatDisplayArea messages={messages} /> */}
      <InputArea
        typedMsg={msgText}
        handleChange={handleChange}
        handleSendMsg={handleSendMsg}
        loggedUserDetails={loggedUserDetails}
        chatUserDetails={receiver}
        currentSuggestions={suggestions}
        setSuggestions={addSuggestionToMsgs}
      />
    </ChatLayout>
  );
};

export default Chat;
