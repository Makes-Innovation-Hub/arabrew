import { useState, useEffect } from "react";

// const port = import.meta.env.VITE_WEB_SOCKET_PORT;
const port = 3050;
const ws = new WebSocket(`ws://localhost:${port}`);

const Chat = () => {
  const [msgText, setMsgText] = useState("");
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [originalLang, setOriginalLang] = useState("");
  const [targetLang, setTargetLang] = useState("");

  //!MUST be refactored and replaced when rtk query and chatschema is configured
  const [messages, setMessages] = useState([]);

  const handleChange = (e) => setMsgText(e.target.value);

  const handleSendMsg = (e) => {
    e.preventDefault();

    // const stringMsg = JSON.stringify(msgText)
    ws.send(
      JSON.stringify({
        sender: sender,
        receiver: receiver,
        originalLang: originalLang,
        targetLang: targetLang,
        msg: msgText,
      })
    );
    setMsgText("");
  };

  const firstTimeDataSendingHandler = () => {
    ws.send(
      JSON.stringify({
        sender: sender,
        receiver: receiver,
        originalLang: originalLang,
        targetLang: targetLang,
        msg: "open room",
      })
    );
  };

  useEffect(() => {
    ws.onopen = (data) => {
      console.log("data", data);
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
      <input placeholder="sender" onChange={(e) => setSender(e.target.value)} />
      <input
        placeholder="receiver"
        onChange={(e) => setReceiver(e.target.value)}
      />
      <input
        placeholder="originalLang"
        onChange={(e) => setOriginalLang(e.target.value)}
      />
      <input
        placeholder="targetLang"
        onChange={(e) => setTargetLang(e.target.value)}
      />
      <button onClick={firstTimeDataSendingHandler}>
        Automatic Details Sending to the server
      </button>

      <form onSubmit={handleSendMsg}>
        <input type="text" onChange={handleChange} value={msgText} />
        <button type="submit">Send Message</button>
      </form>

      {/* The key={Math.random()} MUST be refactored and replaced when rtk query and chatschema is configuredwith chat.id  */}
      {messages.map((message) => (
        <h4 key={Math.random()}>{message}</h4>
      ))}
    </div>
  );
};

export default Chat;
