import { BackLayout } from "../../styles/PageLayout/BackLayout.jsx";
import { HeaderWrapper } from "../../styles/PageLayout/HeaderWrapper.jsx";
import { TitleWrapper } from "../../styles/PageLayout/TitleWrapper.jsx";
import { PageTitle } from "../../styles/PageLayout/PageTitle.jsx";
import { Container } from "../../styles/PageLayout/Container.jsx";
import { Flex } from "../../styles/Flex.jsx";
import { InstructionPrompt } from "../../styles/BioPage/InstructionPrompt.jsx";
import { StyledSaveAndNextButton } from "../../styles/BioPage/StyledSaveAndNextButton.jsx";
import { BioStyledDiv } from "../../styles/BioPage/BioStyledDiv.jsx";
import { StyledDropDown } from "../../styles/BirthPage/StyledDropDown.jsx";
import { useState, useEffect } from "react";

export default function BioPage() {
  const [startYear, setStartYear] = useState(1980);
  const [years, setYears] = useState([]);
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearsArray = [];
    for (let year = startYear; year <= currentYear - 4; year++) {
      yearsArray.push(year);
    }
    setYears(yearsArray);
  }, [startYear]);

  return (
    <BackLayout>
      <HeaderWrapper>
        {/* do not remove this div even if it is empty */}
        <div style={{ width: "20%" }}></div>
        <TitleWrapper>
          <PageTitle>Add Age</PageTitle>
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
            <InstructionPrompt>Add your Year of Birth</InstructionPrompt>
          </Flex>
          <BioStyledDiv>
            {/* <StyledDropDown>
              <option value="" disabled selected hidden>
                Year
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </StyledDropDown> */}
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
