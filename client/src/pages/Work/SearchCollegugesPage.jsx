import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLazyGetUsersQuery } from "../../features/userDataApi.js";
import { FriendsList } from "../../components/index.js";
import { Link } from "react-router-dom";
import { Header } from "../../components/index.js";
import {
  StyledPage,
  StyledMargin,
  StyledPageTitle,
} from "../../styles/index.jsx";
import { ArrowLeft, SmallGlass } from "../../assets/index.jsx";

const SearchColleagues = () => {
  const { userDetails } = useSelector((state) => state.userRegister);
  const [getUsers, { data = [], isLoading, isError, isSuccess }] =
    useLazyGetUsersQuery();

  useEffect(() => {
    // call the API to get users with the same occupation- not finished here.
    getUsers({ occupation: userDetails.occupation });
  }, [getUsers, userDetails.occupation]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error occurred</h1>;

  return (
    <>
      <Header
        leftIcon={
          <Link to="/conversation">
            <ArrowLeft />
          </Link>
        }
        title={<SmallGlass />}
      />
      <StyledPage>
        <StyledMargin direction="vertical" margin="1.75rem" />
        <StyledPageTitle>Search Colleagues</StyledPageTitle>
        <StyledMargin direction="vertical" margin="2rem" />
        {isSuccess && (
          <FriendsList
            friendsArr={data}
            occupation={userDetails.occupation} //this is the component for the hobbies, need to build one without them
            userName={userDetails.name}
          />
        )}
      </StyledPage>
    </>
  );
};

export default SearchColleagues;
