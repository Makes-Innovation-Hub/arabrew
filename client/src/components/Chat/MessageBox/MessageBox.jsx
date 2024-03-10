import CoffeMug from "../../../assets/CoffeeMugWithGreenBG.svg";
import { Suggestion, SuggestionText } from "../../styles/Suggestion";

export default function MessageBox({ message, loggedUser }) {
  if (message.sender === "server") {
    return (
      <Suggestion>
        <img src={CoffeMug} alt="coffe mug symbol" />
        <SuggestionText> {message.content}</SuggestionText>
      </Suggestion>
    );
  }
  return (
    <div
      style={{
        padding: "0.5rem",
        margin: "1rem",
        boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.15)",
        width: "70%",
        alignSelf:
          message.sender === loggedUser.name ? "flex-end" : "flex-start",
        borderRadius:
          message.sender === loggedUser.name
            ? "0.9rem 0.9rem 0 0.9rem"
            : "0 0.9rem 0.9rem 0.9rem",
        backgroundColor:
          message.sender === loggedUser.name ? "#50924E" : "#FFFFFF",
        color: "#3D4260",
      }}
    >
      <p>{message.isProfanity ? message.profanity : message.content}</p>
    </div>
  );
}
