import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/index.js";
import {
  StyledPage,
  StyledMargin,
  StyledPageTitle,
  FlagContainer,
  FlagImg,
} from "../../styles/index.jsx";

import { ArrowLeft, SmallGlass } from "../../assets/index.jsx";
import {
  StyledUserList,
  StyledUserItem,
  ProfileImage,
  UserName,
  Occupation,
  OccupationText,
} from "../Work/CollegugesStyle.jsx";
import { useGetWorkQuery } from "../../features/userDataApi.js";
import {
  Container,
  FirstRow,
  SecondRow,
  StyledApplierImg,
  StyledIconDiv,
  StyledIconImg,
} from "../jobs/jobAppliers/StylesApplierPage.jsx";
import {
  Center,
  StyledAppliersTitle,
  StyledMyJobPage,
  StyledName,
} from "../jobs/myPostedJobspage/StyledMyJobPage.jsx";
import flags from "../../assets/countriesAndFlags/by-code.json";

const SearchColleagues = () => {
  const { data: colleagues, isLoading, isError } = useGetWorkQuery();
  // console.log(colleagues[0].userDetails.occupation)

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
      <StyledMyJobPage height="710px">
        <Center>
          <StyledAppliersTitle>Search Colleuges </StyledAppliersTitle>
        </Center>
        <StyledMargin direction="vertical" margin="2rem" />
        {colleagues &&
          colleagues.map((colleague) => (
            <Container key={colleague._id}>
              <FirstRow>
                <StyledApplierImg src={colleague.avatar} alt="pic" />
                <FlagContainer>
                  <FlagImg
                    src={flags[colleague.userDetails.nationality]?.image}
                  />
                </FlagContainer>
                <StyledName>{colleague.name.split(" ")[0]}</StyledName>
              </FirstRow>
              <SecondRow>
                <Occupation>
                  <OccupationText>
                    {colleague.userDetails.occupation}
                  </OccupationText>
                </Occupation>
              </SecondRow>
              <StyledIconDiv>
                <StyledIconImg src="https://s3-alpha-sig.figma.com/img/f9a0/eea2/7bbbc8e094e25903c33d7fe5215626af?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHPDssTgqd5-1N91c9oVHhAWf2ze0haMQv7hmjWiBdrDjOaz5mpBsGeQJ-3g2ZD0uJVyFdXyGW-fpKZPubzcP7Ei0LGU03BtSllEWKgNXZ1h3j5krsCHEQjTOmUh-2ed1IlzlXvDv86eoY9on0FNoyesfjV2yJ0S72Bq4E5nVlQg8EDvX11snN5pTqUZPEz1hevqArC-lljOI2RGn-qoYSnFQMfyOiVYhIXQft306PKAvAXN2Kmk8hKD4mUwY3TTg0rbv6sm0VsQbJlZd3m1-UC463anHJiDtWilH17VBmHDJ3BV2S0eRDDSDhUwbOxz8vqk61Tif~j55ZCIwJayqg__" />
              </StyledIconDiv>
            </Container>

            // <StyledUserItem key={colleague._id}>
            //   <ProfileImage src={colleague.avatar} alt={colleague.name} />
            //   <div>
            //     <UserName>{colleague.name}</UserName>
            //     <Occupation>{colleague.userDetails.Occupation}</Occupation>
            //   </div>
            // </StyledUserItem>
          ))}
      </StyledMyJobPage>
    </>
  );
};

export default SearchColleagues;
