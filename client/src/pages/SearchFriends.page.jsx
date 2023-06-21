import { useEffect } from "react";
import { useLazyGetUsersQuery } from "../features/userDataApi.js";
import { FriendsList } from "../components/index.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "../components";
import {
  StyledPage,
  StyledMargin,
  StyledPageTitle,
  StyledHobby,
  StyledHobbiesContainer,
} from "../styles";
import { ArrowLeft, SmallGlass } from "../assets";
import { useSelector } from "react-redux";
const SearchFriends = () => {
  const loggedUser = useSelector((state) => state.userRegister);
  console.log("loggedUser", loggedUser);
  const { nativeLanguage: originLang } = loggedUser.userDetails;
  //! ***************************************************************************
  const [selectedInterests, setSelectedInterests] = useState(
    loggedUser.interests
  );
  const [getUsers, { data = [], error, isError, isLoading, isSuccess }] =
    useLazyGetUsersQuery();

  useEffect(() => {
    getUsers({
      subId: loggedUser.subId,
      interests: selectedInterests,
    });
  }, [selectedInterests]);

  useEffect(() => {
    if (isSuccess) {
      console.log("data", data);
    }
    if (isError) {
      console.log(error);
    }
  }, [isError, isSuccess]);

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
          {loggedUser.userDetails.interests.map((interest) => (
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
        {isSuccess && (
          <FriendsList
            friendsArr={data}
            originLang={originLang}
            userName={loggedUser.name}
          />
        )}
      </StyledPage>
    </>
  );
};

export default SearchFriends;
