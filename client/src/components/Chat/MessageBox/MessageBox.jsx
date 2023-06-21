export default function MessageBox({ message, loggedUser }) {
  return (
    <div
      style={{
        padding: "0.5rem",
        margin: "1rem",
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)",
        width: "70%",
        alignSelf: message.sender === loggedUser ? "flex-end" : "flex-start",
        borderRadius:
          message.sender === loggedUser
            ? "0.9rem 0.9rem 0 0.9rem"
            : "0 0.9rem 0.9rem 0.9rem",
        backgroundColor: message.sender === loggedUser ? "#50924E" : "#FFFFFF",
        color: message.sender === loggedUser ? "white" : "#3D4260",
      }}
    >
      <p>{`${message.content}`}</p>
    </div>
  );
}
