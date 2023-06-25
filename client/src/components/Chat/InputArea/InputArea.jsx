import CoffeeMug from "../../../assets/CoffeeMugWithGreenBG.svg";
import PaperPlane from "../../../assets/PaperPlane.svg";
import { InputAreaContainer } from "../../../styles/Chat/InputArea/InputAreaContainer";
import { RecommendedButton } from "../../../styles/Chat/InputArea/RecommendedButton";
import { InputComponent } from "../../../styles/Chat/InputArea/InputComponent";
import { InputWrapper } from "../../../styles/Chat/InputArea/InputWrapper";
import { SendButton } from "../../../styles/Chat/InputArea/SendButton";
import { useGetTopicsQuery } from "../../../features/userDataApi";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  addSuggestions,
  increaseIndex,
} from "../../../features/chatData/chatDataSlice";

const InputArea = ({
  typedMsg,
  handleChange,
  handleSendMsg,
  setShowTopics,
  setShowSpinner,
}) => {
  const dispatch = useDispatch();
  const [popUpSuggestion, setPopUpSuggestion] = useState("");
  const index = useSelector((state) => state.chatData.index);
  const buttonRef = useRef(null);

  // GET USER1 NAME USER2 NAME FROM REDUX STORE
  const { data: getTopics } = useGetTopicsQuery({
    user1_name: "Zorich Zygan",
    user2_name: "JOEY JOEY",
  });

  useEffect(() => {
    if (getTopics) {
      if (getTopics.data.length > 0) {
        console.log(getTopics);
        setShowSpinner({ isShowed: false });
        dispatch(addSuggestions(getTopics.data));
        setPopUpSuggestion(getTopics.data[index].suggestion);
      } else {
        setShowSpinner({ isShowed: true });
      }
    }
  }, [getTopics, index]);

  return (
    <InputWrapper>
      <InputAreaContainer>
        <RecommendedButton
          onClick={() => {
            if (!getTopics) {
              setShowSpinner({
                isShowed: true,
              });
            }
            setShowTopics({
              isShowed: true,
              text: popUpSuggestion,
            });
            dispatch(increaseIndex());
          }}
        >
          <img src={CoffeeMug} />
        </RecommendedButton>
        <InputComponent
          value={typedMsg}
          onChange={handleChange}
          placeholder="Start typing..."
        />
        <SendButton onClick={handleSendMsg}>
          <img src={PaperPlane} />
        </SendButton>
      </InputAreaContainer>
    </InputWrapper>
  );
};
export default InputArea;
