import CoffeeMug from "../../../assets/CoffeeMugWithGreenBG.svg";
import PaperPlane from "../../../assets/PaperPlane.svg";

import { InputAreaContainer } from "../../../styles/Chat/InputArea/InputAreaContainer";
import { RecommendedButton } from "../../../styles/Chat/InputArea/RecommendedButton";
import { InputComponent } from "../../../styles/Chat/InputArea/InputComponent";
import { InputWrapper } from "../../../styles/Chat/InputArea/InputWrapper";
import { SendButton } from "../../../styles/Chat/InputArea/SendButton";

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
