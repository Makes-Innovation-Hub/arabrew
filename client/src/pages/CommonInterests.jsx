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

const CommonInterests = ({ hobbies }) => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);

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
          {hobbies.map((hobby) => (
            <StyledHobby
              border={
                selectedHobbies.includes(hobby) ? "solid 1px #50924E" : null
              }
              key={hobby}
              onClick={() => {
                if (!selectedHobbies.includes(hobby)) {
                  setSelectedHobbies([...selectedHobbies, hobby]);
                } else {
                  setSelectedHobbies(
                    selectedHobbies.filter((item) => item !== hobby)
                  );
                }
              }}
            >
              {hobby}
            </StyledHobby>
          ))}
        </StyledHobbiesContainer>
        <StyledMargin direction="vertical" margin="4rem" />
        {fakeData.map((person) => {
          const { name, avatar, nationality, hobbies } = person;
          return (
            <Friend
              key={name}
              name={name}
              img={avatar}
              flag={nationality}
              hobbies={hobbies}
            />
          );
        })}
      </StyledPage>
    </>
  );
};
export default CommonInterests;
