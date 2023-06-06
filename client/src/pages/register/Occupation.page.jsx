import React, { useEffect, useState } from "react";
import "../../components/styles/Occupation.css";
import { Global } from "../../components/styles/Global.jsx";
import { Navbar } from "../../components/styles/Navbar.jsx";
import { Back } from "../../components/styles/Back.jsx";
import { PageTitle } from "../../components/styles/PageTitle.jsx";
import { EmptyDiv } from "../../components/styles/EmptyDiv.jsx";
import { Content } from "../../components/styles/Content.jsx";
import { Upper } from "../../components/styles/Upper.jsx";
import { ContentTitle } from "../../components/styles/ContentTitle.jsx";
import { Input } from "../../components/styles/Input.jsx";
import { Label } from "../../components/styles/Label.jsx";
import { ButtonDiv } from "../../components/styles/ButtonDiv.jsx";
import { Button } from "../../components/styles/Button.jsx";

import { useDispatch, useSelector } from "react-redux";
import { addDetail } from "../../features/userRegister/userRegisterSlice.jsx";
import { useNavigate } from "react-router-dom";

const Occupation = () => {
  const dispatch = useDispatch();
  const inittest = useSelector((state) => state.userRegister);
  const navigate = useNavigate();
  const { occupation } = useSelector((state) => state.userRegister.userDetails);
  const [userInput, setUserInput] = useState({
    field: "occupation",
    value: occupation.length > 0 ? occupation : "",
  });
  const { value } = userInput;
  useEffect(() => console.log(inittest), [inittest]);
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
            value={value}
            type="text"
            maxLength={30}
            placeholder="Write Here...For example: Doctor"
          />
          <Label>30 Character</Label>
        </Upper>
        <ButtonDiv>
          <Button
            onClick={() => {
              dispatch(addDetail(userInput));
              navigate("/bioPage");
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
