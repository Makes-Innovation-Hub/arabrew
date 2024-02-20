import styled from "styled-components";

export const MeetupListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    font-family: "Poppins", sans-serif;
  }

  div:first-child {
    color: #161616;
    font-size: 15px;
    font-weight: 700;
    line-height: 100%;
    margin-bottom: 10px; /* Add margin-bottom for space */
  }

  div:not(:first-child) {
    color: #3d4260;
    font-size: 12px;
    font-weight: 500;
    line-height: 150%;
  }

  hr {
    width: 180%;
    border-bottom: 1px solid var(--gray-200, #e2e8f0); /* Adjust the color and thickness as needed */
    margin-top: 10px; /* Adjust the spacing as needed */
  }
`;
