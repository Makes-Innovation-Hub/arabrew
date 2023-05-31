import { BackLayout } from "../../styles/PageLayout/BackLayout.jsx";
import { HeaderWrapper } from "../../styles/PageLayout/HeaderWrapper.jsx";
import { TitleWrapper } from "../../styles/PageLayout/TitleWrapper.jsx";
import { PageTitle } from "../../styles/PageLayout/PageTitle.jsx";
import { Container } from "../../styles/PageLayout/Container.jsx";
import { Flex } from "../../styles/Flex.jsx";
import { InstructionPrompt } from "../../styles/BioPage/InstructionPrompt.jsx";
import { StyledSaveAndNextButton } from "../../styles/BioPage/StyledSaveAndNextButton.jsx";
import { BioStyledDiv } from "../../styles/BioPage/BioStyledDiv.jsx";
import arrowIcon from "../../assets/arrow.svg";
import { useState } from "react";
import CustomDropdown from "../../styles/BirthPage/StyledDropDown.jsx";
import Option from "../../styles/NationalityPage/CountriesCustomOPtions.jsx";
import countries from "../../assets/countriesAndFlags/index.json";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

//! 1. (MISSING) COUNTRY CODE is what we need countryName is USELESS \\!!
//! 2. (MISSING) the choosen value should be added to the  the userRegister slice
//! 3. (MISSING) returning the selected value if user go back to the page
export default function NationalityPage() {
  const [selectedNationality, setSelectedNationality] = useState({
    value: "",
    field: "nationality",
  });

  useEffect(() => {
    console.log(selectedNationality);
  }, [selectedNationality]);

  const navigate = useNavigate();
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
              selected={selectedNationality}
              setSelected={setSelectedNationality}
              isSearchable={false}
              customOption={Option}
            />
          </BioStyledDiv>
          <Flex style={{ height: "20%", width: "100%" }}>
            <StyledSaveAndNextButton
              onClick={() => {
                navigate("/location");
              }}
            >
              <i>Save & Next</i>
            </StyledSaveAndNextButton>
          </Flex>
        </Flex>
      </Container>
    </BackLayout>
  );
}
