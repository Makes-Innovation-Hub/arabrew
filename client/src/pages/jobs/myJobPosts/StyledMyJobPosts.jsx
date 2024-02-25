import styled from "styled-components";

export const StyledMyPostJobTitle = styled.h1`
  color: #161616;
  font-family: Poppins;
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;
  /* margin-bottom: 20px; */
  margin-top: 16px;
`;

export const ContainerSection = styled.div`
  max-width: 390px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  border-bottom: 1px solid var(--gray-200, #e2e8f0);
  &:hover {
    box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.1);
    background-color: #f8f8f8;
    cursor: pointer;
  }
  cursor: pointer;
  @media (min-width: 1000px) {
    justify-content: center;
  }
`;
export const StyledText = styled.span`
  margin-bottom: 8px;
  color: #161616;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;
