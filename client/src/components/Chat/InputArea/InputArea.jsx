import CoffeeMug from "../../../assets/CoffeeMugWithGreenBG.svg";
import PaperPlane from "../../../assets/PaperPlane.svg";
import {
  InputAreaContainer,
  RecommendedButton,
  InputComponent,
  InputWrapper,
  SendButton,
} from "./InputAreaStyles";

export default function InputArea() {
  return (
    <InputWrapper>
      <InputAreaContainer>
        <RecommendedButton>
          <img src={CoffeeMug} />
        </RecommendedButton>
        <InputComponent placeholder="Start typing..." />
        <SendButton>
          <img src={PaperPlane} />
        </SendButton>
      </InputAreaContainer>
    </InputWrapper>
  );
}
