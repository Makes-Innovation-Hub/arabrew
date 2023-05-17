import {
  BackLayout,
  HeaderWrapper,
  TitleWrapper,
  PageTitle,
  Container,
} from "../../components/PageLayout/PageLayoutStyles.jsx";
import { Flex } from "../../styles/Flex.jsx";
import React, { useState, useEffect, useRef } from "react";

export default function BioPage() {
  const [startYear, setStartYear] = useState(1980);
  const [endYear, setEndYear] = useState(new Date().getFullYear());
  const [years, setYears] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearsArray = [];
    for (let year = startYear; year <= currentYear; year++) {
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
            <h3
              style={{
                padding: "2rem 0 2rem 2rem",
                boxSizing: "border-box",
                fontSize: "2.06rem",
                fontWeight: "1000",
              }}
            >
              Add your year of Birth
            </h3>
          </Flex>
          <Flex
            style={{
              height: "70%",
              width: "100%",
              justifyContent: "flex-start",
              flexDirection: "column",
              margin: "0.5rem 0",
            }}
          >
            <select
              style={{
                appearance: "none",
                width: "18rem",
                //  -moz-appearance: "none",
                // -webkit-appearance: "none";
                background: "transparent",
                padding: "0.55rem",
                border: "1px solid #ccc",
                borderRadius: "0.5rem",
                height: "5rem",
                fontSize: "16px",
                lineHeight: "1.5",
                textAlign: "center",
                margin: "5rem 0",
              }}
            >
              <option
                value=""
                disabled
                selected
                hidden
                style={{ color: "rgba(124, 124, 124, 0.5)" }}
              >
                Year
              </option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </Flex>
          <Flex style={{ height: "20%", width: "100%" }}>
            <button
              style={{
                width: "90%",
                height: "5rem",
                margin: "0 auto 0.5rem auto",
                backgroundColor: "#50924e",
                borderRadius: "0.6rem",
                border: "none",
              }}
            >
              <i>Save & Next</i>
            </button>
          </Flex>
        </div>
      </Container>
    </BackLayout>
  );
}
