import styled from "styled-components";

export const JobList = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: "Poppins", sans-serif;
`;

export const JobItem = styled.div`
  padding: 18px;
  margin-bottom: 8px;
  background-color: white;
  width: 100%;
  border-bottom: 1px solid #e2e8f0;

  &:hover {
    background-color: #f8f8f8;
    cursor: pointer;
  }

  h2,
  p {
    margin: 0;
    font-size: 12px;
  }

  h2 {
    font-size: 15px;
    color: #161616;
    font-weight: 700;
  }

  p {
    font-size: 12px;
    color: #3d4260;
  }
`;
