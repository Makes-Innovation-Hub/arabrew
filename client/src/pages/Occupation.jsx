import "../components/styles/Occupation.css";
import { Global } from "../components/styles/Global";
import { Navbar } from "../components/styles/Navbar";
import { Back } from "../components/styles/Back";
import { PageTitle } from "../components/styles/PageTitle";
import { EmptyDiv } from "../components/styles/EmptyDiv";
import { Content } from "../components/styles/Content";
import { Upper } from "../components/styles/Upper";
import { ContentTitle } from "../components/styles/ContentTitle";
import { Input } from "../components/styles/Input";
import { Label } from "../components/styles/Label";
import { ButtonDiv } from "../components/styles/ButtonDiv";
import { Button } from "../components/styles/Button";

import { useDispatch } from "react-redux";
import { addUserData } from "../features/userDataSlice";
import { useState } from "react";

const Occupation = () => {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  return (
    <Global>
      <Navbar>
        <Back>{"<"}</Back>
        <PageTitle>Add Occupation</PageTitle>
        <EmptyDiv></EmptyDiv>
      </Navbar>
      <Content>
        <Upper>
          <ContentTitle>Add your Occupation</ContentTitle>
          <Input
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            maxLength={30}
            placeholder="Write Here...For example: Doctor"
          />
          <Label>30 Character</Label>
        </Upper>
        <ButtonDiv>
          <Button onClick={() => dispatch(addUserData(userInput))}>
            Save & Next
          </Button>
        </ButtonDiv>
      </Content>
    </Global>
  );
};
export default Occupation;
