import { BackLayout } from "../../styles/PageLayout/BackLayout.jsx";
import { HeaderWrapper } from "../../styles/PageLayout/HeaderWrapper.jsx";
import { TitleWrapper } from "../../styles/PageLayout/TitleWrapper.jsx";
import { PageTitle } from "../../styles/PageLayout/PageTitle.jsx";
import { Container } from "../../styles/PageLayout/Container.jsx";
import { Flex } from "../../styles/Flex.jsx";
import { InstructionPrompt } from "../../styles/BioPage/InstructionPrompt.jsx";
import { StyledTextArea } from "../../styles/BioPage/StyledTextArea.jsx";
import { StyledSaveAndNextButton } from "../../styles/BioPage/StyledSaveAndNextButton.jsx";
import { StyledNumberOfCharLabel } from "../../styles/BioPage/StyledNumberOfCharLabel.jsx";
import { BioStyledDiv } from "../../styles/BioPage/BioStyledDiv.jsx";
import arrowIcon from "../../assets/arrow.svg";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserDataField } from "../../features/userDataSlice.jsx";
import { useSelector } from "react-redux";
import { useSendUserDataMutation } from "../../features/userDataApi.js";

export default function BioPage() {
  const [text, setText] = useState({
    value: "",
    dataField: "bio",
  });
  const userData = useSelector((state) => state.userData);
  const [sendUserData] = useSendUserDataMutation();

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setText({ ...text, value: inputValue });
  };
  const characterCount = text.value.length;

  const dispatch = useDispatch();

  return (
    <BackLayout>
      <HeaderWrapper>
        {/* do not remove this div even if it is empty */}
        <div style={{ width: "20%" }}>
          <img src={arrowIcon} />
        </div>
        <TitleWrapper>
          <PageTitle>Add Bio</PageTitle>
        </TitleWrapper>

        {/* do not remove this div even if it is empty */}
        <div style={{ width: "20%" }}>
          {/*  here you can add code for additional elements in the header */}
        </div>
      </HeaderWrapper>
      <Container>
        {/* here you can add code for the container page */}
        <Flex
          style={{
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Flex
            style={{
              height: "10%",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            <InstructionPrompt>Add your Bio Description</InstructionPrompt>
          </Flex>
          <BioStyledDiv>
            <StyledTextArea
              value={text.value}
              onChange={handleChange}
              placeholder="Write here...For example: I'm John Doe and Cooking for me is a way of living."
              maxLength={500}
            ></StyledTextArea>
            <StyledNumberOfCharLabel>
              {500 - characterCount} character
            </StyledNumberOfCharLabel>
          </BioStyledDiv>
          <Flex style={{ height: "20%", width: "100%" }}>
            <StyledSaveAndNextButton
              onClick={() => {
                dispatch(addUserDataField(text));
                console.log(userData);
                sendUserData(userData);
              }}
            >
              <i>Save & Finish</i>
            </StyledSaveAndNextButton>
          </Flex>
        </Flex>
      </Container>
    </BackLayout>
  );
}
