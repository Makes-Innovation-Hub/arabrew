import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { genChatId } from "../../helpers/genChatId.jsx";
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
  //!MUST be refactored and replaced when rtk query and chatschema is configured
  const [messages, setMessages] = useState([]);
  //!

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
    <div>
      <input type="text" onChange={handleChange} value={msgText} />
      <button onClick={handleSendMsg}>Send Message</button>

      {messages.map((message) => (
        <div key={message.createdAt}>
          <h2>{message.sender}</h2>
          <h4>{message.content}</h4>
        </div>
      ))}
    </div>
  );
};

export default Chat;
