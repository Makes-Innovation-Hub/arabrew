import styled from "styled-components";
export const StyledHeader = styled.div`
  margin-top: 0;
  width: 100%;
  height: 10rem;
  display: flex;
  padding: 1rem;
  background: #50924e;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1.125rem;
  color: #ffffff;
  position: absolute;
  @media (min-width: 700px) {
    padding: 3rem;
    height: 12.5rem;
  }
`;
