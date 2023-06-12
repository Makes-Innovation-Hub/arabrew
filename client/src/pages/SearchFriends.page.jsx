import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLazyGetUsersQuery } from "../features/userDataApi.js";
import { FriendsList } from "../components/index.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Header, Friend } from "../components";
import {
  StyledPage,
  StyledMargin,
  StyledPageTitle,
  StyledHobby,
  StyledHobbiesContainer,
} from "../styles";
import { ArrowLeft, SmallGlass } from "../assets";
const SearchFriends = () => {
  const navigate = useNavigate();
  //! hardcoded until benny finish the LOGGEDUSER slice in the store
  //! then we replace them with useSelector
  const userObj = {
    subId: "54584682",
    interests: ["Yoga", "Reading", "Hiking", "Traveling", "Cooking"],
    name: "Taufiq Zayyad",
  };
  //! ***************************************************************************
  const [selectedInterests, setSelectedInterests] = useState(userObj.interests);
  const [getUsers, { data, error, isError, isLoading, isSuccess }] =
    useLazyGetUsersQuery();
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
    if (isError) {
      console.log(error);
    }
    getUsers({
      subId: userObj.subId,
      interests: selectedInterests,
    });
  }, [isError, isSuccess, selectedInterests]);

  if (isLoading) return <h1>is Loading...</h1>;

  return (
    <>
      <Header
        leftIcon={
          <Link to="/conversation">
            <ArrowLeft />
          </Link>
        }
        midIcon={<SmallGlass />}
      />
      <StyledPage>
        <StyledMargin direction="vertical" margin="1.75rem" />
        <StyledPageTitle>Search friends</StyledPageTitle>
        <StyledMargin direction="vertical" margin="0.75rem" />
        <StyledPageTitle>by common Interests</StyledPageTitle>
        <StyledMargin direction="vertical" margin="2rem" />
        <StyledHobbiesContainer>
          {userObj.interests.map((interest) => (
            <StyledHobby
              border={
                selectedInterests.includes(interest)
                  ? "solid 1px #50924E"
                  : null
              }
              key={interest}
              onClick={() => {
                if (!selectedInterests.includes(interest)) {
                  setSelectedInterests([...selectedInterests, interest]);
                } else {
                  setSelectedInterests(
                    selectedInterests.filter((item) => item !== interest)
                  );
                }
              }}
            >
              {interest}
            </StyledHobby>
          ))}
        </StyledHobbiesContainer>
        <StyledMargin direction="vertical" margin="4rem" />
        {isSuccess && <FriendsList friendsArr={data} userName={userObj.name} />}
      </StyledPage>
    </>
  );
};

export default SearchFriends;
