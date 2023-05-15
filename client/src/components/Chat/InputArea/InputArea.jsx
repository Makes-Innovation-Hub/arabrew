import { IoSend } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";
import {
  InputAreaContainer,
  RecommendedButton,
  InputComponent,
  InputWrapper,
} from "./InputAreaStyles";

export default function InputArea() {
  return (
    <InputWrapper>
      <InputAreaContainer>
        <RecommendedButton>
          <FiCoffee size="1.2em" color="white" />
        </RecommendedButton>
        <InputComponent placeholder="Start typing..." />
        <IoSend
          style={{
            color: "#50924E",
          }}
          size="1.5rem"
        />
      </InputAreaContainer>
    </InputWrapper>
  );
}
