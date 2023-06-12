import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components";
import {
  StyledPage,
  StyledMargin,
  StyledButton,
  StyledPageTitle,
  StyledInput,
  StyledSpan,
  Flex,
} from "../../styles";
import { ArrowLeft } from "../../assets";
import { addDetail } from "../../features/userRegister/userRegisterSlice";

const Occupation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { occupation } = useSelector((state) => state.userRegister.userDetails);
  const [userInput, setUserInput] = useState({
    field: "occupation",
    value: occupation.length > 0 ? occupation : "",
  });

  const { value } = userInput;

  return (
    <div>
      <Header
        leftIcon={
          <Link to="/gender">
            <ArrowLeft />
          </Link>
        }
        title={"Add Occupation"}
      />
      <StyledPage>
        <StyledMargin direction="vertical" margin="1.75rem" />
        <StyledMargin direction="horizontal" margin="35rem">
          <StyledPageTitle>Add your Occupation</StyledPageTitle>
        </StyledMargin>
        <StyledMargin direction="vertical" margin="1.8rem" />
        <StyledInput
          type="text"
          value={value}
          maxLength={30}
          onChange={(e) =>
            setUserInput({ ...userInput, value: e.target.value })
          }
          placeholder="Write Here... For example: Doctor"
        />
        <StyledMargin direction="vertical" margin="2.6rem" />
        <Flex>
          <StyledMargin direction="horizontal" margin="25rem" />
          <StyledSpan fontSize="12px" color="#7F8790" alignSelf="flex-end">
            30 Character
          </StyledSpan>
        </Flex>
        <StyledButton
          to={"/bioPage"}
          disabled={!value}
          onClick={() => {
            dispatch(addDetail(userInput));
            setUserInput({ ...userInput, value: "" });
            navigate("/bioPage");
          }}
          bg={value ? "#50924E" : "#d7ddd6"}
          hoverBg={value ? "#396d37" : "#d7ddd6"}
          text={"Save & Next"}
        ></StyledButton>
      </StyledPage>
    </div>
  );
};
export default Occupation;
