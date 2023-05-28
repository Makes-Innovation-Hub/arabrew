import { useState, useEffect } from "react";

const port = import.meta.env.VITE_WEB_SOCKET_PORT;
const ws = new WebSocket(`ws://localhost:${port}`);

const Chat = () => {
  const [msgText, setMsgText] = useState("");

  //!MUST be refactored and replaced when rtk query and chatschema is configured
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => setMsgText(e.target.value);

  const handleSendMsg = (e) => {
    e.preventDefault();

    ws.send(JSON.stringify(msgText));
    setMsgText("");
  };

  useEffect(() => {
    ws.onopen = (data) => {
      console.log("🟢🟢🟢  user connected  🟢🟢🟢", data);
      ws.send("user connected!");
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
    <div>
      <form onSubmit={handleSendMsg}>
        <input type="text" onChange={handleChange} value={msgText} />
        <button type="submit">Send Message</button>
      </form>

      {/* The key={Math.random()} MUST be refactored and replaced when rtk query and chatschema is configuredwith chat.id  */}
      {messages.map((message) => (
        <h1 key={Math.random()}>{message}</h1>
      ))}
    </div>
  );
};

export default Chat;
