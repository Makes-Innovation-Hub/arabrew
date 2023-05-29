import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "../assets";
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
import { addUserDataField } from "../features/userDataSlice";
import { Header } from "../components";

const Occupation = () => {
  const [userInput, setUserInput] = useState({
    value: "",
    field: "occupation",
  });

  const dispatch = useDispatch();

  return (
    <Global>
      <Header
        leftIcon={
          <Link to="/gender">
            <ArrowLeft />
          </Link>
        }
        title={"Add Occupation"}
      />
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
          <Button onClick={() => dispatch(addUserDataField(userInput))}>
            Save & Next
          </Button>
        </ButtonDiv>
      </Content>
    </Global>
  );
};
export default Occupation;
