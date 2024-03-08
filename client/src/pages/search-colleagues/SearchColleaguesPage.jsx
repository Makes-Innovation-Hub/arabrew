import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FlagContainer, FlagImg, StyledMargin } from "../../styles";
import { Header } from "../../components";
import { ArrowLeft, SmallGlass } from "../../assets";
import {
  Center,
  StyledAppliersTitle,
  StyledMyJobPage,
  StyledName,
} from "../jobs/myPostedJobspage/StyledMyJobPage";
import {
  Container,
  FirstRow,
  SecondRow,
  StyledApplierImg,
  StyledIconDiv,
  StyledIconImg,
} from "../jobs/jobAppliers/StylesApplierPage";
import flags from "../../assets/countriesAndFlags/by-code.json";
import { useGetWorkUsersQuery } from "../../features/userDataApi";
import { Occupation, StyledOccupationText } from "./StyledSearchColleagues";

function SearchColleaguesPage() {
  const { data, isLoading, isError, isSuccess } = useGetWorkUsersQuery();
  const navigate = useNavigate();
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (isError) {
    return <div>Error fetching users details</div>;
  }
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div>
      <StyledMargin direction="vertical" margin="5%">
        <Header
          leftIcon={
            <div onClick={handleBack}>
              <ArrowLeft />
            </div>
          }
          title={<SmallGlass />}
        />
      </StyledMargin>

      <StyledMyJobPage height="710px">
        <Center>
          <StyledAppliersTitle>Search Colleuges</StyledAppliersTitle>
        </Center>
        <StyledMargin direction="vertical" margin="2rem" />
        {isSuccess && (
          <>
            {data?.data.map((colleague) => (
              <Container key={colleague._id}>
                <FirstRow>
                  <Link to={`/profiled?type=work&userId=${colleague._id}`}>
                    {colleague && colleague.avatar ? (
                      <StyledApplierImg src={colleague.avatar} alt="pic" />
                    ) : (
                      <div>No Avatar</div>
                    )}
                  </Link>
                  <FlagContainer>
                    <FlagImg
                      src={flags[colleague?.userDetails?.nationality]?.image}
                    />
                  </FlagContainer>
                  <StyledName>{colleague?.name?.split(" ")[0]}</StyledName>
                </FirstRow>
                <SecondRow>
                  <Occupation>
                    <StyledOccupationText>
                      {colleague?.userDetails?.occupation}
                    </StyledOccupationText>
                  </Occupation>
                </SecondRow>
                <StyledIconDiv>
                  <StyledIconImg src="https://s3-alpha-sig.figma.com/img/f9a0/eea2/7bbbc8e094e25903c33d7fe5215626af?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHPDssTgqd5-1N91c9oVHhAWf2ze0haMQv7hmjWiBdrDjOaz5mpBsGeQJ-3g2ZD0uJVyFdXyGW-fpKZPubzcP7Ei0LGU03BtSllEWKgNXZ1h3j5krsCHEQjTOmUh-2ed1IlzlXvDv86eoY9on0FNoyesfjV2yJ0S72Bq4E5nVlQg8EDvX11snN5pTqUZPEz1hevqArC-lljOI2RGn-qoYSnFQMfyOiVYhIXQft306PKAvAXN2Kmk8hKD4mUwY3TTg0rbv6sm0VsQbJlZd3m1-UC463anHJiDtWilH17VBmHDJ3BV2S0eRDDSDhUwbOxz8vqk61Tif~j55ZCIwJayqg__" />
                </StyledIconDiv>
              </Container>
            ))}
          </>
        )}
      </StyledMyJobPage>
    </div>
  );
}

export default SearchColleaguesPage;
