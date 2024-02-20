import styled from "styled-components";

export const StyledMyJobPage = styled.div`
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 2.5rem 2.5rem 0 0;
  padding: 1rem;
  position: relative;
  top: 8rem;
  left: 0;
  z-index: 2;
  width: 100%;

  @media (min-width: 1000px) {
    padding: 3rem;
    width: 100vw;
    border-radius: 4rem 4rem 0 0;
    top: 9rem;
    align-items: center;
  }
`;

export const Title = styled.h2`
  color: #161616;
  font-family: Poppins;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  /* margin-bottom: 20px; */
  margin-top: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  @media (min-width: 1000px) {
    justify-content: center;
  }
`;
export const StyledJobText = styled.span`
  color: #3d4260;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 1000px) {
    justify-content: center;
  }
`;
