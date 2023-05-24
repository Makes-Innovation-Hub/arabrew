import styled from "styled-components";

export const StyledPage = styled.div`
  height: ${({ height }) => height};
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
`;
