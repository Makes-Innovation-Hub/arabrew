import { BackLayout } from "../../styles/PageLayout/BackLayout.jsx";
import { HeaderWrapper } from "../../styles/PageLayout/HeaderWrapper.jsx";
import { TitleWrapper } from "../../styles/PageLayout/TitleWrapper.jsx";
import { PageTitle } from "../../styles/PageLayout/PageTitle.jsx";
import { Container } from "../../styles/PageLayout/Container.jsx";
import { Flex } from "../../styles/Flex.jsx";
import { InstructionPrompt } from "../../styles/BioPage/InstructionPrompt.jsx";
import { StyledSaveAndNextButton } from "../../styles/BioPage/StyledSaveAndNextButton.jsx";
import { BioStyledDiv } from "../../styles/BioPage/BioStyledDiv.jsx";
import { fetchCountryData } from "../../features/CountriesApi.js";
import arrowIcon from "../../assets/arrow.svg";
import { useState, useEffect } from "react";
import CustomDropdown from "../../styles/BirthPage/StyledDropDown.jsx";

export default function NationalityPage() {
  const [countries, setCountries] = useState([]);
  const [selectedNationality, setSelectedNationality] = useState({
    value: "",
    dataField: "nationality",
  });

  useEffect(() => {
    fetchCountryData(setCountries);
  }, []);

  return (
    <BackLayout>
      <HeaderWrapper>
        {/* do not remove this div even if it is empty */}
        <div style={{ width: "20%" }}>
          <img src={arrowIcon} />
        </div>
        <TitleWrapper>
          <PageTitle>Add Nationality</PageTitle>
        </TitleWrapper>

        {/* do not remove this div even if it is empty */}
        <div style={{ width: "20%" }}>
          {/*  here you can add code for additional elements in the header */}
        </div>
      </HeaderWrapper>
      <Container>
        {/* here you can add code for the container page */}
        <Flex
          style={{
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Flex
            style={{
              height: "10%",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            <InstructionPrompt>Add your Nationality</InstructionPrompt>
          </Flex>
          <BioStyledDiv>
            <CustomDropdown
              optionsArray={countries}
              placeHolder="Select"
              selectedYear={selectedNationality}
              setSelectedYear={setSelectedNationality}
              isSearchable={false}
            />
          </BioStyledDiv>
          <Flex style={{ height: "20%", width: "100%" }}>
            <StyledSaveAndNextButton>
              <i>Save & Next</i>
            </StyledSaveAndNextButton>
          </Flex>
        </Flex>
      </Container>
    </BackLayout>
  );
}
