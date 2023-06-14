import { useState, useEffect } from "react";
import { ChatLayout } from "../../styles/Chat/ChatLayout";
import { InputArea } from "../../components/index.js";
import ChatDisplayArea from "../../components/Chat/ChatDisplayArea/ChatDisplayArea";

import Header from "../../components/Chat/Header/Header";
import { useParams } from "react-router-dom";
import { useGetChatByNamesQuery } from "../../features/userDataApi.js";
import { genRoomId } from "../../utils/genRoomId";
// const port = import.meta.env.VITE_WEB_SOCKET_PORT;
const ws = new WebSocket(`ws://localhost:3333`);

const Chat = () => {
  const [msgText, setMsgText] = useState("");
  const [messages, setMessages] = useState([]);
  // const { user1_name, user2_name } = useParams();
  const namesArr = ["tito blah", "bibo mimo"];
  const roomId = genRoomId(namesArr);
  //!MUST be refactored and replaced when rtk query and chatschema is configured

  const { data, isLoading, isSuccess, isError, error } =
    useGetChatByNamesQuery(namesArr);

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

  const handleSendMsg = (e) => {
    e.preventDefault();
    ws.send(JSON.stringify(msgText));
    setMsgText("");
  };

  useEffect(() => {
    ws.onopen = (data) => {
      console.log("🟢🟢🟢  user connected  🟢🟢🟢", data);
      ws.send(roomId);
    };

    ws.onmessage = (e) => {
      const msg = e.data;

      setMessages((prev) => [...prev, msg]);
      console.log(messages);
    };

    ws.onerror = (error) => {
      console.log("⛔⛔⛔ Following  Error ocurred ⛔⛔⛔", error);
    };

    return () => {
      ws.onclose = (data) => {
        console.log("❤️‍🔥❤️‍🔥❤️‍🔥 User Disconnected ❤️‍🔥❤️‍🔥❤️‍🔥", data);
      };
    };
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
