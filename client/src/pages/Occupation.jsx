import { useState } from "react";
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
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addUserDataField } from "../features/userDataSlice";

const Occupation = () => {
  const [userInput, setUserInput] = useState({
    value: "",
    dataField: "occupation",
  });
  const navigate = useNavigate();

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
            onChange={(e) =>
              setUserInput({ ...userInput, value: e.target.value })
            }
            type="text"
            maxLength={30}
            placeholder="Write Here...For example: Doctor"
          />
          <Label>30 Character</Label>
        </Upper>
        <ButtonDiv>
          <Button
            onClick={() => {
              dispatch(addUserDataField(userInput));
              navigate("/bio");
            }}
          >
            Save & Next
          </Button>
        </ButtonDiv>
      </Content>
    </Global>
  );
};
export default Occupation;
