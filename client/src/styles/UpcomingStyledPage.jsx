import styled from "styled-components";

export const UpcomingStyledPage = styled.div`
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
  font-size: 18px;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 20px;
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
