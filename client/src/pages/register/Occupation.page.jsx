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
  const { workField } = useSelector((state) => state.userRegister.userDetails);
  const [occupationInput, setOccupationInput] = useState({
    field: "occupation",
    value: occupation.length > 0 ? occupation : "",
  });
  const [workFieldInput, setWorkFieldInput] = useState({
    field: "workField",
    value: workField.length > 0 ? workField : "",
  });

  const { value: occupationValue } = occupationInput;
  const { value: workFieldValue } = workFieldInput;

  return (
    <div>
      <Header
        leftIcon={
          <Link to="/bioPage">
            <ArrowLeft />
          </Link>
        }
        title={"Add Occupation"}
      />
      <StyledPage>
        <StyledMargin direction="vertical" margin="1.75rem" />
        <StyledMargin direction="horizontal" margin="35rem">
          <StyledPageTitle>Add your Work Field</StyledPageTitle>
        </StyledMargin>
        <StyledMargin direction="vertical" margin="1.8rem" />
        <StyledInput
          type="text"
          value={workFieldValue}
          maxLength={30}
          onChange={(e) =>
            setWorkFieldInput({ ...workFieldInput, value: e.target.value })
          }
          placeholder="Write Here...For example: Medicine"
        />
        <StyledMargin direction="vertical" margin="2.6rem" />
        <Flex>
          <StyledMargin direction="horizontal" margin="25rem" />
          <StyledSpan fontSize="12px" color="#7F8790" alignSelf="flex-end">
            30 Character
          </StyledSpan>
        </Flex>

        {/* Occupation Input Field */}
        <StyledMargin direction="vertical" margin="2.5rem" />
        <StyledMargin direction="horizontal" margin="35rem">
          <StyledPageTitle>Add your Occupation</StyledPageTitle>
        </StyledMargin>
        <StyledMargin direction="vertical" margin="1.8rem" />
        <StyledInput
          type="text"
          value={occupationValue}
          maxLength={30}
          onChange={(e) =>
            setOccupationInput({ ...occupationInput, value: e.target.value })
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
          to={"/resumePage"}
          disabled={!occupationValue || !workFieldValue}
          onClick={() => {
            dispatch(addDetail(occupationInput));
            dispatch(addDetail(workFieldInput));
            setOccupationInput({ ...occupationInput, value: "" });
            setWorkFieldInput({ ...workFieldInput, value: "" });
            navigate("/resumePage");
          }}
          bg={occupationValue && workFieldValue ? "#50924E" : "#d7ddd6"}
          hoverBg={occupationValue && workFieldValue ? "#396d37" : "#d7ddd6"}
          text={"Save & Next"}
        ></StyledButton>
      </StyledPage>
    </div>
  );
};
export default Occupation;
