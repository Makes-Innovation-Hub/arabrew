export default function MessageBox({ message }) {
  return (
    <div
      // this Temp styling here assuming database schema for the single message will be :
      //     const chatSchema = new mongoose.Schema({
      //   sender: {
      //     type: String,
      //     required: true
      //   },
      //   recipient: {
      //     type: String,
      //     required: true
      //   },
      //   message: {
      //     type: String,
      //     required: true
      //   },
      //   timestamp: {
      //     type: Date,
      //     default: Date.now
      //   }
      // });
      style={{
        padding: "0.5rem",
        margin: "1rem",
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)",
        width: "70%",
        alignSelf: message.sender === "User1" ? "flex-end" : "flex-start",
        borderRadius:
          message.sender === "User1"
            ? "0.9rem 0.9rem 0 0.9rem"
            : "0 0.9rem 0.9rem 0.9rem",
        backgroundColor: message.sender === "User1" ? "#50924E" : "#FFFFFF",
        color: message.sender === "User1" ? "white" : "#3D4260",
      }}
    >
      <p>{`${message.message}`}</p>
    </div>
  );
}
