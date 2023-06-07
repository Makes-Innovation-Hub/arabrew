import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { interestsList } from "../../data/interest.js";
import { useDispatch, useSelector } from "react-redux";
import { addDetail } from "../../features/userRegister/userRegisterSlice.jsx";
import { ArrowLeft } from "../../assets";
import {
  StyledPage,
  StyledMargin,
  StyledPageTitle,
  StyledButton,
} from "../../styles";
import {
  Content,
  ButtonDiv,
  Button,
  Header,
  selectedBtn,
  listBtn,
  selectedContainer,
  wrapper,
} from "../../components/index.js";

const Interests = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [disableSaveBtn, setDisableSaveBtn] = useState(true);

  const { interests } = useSelector((state) => state.userRegister.userDetails);
  const [selectedInterests, setSelectedInterests] = useState({
    field: "interests",
    value: interests.length > 0 ? interests : [],
    interestsNumber: interests.length > 0 ? interests.length : 0,
  });

  const { value, interestsNumber } = selectedInterests;

  const addInterests = (newInterest) => {
    let prevInterests = value;
    const newInterestNoEmoji = newInterest.split(" ")[1];
    const isSelected = prevInterests.indexOf(newInterestNoEmoji);
    if (isSelected !== -1) {
      return;
    }
    if (value.length === 5) {
      return setIsError(true);
    }

    const newInterestsArr = [...value, newInterestNoEmoji];
    setSelectedInterests({
      ...selectedInterests,
      value: newInterestsArr,
      interestsNumber: newInterestsArr.length,
    });
  };

  const removeInterest = (interest) => {
    const newInterestsArr = value.filter(
      (currentInterest) => currentInterest != interest
    );
    setSelectedInterests({
      ...selectedInterests,
      value: newInterestsArr,
      interestsNumber: newInterestsArr.length,
    });
  };

  const handleSave = () => {
    dispatch(addDetail(selectedInterests));
    navigate("/agePage");
  };
  useEffect(() => {
    if (interestsNumber === 5) {
      return setDisableSaveBtn(false);
    }
    return setDisableSaveBtn(true);
  }, [interestsNumber]);
  useEffect(() => {
    dispatch(addDetail(selectedInterests));
  }, [selectedInterests]);
  return (
    <div style={wrapper}>
      <Header
        leftIcon={
          <Link to="/lang">
            <ArrowLeft />
          </Link>
        }
        title={"Add Interests"}
      />
      <StyledPage>
        <StyledMargin direction="horizontal" margin="35rem">
          <StyledPageTitle style={{ marginTop: "2rem" }}>
            Choose five interests &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp; &nbsp; {interestsNumber} of 5{" "}
          </StyledPageTitle>
        </StyledMargin>
        <Content>
          {isError && (
            <h1 style={{ color: "red" }}>
              * max Interests Number, were selected
            </h1>
          )}

          <div style={selectedContainer}>
            {value.map((interest) => (
              <button
                style={selectedBtn}
                key={interest}
                onClick={() => removeInterest(interest)}
              >
                {interest}
                <span> X</span>
              </button>
            ))}
          </div>

          <div>
            {interestsList.map((interest) => (
              <span key={interest}>
                <button style={listBtn} onClick={() => addInterests(interest)}>
                  {interest}
                </button>
              </span>
            ))}
          </div>

          <ButtonDiv>
            <Button onClick={handleSave} disabled={disableSaveBtn}>
              Save & Next
            </Button>
          </ButtonDiv>
        </Content>
      </StyledPage>
    </div>
  );
};

export default Interests;
