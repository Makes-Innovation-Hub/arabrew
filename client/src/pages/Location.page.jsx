import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDetail } from "../../features/userRegister/userRegisterSlice.jsx";

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
import {
  selectedBtn,
  listBtn,
  selectedContainer,
} from "../../components/styles/Interests.style.jsx";

const Location = () => {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [disableSaveBtn, setDisableSaveBtn] = useState(true);
  const [location, setLocation] = useState({
    field: "location",
    value: "",
  });
  const { value } = location;
  //   const { location } = useSelector((state) => state.userRegister);

  const addLocation = (e) => {
    const typedLocation = e.target.value;

    setLocation({
      ...location,
      value: typedLocation,
    });
  };

  const changeLocation = () => {
    setLocation({
      ...selectedInterests,
      value: newInterestsArr,
      interestsNumber: newInterestsArr.length,
    });
  };

  const handleSave = () => {
    dispatch(addDetail(selectedInterests));
  };
  useEffect(() => {
    if (interestsNumber === 5) {
      return setDisableSaveBtn(false);
    }
    return setDisableSaveBtn(true);
  }, [interestsNumber]);

  return (
    <Global>
      <Navbar>
        <Back>{"<"}</Back>
        <PageTitle>Add Interests</PageTitle>
        <EmptyDiv></EmptyDiv>
      </Navbar>
      <Content>
        <div style={{ display: "flex", marginTop: "1 rem" }}>
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
    </Global>
  );
};

export default Location;
