import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { interestsList } from "../../data/interest.js";
import { useDispatch, useSelector } from "react-redux";
import { addDetail } from "../../features/userRegister/userRegisterSlice.jsx";
import { Navbar } from "../../components/styles/Navbar.jsx";
import { Back } from "../../components/styles/Back.jsx";
import { PageTitle } from "../../components/styles/PageTitle.jsx";
import { EmptyDiv } from "../../components/styles/EmptyDiv.jsx";
import { Content } from "../../components/styles/Content.jsx";
import { ContentTitle } from "../../components/styles/ContentTitle.jsx";
import { ButtonDiv } from "../../components/styles/ButtonDiv.jsx";
import { Button } from "../../components/styles/Button.jsx";
import {
  selectedBtn,
  listBtn,
  selectedContainer,
  wrapper,
} from "../../components/styles/Interests.style.jsx";
const Interests = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [disableSaveBtn, setDisableSaveBtn] = useState(true);
  const [selectedInterests, setSelectedInterests] = useState({
    field: "interests",
    value: [],
    interestsNumber: 0,
  });

  const { value, interestsNumber } = selectedInterests;
  const { interests } = useSelector((state) => state.userRegister);

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
    navigate("/register/occupation");
  };
  useEffect(() => {
    if (interestsNumber === 5) {
      return setDisableSaveBtn(false);
    }
    return setDisableSaveBtn(true);
  }, [interestsNumber]);

  return (
    <div style={wrapper}>
      <Navbar>
        <Back>{"<"}</Back>
        <PageTitle>Add Interests</PageTitle>
        <EmptyDiv></EmptyDiv>
      </Navbar>
      <Content>
        <div
          style={{
            display: "flex",
            margin: "3rem 0",
            fontSize: "0.8rem",
            fontWeight: "500",
          }}
        >
          <ContentTitle>choose five interests </ContentTitle>
          <div style={{ width: "10rem" }} />
          <ContentTitle>{interestsNumber} of 5 </ContentTitle>
        </div>

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
    </div>
  );
};

export default Interests;
