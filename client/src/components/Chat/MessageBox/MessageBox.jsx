export default function MessageBox({ message }) {
  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        width: "80%",
        textIndent: "10px",
        alignSelf: message.sender === "User1" ? "flex-end" : "flex-start",
        borderRadius:
          message.sender === "User1"
            ? "0.9rem 0.9rem 0 0.9rem"
            : "0 0.9rem 0.9rem 0.9rem",
        backgroundColor: message.sender === "User1" ? "#50924E" : "#FFFFFF",
        color: message.sender === "User1" ? "white" : "#3D4260",
      }}
    >
      <p>{`${message.sender}: ${message.message}`}</p>
      {/* <p>{message.timestamp}</p> */}
    </div>
  );
}
