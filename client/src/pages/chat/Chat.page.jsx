import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import { ChatLayout } from "../../styles/Chat/ChatLayout.jsx";
import { InputArea } from "../../components/index.js";
import ChatDisplayArea from "../../components/Chat/ChatDisplayArea/ChatDisplayArea.jsx";

import Header from "../../components/Chat/Header/Header.jsx";
import {
  useCreateChatMutation,
  useGetChatByIdQuery,
} from "../../features/chatDataApi.js";

const ENDPOINT =
  import.meta.env.VITE_SERVER_BASE_URL + ":" + import.meta.env.VITE_SERVER_PORT;

let socket;

const Chat = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const chatId = params.chatId;
  const [messages, setMessages] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [msgText, setMsgText] = useState("");
  const [receiver, setReceiver] = useState(null);
  const loggedUser = useSelector((state) => state.userRegister);
  const { data, isSuccess, isLoading } = useGetChatByIdQuery(params.chatId);
  console.log(chatId);
  const [createChat] = useCreateChatMutation();
  useEffect(() => {
    if (data && isSuccess && !isLoading) {
      console.log("data:", data);
      setMessages((prev) => [...data.chat.messages]);
      setReceiver(data.receiverUser);
    }
  }, [data, isSuccess, isLoading]);

  const handleChange = (e) => setMsgText(e.target.value);
  const navigate = useNavigate();
  const handleSendMsg = async () => {
    if (searchParams.get("new") === "true") {
      const res = await createChat({
        user1Id: loggedUser.id,
        user2Id: searchParams.get("receiver"),
        hub: searchParams.get("hub"),
        message: msgText,
      });
      console.log(res);
      if (res.data) navigate(`/chat-page/${res.data.id}`);
    }
    if (!msgText) return;
    socket.emit("new_message", msgText, chatId, loggedUser, receiver);
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
    if (!chatId) return;
    socket = io(ENDPOINT);
    const chatData = { chatId, sender: loggedUser, receiver };
    socket.emit("room_setup", chatData);
    socket.on("send_message", (newMsg) => {
      console.log("New Message", newMsg);
      setMessages((prev) => {
        // Check if the message already exists to avoid duplicates
        const messageExists = prev.some(
          (message) => message._id === newMsg._id
        );
        return messageExists ? prev : [...prev, newMsg];
      });
    });
  }, [chatId, loggedUser, receiver]);
  console.log("avatar", searchParams.get("avatar"));
  return (
    <ChatLayout>
      <Header
        receiver={{
          name: receiver?.name,
          img: receiver?.avatar || searchParams.get("avatar"),
        }}
      />
      {isLoading && <h2>LOADING...</h2>}
      {/* {isSuccess && <ChatDisplayArea messages={messages} />} */}
      <ChatDisplayArea messages={messages} />
      <InputArea
        typedMsg={msgText}
        handleChange={handleChange}
        handleSendMsg={handleSendMsg}
        loggedUserDetails={loggedUser.userDetails}
        chatUserDetails={receiver}
        currentSuggestions={suggestions}
        setSuggestions={addSuggestionToMsgs}
      />
    </ChatLayout>
  );
};

export default Chat;
