import React, { useState, useEffect } from "react";
import { interestsList } from "../../data/interest.js";
import { useDispatch, useSelector } from "react-redux";
import { addDetail } from "../../features/userRegister/userRegisterSlice.jsx";
const Interests = () => {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState({
    field: "interests",
    value: [],
    interestsNumber: 0,
  });

  const { value, interestsNumber } = selectedInterests;
  const { interests } = useSelector((state) => state.userRegister);

  const addInterests = (newInterest) => {
    let prevInterests = value;
    const isSelected = prevInterests.indexOf(newInterest);
    if (isSelected !== -1) {
      return;
    }
    if (value.length === 5) {
      return setIsError(true);
    }
    const newInterestsArr = [...value, newInterest];
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

  useEffect(() => {
    console.log(interests);
  }, [interests]);

  return (
    <div>
      <h1>choose five interests {interestsNumber} of 5</h1>
      {isError && (
        <h3 style={{ color: "red" }}>* max Interests Number, were selected</h3>
      )}
      <div>
        {selectedInterests.value.map((interest) => (
          <button
            style={{
              backgroundColor: "green",
              fontSize: "2rem",
              borderRadius: "4rem",
              padding: "0.4rem",
              border: "none",
              margin: "1rem",
            }}
            key={interest}
            onClick={() => removeInterest(interest)}
          >
            {interest} X
          </button>
        ))}
      </div>
      <div>
        {interestsList.map((interest) => (
          <span key={interest}>
            <button onClick={() => addInterests(interest)}>{interest}</button>
            &nbsp;
          </span>
        ))}
      </div>
      <br />
      <br />

      <button onClick={() => dispatch(addDetail(selectedInterests))}>
        save & continue
      </button>
    </div>
  );
};

export default Interests;
